import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor ( 
        private readonly usersService: UsersService, 
        private readonly jwtService: JwtService
    ) {}

    async register({name, email, password}: RegisterDto){
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            throw new BadRequestException('User existente');
        }
        return await this.usersService.create({ name,  email, password: await bcryptjs.hash(password, 10)
        });
    }
      // recuperacion correcta de email y password    // console.log('user:', user); Ver retorno de user
    async login({ email, password }: LoginDto){const user = await this.usersService.findOneByEmail(email);
        
        if (!user) {
            throw new UnauthorizedException('Error email'); 
        }
        
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Password error');
        }
        const payload = { email: user.email };
        const token = await this.jwtService.signAsync(payload)
        return { token,email,};
    }
}
