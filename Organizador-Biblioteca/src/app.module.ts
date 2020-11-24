import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksController } from './controllers/books/books.controller';
import { BookRepository } from './Mongo/Repository/book.repository';
import { BookSchema } from './Mongo/Schemas/book.schema';
import { BooksService } from './Services/books/books.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/biblioteca'),

    MongooseModule.forFeature([{ name: 'book', schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class AppModule {}
