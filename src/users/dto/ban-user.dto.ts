import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
  @ApiProperty({ example: "1", description: "Идентификатор пользователя" })
  @IsNumber({}, { message: "Должно быть целочисленным числом" })
  readonly userId: number;

  @ApiProperty({ example: "Хулиганство", description: "Причина бана" })
  @IsString({ message: "Должно быть строкой" })
  readonly banReason: string;
}
