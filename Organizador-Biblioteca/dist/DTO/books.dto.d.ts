import { AuthorDTO } from './athor.dto';
export declare class BookDTO {
    readonly name: string;
    readonly author: AuthorDTO[];
    readonly language: string;
    readonly realeseYear: number;
    readonly publisher: string;
    readonly pages: number;
}
