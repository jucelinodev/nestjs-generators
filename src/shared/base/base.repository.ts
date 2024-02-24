import { IBaseRepository } from './base.interfaces';
import { PaginatedData } from './base.types';
import { Model } from 'mongoose';

export abstract class BaseRepositoryMongo<T> implements IBaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  async list(page: number, pageSize: number): Promise<PaginatedData<T>> {
    const skip = (page - 1) * pageSize;
    const total = await this.model.countDocuments({ deleted_at: null });
    const data = await this.model
      .find({ deleted_at: null })
      .skip(skip)
      .limit(pageSize);

    return {
      data,
      total,
      page,
      pageSize: data.length,
    };
  }

  async findById(id: string): Promise<T | undefined> {
    return await this.model.findOne({ _id: id, deleted_at: null });
  }

  async create(data: any): Promise<T> {
    const newItem = new this.model({
      deleted_at: null,
      ...data,
    } as T);
    return (await newItem.save()).toObject();
  }

  async update(id: string, updatedFields: any): Promise<T> {
    const updated = await this.model.findOneAndUpdate(
      { _id: id, deleted_at: null },
      { ...updatedFields, updated_at: new Date() },
      { new: true },
    );
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.model.findOneAndUpdate(
      { _id: id, deleted_at: null },
      { deleted_at: new Date() },
    );
  }

  async recover(id: string): Promise<T> {
    const recovered = await this.model.findOneAndUpdate(
      { _id: id, deleted_at: { $ne: null } },
      { deleted_at: null },
      { new: true },
    );
    return recovered;
  }
}
