import { NotFoundException } from '@nestjs/common';
import { BaseRepositoryInMemory } from './base.repository';
import { BaseType, PaginatedData } from './base.types';

export abstract class BaseService<T extends BaseType> {
  constructor(private readonly baseRepository: BaseRepositoryInMemory<T>) {}

  async list(page: number, pageSize: number): Promise<PaginatedData<T>> {
    return this.baseRepository.list(page, pageSize);
  }

  async findById(id: string): Promise<T> {
    const item = this.baseRepository.findById(id);
    if (!item) {
      throw new NotFoundException(
        'não foi encontrado nenhum objeto com esse id',
      );
    }
    return item;
  }

  async create(
    item: Omit<T, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>,
  ): Promise<T> {
    return this.baseRepository.create(item);
  }

  async update(id: string, updatedFields: Partial<Omit<T, 'id'>>): Promise<T> {
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
