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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const books_dto_1 = require("../../DTO/books.dto");
const mongoose_2 = require("mongoose");
let BookRepository = class BookRepository {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async getAllBooks() {
        return await this.bookModel
            .find({}, { __v: false })
            .sort({ name: +1 })
            .exec();
    }
    async getBookById(bookID) {
        return await this.bookModel.findById(bookID, { __v: false });
    }
    async getBookByName(bookName) {
        return await this.bookModel.find({
            name: { $regex: bookName, $options: 'i' },
        }, { __v: false });
    }
    async getBookByAuthorName(authorName) {
        return await this.bookModel.find({
            $or: [
                { 'author.name': { $in: authorName } },
                { 'author.surname': { $in: authorName } },
            ],
        });
    }
    async saveBook(newBook) {
        const saveBook = new this.bookModel(newBook);
        return await saveBook.save();
    }
    async findById(bookID) {
        return await this.bookModel.findById(bookID, { __v: false });
    }
    async updateBookById(bookId, newBook) {
        return await this.bookModel.replaceOne({ _id: bookId }, newBook);
    }
    async deleteBookById(bookID) {
        return await this.bookModel.findOneAndDelete({ _id: bookID });
    }
};
BookRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('book')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map