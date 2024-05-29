import { IsIn, IsInt, IsOptional, IsString, Min } from "class-validator";

export class SearchAthleteDto{

@IsString()
  searchTerm: string;

  @IsOptional()
  @IsString()
  orderBy: string = 'id';

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  order: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  pageSize: number = 10;

  
  @IsString()
  columnName:string;

}