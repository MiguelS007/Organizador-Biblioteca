import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks(): Promise<Book[]> {
    const allBooks = await this.bookRepository.getAllBooks();

    if (!allBooks.length)
      throw new BadRequestException('There are no books register yet');

    return allBooks;
  }

  async getBookById(bookID: string): Promise<Book> {
    try {
      return await this.bookRepository.getBookById(bookID);
    } catch (e) {
      throw new BadRequestException('There are no results');
    }
  }

  async saveBook(newBook: BookDTO): Promise<Book> {
    return await this.bookRepository.saveBook(newBook);
  }

  async getBookByName(bookName: string): Promise<Book[]> {
    const foundBooks = await this.bookRepository.getBookByName(bookName);

    if (!foundBooks.length)
      throw new BadRequestException('No result for this book name');

    return foundBooks;
  }

  async getBookByAuthorName(authorName: string): Promise<Book[]> {
    const splitedAuthorName = authorName.split(' ');
    const foundBooks = await this.bookRepository.getBookByAuthorName(
      splitedAuthorName,
    );

    if (!foundBooks.length)
      throw new BadRequestException('No result for this author');

    return foundBooks;
  }

  async updateBookById(bookID: string, newBook: BookDTO): Promise<Book> {
    try {
      const bookExists = await this.bookRepository.getBookById(bookID);

      if (bookExists) {
        const updatedBook = await this.bookRepository.updateBookById(
          bookID,
          newBook,
        );

        if (updatedBook) 'This book was updated successfully';

        return bookExists;
      } else {
        throw new BadRequestException('This book does not exist');
      }
    } catch (e) {
      throw new BadRequestException('This book does not exist');
    }
  }

  async deleteBookById(bookID: string) {
    try {
      const bookExists = await this.bookRepository.findById(bookID);

      if (bookExists) {
        const deletedBook = await this.bookRepository.deleteBookById(bookID);

        if (deletedBook) return 'This book was deleted successfully';
      } else {
        throw new BadRequestException('This book does not exist');
      }
    } catch (e) {
      throw new BadRequestException('This book does not exist');
    }
  }
}
