import { Team } from './Team';
import { Player } from './Player';

export class Match {
    _id?: string;
    name: string;
    picture?: string;
    createdAt?: Date;
    opponents?: [Team | Player];
    score?: [{ op: Team | Player, score: number }];
}
