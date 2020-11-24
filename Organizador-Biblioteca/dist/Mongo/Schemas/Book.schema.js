"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
const Author_schema_1 = require("./Author.schema");
exports.BookSchema = new mongoose_1.Schema({
    name: String,
    author: [Author_schema_1.AuthorSchema],
    realeaseYear: Number,
    publisher: String,
    pages: Number,
});
//# sourceMappingURL=book.schema.js.map