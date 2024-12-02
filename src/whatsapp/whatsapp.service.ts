import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio;

  constructor() {
    const accountSid = process.env.ACCOUNTSID;
    const authToken = process.env.AUTHTOKEN;
    this.client = new Twilio(accountSid, authToken);
  }

  async sendWhatsAppMessage(to: string, contentSid: string, variables: Record<string, string>) {
    try {
      const message = await this.client.messages.create({
        from: process.env.FROM,  // Número de Twilio
        contentSid: contentSid,
        contentVariables: JSON.stringify(variables),
        to: to,
      });

      console.log(`Message sent with SID: ${message.sid}`);
      return message.sid;
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      throw error;
    }
  }
}
