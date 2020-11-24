import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  IsPositive,
  ArrayMinSize,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';

import { AuthorDTO } from './athor.dto';

export class BookDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly name: string;

  @IsNotEmpty()
  @Type(() => AuthorDTO)
  @ArrayMinSize(1)
  @IsNotEmptyObject({ each: true })
  @ValidateNested({ each: true })
  readonly author: AuthorDTO[];

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly language: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly realeseYear: number;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  readonly publisher: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly pages: number;
}
