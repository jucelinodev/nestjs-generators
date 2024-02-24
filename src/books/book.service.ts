import { Injectable } from '@nestjs/common';
import { IBook } from './book.model';
import { BookRepository } from './book.repository';
import { RestService } from '../shared/base/rest/rest.service';

@Injectable()
export class BookService extends RestService<IBook> {
  constructor(private readonly bookRepository: BookRepository) {
    super(bookRepository);
  }
}
