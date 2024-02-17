import { BaseType } from '../base/base.types';

export type Book = BaseType & {
  name: string;
  description: string;
};
