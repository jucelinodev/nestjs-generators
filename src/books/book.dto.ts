import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumberString,
} from 'class-validator';

export class ListBookQueryParam {
  @IsOptional()
  @IsNumberString()
  page?: number;

  @IsOptional()
  @IsNumberString()
  pageSize?: number;
}

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
