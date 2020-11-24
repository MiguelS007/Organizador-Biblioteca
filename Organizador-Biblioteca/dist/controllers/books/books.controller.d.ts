import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';
import { BookDTO } from '../../DTO/books.dto';
export declare class BooksController {
    private readonly bookService;
    constructor(bookService: BooksService);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    getBookByName(bookName: string): Promise<Book[]>;
    getBookByAuthorName(authorName: string): Promise<Book[]>;
    saveBook(newBook: BookDTO): Promise<Book>;
    updateBookById(bookID: string, newBook: BookDTO): Promise<Book>;
    deleteBookById(bookID: string): Promise<string>;
}
