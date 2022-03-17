import { LoginDto } from './login.dto';

export interface SignInDto extends LoginDto {
  email: string;
}
