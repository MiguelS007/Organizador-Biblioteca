import { BookDTO } from 'src/DTO/books.dto';
import { Model } from 'mongoose';
import { Book } from '../Interfaces/book.interface';
export declare class BookRepository {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    getBookByName(bookName: string): Promise<Book[]>;
    getBookByAuthorName(authorName: string[]): Promise<Book[]>;
    saveBook(newBook: BookDTO): Promise<Book>;
    findById(bookID: string): Promise<Book>;
    updateBookById(bookId: string, newBook: BookDTO): Promise<Book>;
    deleteBookById(bookID: string): Promise<Book>;
}
