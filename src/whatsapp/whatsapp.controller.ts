import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from './whatsapp.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send')
  async sendWhatsAppMessage(
    @Body('to') to: string,
    @Body('contentSid') contentSid: string,
    @Body('variables') variables: Record<string, string>,
  ) {
    return await this.twilioService.sendWhatsAppMessage(to, contentSid, variables);
  }
}
