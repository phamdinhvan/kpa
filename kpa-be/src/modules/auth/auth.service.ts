import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  health() {
    return { message: 'Auth module ready. JWT structure to be implemented.' };
  }
}
