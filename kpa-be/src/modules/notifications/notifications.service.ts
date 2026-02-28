import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  health() {
    return { message: 'Notifications module placeholder.' };
  }
}
