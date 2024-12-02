import { Module } from '@nestjs/common';
import { TwilioService } from './whatsapp.service';
import { MessagesController } from './whatsapp.controller';

@Module({
  providers: [TwilioService],
  controllers: [MessagesController],
})
export class WhatsappModule {}
