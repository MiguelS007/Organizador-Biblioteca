import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';

import { BookDTO } from '../../DTO/books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.bookService.getAllBooks();
  }

  @Get('id/:bookID')
  async getBookById(@Param('bookID') bookID: string): Promise<Book> {
    return await this.bookService.getBookById(bookID);
  }

  @Get('name/:bookName')
  async getBookByName(@Param('bookName') bookName: string): Promise<Book[]> {
    return await this.bookService.getBookByName(bookName);
  }

  @Get('author/:authorName')
  async getBookByAuthorName(
    @Param('authorName') authorName: string,
  ): Promise<Book[]> {
    return await this.bookService.getBookByAuthorName(authorName);
  }

  @Post()
  async saveBook(@Body() newBook: BookDTO): Promise<Book> {
    return await this.bookService.saveBook(newBook);
  }

  @Patch('id/:bookID')
  async updateBookById(
    @Param('bookID') bookID: string,
    @Body() newBook: BookDTO,
  ): Promise<Book> {
    return await this.bookService.updateBookById(bookID, newBook);
  }

  @Delete('id/:bookID')
  async deleteBookById(@Param('bookID') bookID: string) {
    return await this.bookService.deleteBookById(bookID);
  }
}
