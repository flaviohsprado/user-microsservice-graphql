import { Request } from 'express';
import { IAuth } from './auth.interface';

export interface IAuthRequest extends Request {
  user: IAuth;
}
