import { NestFactory, APP_GUARD } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import * as bodyParser from 'body-parser'
import { RouterInterceptor } from './core';
import { AuthGuard } from './auth';

declare const module: any

async function bootstrap() {
    console.log('### bootstrap')
    const app = await NestFactory.create(ApplicationModule)
    app.use(bodyParser.json())
    //const authGuard: AuthGuard = app.select(ApplicationModule).get(APP_GUARD)
    //app.useGlobalGuards(authGuard)
    app.useGlobalInterceptors(new RouterInterceptor())
    const port = process.env.PORT || 8080
    await app.listen(port)
    console.log(`### Server listening on port ${port} ###`)

}
bootstrap()