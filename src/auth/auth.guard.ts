import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { resolve } from 'path';
import { rejects } from 'assert';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.get('X-ACCESS-TOKEN')
        console.log(request.url)
        if (request.url.indexOf('/api') == 0) {
            return new Promise(async resolve => {
                const user = await this.authService.verify(token)
                request.user = user
                return resolve(user)
            })
        } else {
            return true 
        }
    }
}