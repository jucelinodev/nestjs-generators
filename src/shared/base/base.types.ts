export type PaginatedData<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type BaseType = {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};
