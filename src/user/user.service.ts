import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Faizan',
            username: 'faizan',
            password: '12345678'
        },
        {
            id: 2,
            name: 'Burhan',
            username: 'burhan',
            password: '12345678'
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
