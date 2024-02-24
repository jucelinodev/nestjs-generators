import { NotFoundException } from '@nestjs/common';
import { BaseRepositoryMongo } from './base.repository';
import { PaginatedData } from './base.types';

export abstract class BaseService<T> {
  constructor(private readonly baseRepository: BaseRepositoryMongo<T>) {}

  async list(page: number, pageSize: number): Promise<PaginatedData<T>> {
    return this.baseRepository.list(page, pageSize);
  }

  async findById(id: string): Promise<T> {
    const item = await this.baseRepository.findById(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  async create(data: any): Promise<T> {
    return this.baseRepository.create(data);
  }

  async update(id: string, updatedFields: any): Promise<T> {
    await this.findById(id);
    return this.baseRepository.update(id, updatedFields);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    return this.baseRepository.delete(id);
  }

  async recover(id: string): Promise<T> {
    return this.baseRepository.recover(id);
  }
}
