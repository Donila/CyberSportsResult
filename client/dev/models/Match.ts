import { Team } from './Team';
import { Player } from './Player';

export interface PlayerScore {
    player: string,
    score: number
}

export interface TeamScore {
    team: string,
    score: number
}

export class Match {
    _id?: string;
    picture?: string;
    createdAt?: Date;
    finished?: Date;
    teams?: Array<TeamScore>;
    players?: Array<PlayerScore>;
}
