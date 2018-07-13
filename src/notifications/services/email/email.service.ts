
import { Injectable } from '@nestjs/common'
import { EmailClient } from './email.client';

@Injectable()
export class EmailService {
  constructor(private readonly client: EmailClient) { }

  send(emailObject) {
    this.client.send(emailObject)
  }
}