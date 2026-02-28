import { IsString, IsOptional, IsNumber, IsUUID } from 'class-validator';

export class UpdateJobDto {
  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  pickupLocation?: string;

  @IsString()
  @IsOptional()
  dropoffLocation?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsUUID()
  @IsOptional()
  driverId?: string | null;
}
