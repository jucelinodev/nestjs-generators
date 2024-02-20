import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
} from '@nestjs/common';
import { BookService } from './book.service';
import { PaginatedData } from '../shared/base/base.types';
import { Book } from './book.types';
import { CreateBookDto, UpdateBookDto } from './book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async list(
    @Query() queryParams: { page: string; pageSize: string },
  ): Promise<PaginatedData<Book>> {
    const page = Number(queryParams.page) || 1;
    const pageSize = Number(queryParams.pageSize) || 25;
    return await this.bookService.list(page, pageSize);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findById(id);
  }

  @HttpCode(201)
  @Post()
  async create(@Body() body: CreateBookDto): Promise<Book> {
    return await this.bookService.create(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateBookDto,
  ): Promise<Book> {
    return await this.bookService.update(id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.bookService.delete(id);
  }

  @Get('/recover/:id')
  async recover(@Param('id') id: string): Promise<Book> {
    return await this.bookService.recover(id);
  }
}
