import { PaginatedData } from './base.types';

export interface IBaseRepository<T> {
  list(page: number, pageSize: number): PaginatedData<T>;
  findById(id: string): T | undefined;
  create(item: Omit<T, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>): T;
  update(id: string, updatedFields: Partial<Omit<T, 'id'>>): void;
  delete(id: string): void;
  recover(id: string): void;
}
