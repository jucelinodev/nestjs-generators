import { RestRepositoryMongo } from '../shared/base/rest/rest.repository';
import { Book, IBook } from './book.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends RestRepositoryMongo<IBook> {
  constructor() {
    super(Book);
  }
}
