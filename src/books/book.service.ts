import { Injectable } from '@nestjs/common';
import { IBook } from './book.model';
import { BookRepository } from './book.repository';
import { BaseService } from '../shared/base/base.service';

@Injectable()
export class BookService extends BaseService<IBook> {
  constructor(private readonly bookRepository: BookRepository) {
    super(bookRepository);
  }
}
