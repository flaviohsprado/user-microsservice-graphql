/* istanbul ignore file */
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class TransformInterceptor {
  intercept(context, next) {
    return next.handle().pipe(map((data) => instanceToPlain(data)));
  }
}
