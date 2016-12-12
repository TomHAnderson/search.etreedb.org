import { User } from './user';

export class Artist
{
    id: number;
    name: string;
    icon: string;
    createdAt: Date;
    abbreviation: string;
    isTradable: boolean;
    description: string;
    user: User;
    lastUser: User;
}