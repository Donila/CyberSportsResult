import { Team } from './Team'

export class Player {
    _id: string;
    name: string;
    picture?: string;
    nicknames?: [string];
    created?: Date;
    updated?: Date;
    teams?: [{ team: string | Team, past: boolean }];
}
