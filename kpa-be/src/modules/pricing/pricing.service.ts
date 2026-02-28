import { Injectable } from '@nestjs/common';

@Injectable()
export class PricingService {
  health() {
    return { message: 'Pricing module placeholder.' };
  }
}
