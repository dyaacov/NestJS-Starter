import { CallHandler, Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
    data: T;
}

@Injectable()
export class RouterInterceptor
    implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> {
        return next.handle().pipe(map(data => ({ data, "success": true })));
    }
}