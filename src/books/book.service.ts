import { Injectable } from '@nestjs/common';
import { Book } from './book.types';
import { BookRepository } from './book.repository';
import { BaseService } from '../shared/base/base.service';

@Injectable()
export class BookService extends BaseService<Book> {
  constructor(private readonly bookRepository: BookRepository) {
    super(bookRepository);
  }
}
