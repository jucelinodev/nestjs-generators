import { BaseRepositoryInMemory } from 'src/base/base.repository';
import { Book } from './book.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends BaseRepositoryInMemory<Book> {}