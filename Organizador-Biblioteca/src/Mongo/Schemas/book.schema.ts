import { Schema } from 'mongoose';
import { AuthorSchema } from './Author.schema';

export const BookSchema = new Schema({
  name: String,
  author: [AuthorSchema],
  realeaseYear: Number,
  publisher: String,
  pages: Number,
});
