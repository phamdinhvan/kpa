import { IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateDriverDto {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  vehicleType?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
