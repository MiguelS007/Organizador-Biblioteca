"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const books_dto_1 = require("../../DTO/books.dto");
const book_interface_1 = require("../../Mongo/Interfaces/book.interface");
const book_repository_1 = require("../../Mongo/Repository/book.repository");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAllBooks() {
        const allBooks = await this.bookRepository.getAllBooks();
        if (!allBooks.length)
            throw new common_1.BadRequestException('There are no books register yet');
        return allBooks;
    }
    async getBookById(bookID) {
        try {
            return await this.bookRepository.getBookById(bookID);
        }
        catch (e) {
            throw new common_1.BadRequestException('There are no results');
        }
    }
    async saveBook(newBook) {
        return await this.bookRepository.saveBook(newBook);
    }
    async getBookByName(bookName) {
        const foundBooks = await this.bookRepository.getBookByName(bookName);
        if (!foundBooks.length)
            throw new common_1.BadRequestException('No result for this book name');
        return foundBooks;
    }
    async getBookByAuthorName(authorName) {
        const splitedAuthorName = authorName.split(' ');
        const foundBooks = await this.bookRepository.getBookByAuthorName(splitedAuthorName);
        if (!foundBooks.length)
            throw new common_1.BadRequestException('No result for this author');
        return foundBooks;
    }
    async updateBookById(bookID, newBook) {
        try {
            const bookExists = await this.bookRepository.getBookById(bookID);
            if (bookExists) {
                const updatedBook = await this.bookRepository.updateBookById(bookID, newBook);
                if (updatedBook)
                    'This book was updated successfully';
                return bookExists;
            }
            else {
                throw new common_1.BadRequestException('This book does not exist');
            }
        }
        catch (e) {
            throw new common_1.BadRequestException('This book does not exist');
        }
    }
    async deleteBookById(bookID) {
        try {
            const bookExists = await this.bookRepository.findById(bookID);
            if (bookExists) {
                const deletedBook = await this.bookRepository.deleteBookById(bookID);
                if (deletedBook)
                    return 'This book was deleted successfully';
            }
            else {
                throw new common_1.BadRequestException('This book does not exist');
            }
        }
        catch (e) {
            throw new common_1.BadRequestException('This book does not exist');
        }
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [book_repository_1.BookRepository])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map