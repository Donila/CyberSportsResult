import { Game } from './Game';

export class Team {
    _id?: string;
    name: string;
    game?: Game;
    description?: string;
    picture?: string;
    createdAt?: Date;
}
