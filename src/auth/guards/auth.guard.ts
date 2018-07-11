import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '..';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.get('X-ACCESS-TOKEN')
        console.log(request.url)
        if (request.url.indexOf('/api') == 0) {
            return new Promise(async (resolve, reject) => {
                try {
                    const user = await this.authService.verify(token)
                    request.user = user
                    return resolve(true)
                } catch (e) {
                    return reject(e)
                }
            })
        } else {
            return true
        }
    }
}