import { NotFoundException } from '@nestjs/common';
import { RestRepositoryMongo } from './rest.repository';
import { PaginatedData } from './rest.types';

export abstract class RestService<T> {
  constructor(private readonly restRepository: RestRepositoryMongo<T>) {}

  async list(page: number, pageSize: number): Promise<PaginatedData<T>> {
    return this.restRepository.list(page, pageSize);
  }

  async findById(id: string): Promise<T> {
    const item = await this.restRepository.findById(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  async create(data: any): Promise<T> {
    return this.restRepository.create(data);
  }

  async update(id: string, updatedFields: any): Promise<T> {
    await this.findById(id);
    return this.restRepository.update(id, updatedFields);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    return this.restRepository.delete(id);
  }

  async recover(id: string): Promise<T> {
    return this.restRepository.recover(id);
  }
}
