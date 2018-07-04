import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import * as bodyParser from 'body-parser'
import { AuthGuard } from './auth/auth.guard';

declare const module: any

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule)
    app.use(bodyParser.json())
    const authGuard = app.select(ApplicationModule).get(AuthGuard)
    app.useGlobalGuards(authGuard)
    const port = 8080
    console.log(`### Server listening on port ${port} ###`)
    await app.listen(port)

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap()