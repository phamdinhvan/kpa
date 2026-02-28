import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDriverDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  vehicleType: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
