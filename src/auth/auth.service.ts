import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validate(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (user && user.password === password) {
            const { username, password, ...rest } = user;
            return rest;
        }

        return null;
    }

    async login(user: any) {
        const payload = { name: user.name, sub: user.id };

        return {
            'access_token': this.jwtService.sign(payload)
        }
    }
}
