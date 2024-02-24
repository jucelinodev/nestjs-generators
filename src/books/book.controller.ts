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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginatedData } from '../shared/base/rest/rest.types';
import { CreateBookDto, ListBookQueryParam, UpdateBookDto } from './book.dto';
import { BookService } from './book.service';
import { IBook } from './book.model';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: 'Endpoint to list and page Books' })
  @Get()
  async list(
    @Query() queryParams: ListBookQueryParam,
  ): Promise<PaginatedData<IBook>> {
    const page = Number(queryParams.page) || 1;
    const pageSize = Number(queryParams.pageSize) || 25;
    return await this.bookService.list(page, pageSize);
  }

  @ApiOperation({ summary: 'Endpoint to find Book by id' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IBook> {
    return await this.bookService.findById(id);
  }

  @ApiOperation({ summary: 'Endpoint to create Book' })
  @HttpCode(201)
  @Post()
  async create(@Body() body: CreateBookDto): Promise<IBook> {
    return await this.bookService.create(body);
  }

  @ApiOperation({ summary: 'Endpoint to update Book' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateBookDto,
  ): Promise<IBook> {
    return await this.bookService.update(id, body);
  }

  @ApiOperation({ summary: 'Endpoint to "soft delete" Book' })
  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.bookService.delete(id);
  }

  @ApiOperation({ summary: 'Endpoint to "recover" Book' })
  @Get('/recover/:id')
  async recover(@Param('id') id: string): Promise<IBook> {
    return await this.bookService.recover(id);
  }
}
