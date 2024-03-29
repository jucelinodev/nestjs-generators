import { PaginatedData } from './rest.types';

export interface IRestRepository<T> {
  list(page: number, pageSize: number): Promise<PaginatedData<T>>;
  findById(id: string): Promise<T> | undefined;
  create(data: any): Promise<T>;
  update(id: string, updatedFields: any): Promise<T>;
  delete(id: string): Promise<void>;
  recover(id: string): Promise<T>;
}
