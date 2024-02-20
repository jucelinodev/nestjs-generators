import { BaseType } from '../shared/base/base.types';

export type Book = BaseType & {
  name: string;
  description: string;
};
