import { User } from "./user.interface";

export interface Auth{
    user:User;
    isActive: boolean;
    rules:'ADMIN'|'USER'
}