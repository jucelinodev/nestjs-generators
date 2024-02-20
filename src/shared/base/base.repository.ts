import { v4 as uuidv4 } from 'uuid';
import { IBaseRepository } from './base.interfaces';
import { BaseType, PaginatedData } from './base.types';

export abstract class BaseRepositoryInMemory<T extends BaseType>
  implements IBaseRepository<T>
{
  private inMemory: T[] = [];

  private shouldInclude(item: T): boolean {
    return !item.deleted_at;
  }

  list(page: number, pageSize: number): PaginatedData<T> {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const filteredItems = this.inMemory.filter((item) =>
      this.shouldInclude(item),
    );
    const data = filteredItems.slice(start, end);
    const total = filteredItems.length;
    return {
      data,
      total,
      page,
      pageSize,
    };
  }

  findById(id: string): T | undefined {
    return this.inMemory.find(
      (item) => item.id === id && this.shouldInclude(item),
    );
  }

  create(item: Omit<T, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>): T {
    const newItem = {
      id: uuidv4(),
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
      ...item,
    } as T;
    this.inMemory.push(newItem);
    return newItem;
  }

  update(id: string, updatedFields: Partial<Omit<T, 'id'>>): T {
    const index = this.inMemory.findIndex(
      (item) => item.id === id && this.shouldInclude(item),
    );
    if (index !== -1) {
      const updated = {
        ...this.inMemory[index],
        ...updatedFields,
        updated_at: new Date(),
      };
      this.inMemory[index] = updated;
      return updated;
    }
  }

  delete(id: string): void {
    const index = this.inMemory.findIndex(
      (item) => item.id === id && this.shouldInclude(item),
    );
    if (index !== -1) {
      this.inMemory[index].deleted_at = new Date();
    }
  }

  recover(id: string): T {
    const index = this.inMemory.findIndex(
      (item) => item.id === id && item.deleted_at !== null,
    );
    if (index !== -1) {
      this.inMemory[index].deleted_at = null;
      return this.inMemory[index];
    }
  }
}
