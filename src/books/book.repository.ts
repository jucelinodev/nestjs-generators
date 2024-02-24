import { BaseRepositoryMongo } from '../shared/base/base.repository';
import { Book, IBook } from './book.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends BaseRepositoryMongo<IBook> {
  constructor() {
    super(Book);
  }
}
