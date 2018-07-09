import { NestFactory, APP_GUARD } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import * as bodyParser from 'body-parser'
import { EmailClient } from './notifications';
//import { AuthGuard } from './auth/guards/auth.guard';
//import { RouterInterceptor } from './core/interceptors/router.interceptor';

declare const module: any

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule)
    app.use(bodyParser.json())
    //const authGuard: AuthGuard = app.select(ApplicationModule).get(APP_GUARD)
    //app.useGlobalGuards(authGuard)
    //app.useGlobalInterceptors(new RouterInterceptor())
    console.log('EmailClient:', app.get(EmailClient))
    const port = process.env.PORT || 8080
    await app.listen(port)
    console.log(`### Server listening on port ${port} ###`)

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }

}
bootstrap()