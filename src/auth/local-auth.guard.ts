import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    // * UnComment following line's of code to use sessions instead of JWT authentication
    // async canActivate(context: ExecutionContext) {
    //     const result = (await super.canActivate(context)) as boolean;
    //     const request = context.switchToHttp().getRequest();

    //     await super.logIn(request);
    //     return result;
    // }
}