import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    saveBook(newBook: BookDTO): Promise<Book>;
    getBookByName(bookName: string): Promise<Book[]>;
    getBookByAuthorName(authorName: string): Promise<Book[]>;
    updateBookById(bookID: string, newBook: BookDTO): Promise<Book>;
    deleteBookById(bookID: string): Promise<string>;
}
