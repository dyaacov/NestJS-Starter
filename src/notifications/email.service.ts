
import { Injectable } from '@nestjs/common'

@Injectable()
export class EmailService {

  send(from, to, subject, html) {
    console.log('email sent!')
  }
}