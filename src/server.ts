import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import * as bodyParser from 'body-parser'

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule)
    app.use(bodyParser.json())
    const port = 3000
    console.log(`### Server listening on port ${port} ###`)
    await app.listen(port)
}
bootstrap()