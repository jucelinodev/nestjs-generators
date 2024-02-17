import { Injectable } from '@nestjs/common';
import { Book } from './book.types';
import { BaseService } from 'src/base/base.service';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService extends BaseService<Book> {
  constructor(private readonly bookRepository: BookRepository) {
    super(bookRepository);
  }
}
