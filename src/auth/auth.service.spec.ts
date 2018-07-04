import { AuthService } from './auth.service'
import { UsersService } from '../users/users.service';
import { Catch } from '@nestjs/common';

describe('AuthService', () => {

    let usersService: UsersService
    let authsService: AuthService

    beforeEach(() => {
        usersService = new UsersService();
        authsService = new AuthService(usersService);
    });

    it('should fail to create token when user details are missing', async () => {

        try {
            await authsService.auth(null)
            fail('expected error')
        } catch (e) {
            console.log(e.message)
        }

    });

    it('should pass with user details', async () => {
        try {
            const user = await authsService.auth({ username: 'admin@admin.com', password: 'password' })
            console.log(user)
        } catch (e) {
            fail(e)
        }

    });
});