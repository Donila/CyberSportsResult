import {
    Inject,
    Injectable
} from '@angular/core';

import {
    Observable
} from 'rxjs/Observable';

import {
    Http,
    Headers
} from '@angular/http';

import 'rxjs/add/operator/map';
import { Team } from '../models/Team';

@Injectable()
export class TeamService {
    static ENDPOINT: string = '/api/teams/:id';

    constructor( @Inject(Http) private _http: Http) {

    }

    getAll(): Observable<any> {
        return this._http
            .get(TeamService.ENDPOINT.replace(':id', ''))
            .map((r) => r.json());
    }

    add(team: Team): Observable<any> {
        let _messageStringified = JSON.stringify(team);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this._http
            .post(TeamService.ENDPOINT.replace(':id', ''), _messageStringified, { headers })
            .map((r) => r.json());
    }

    remove(id: string): Observable<any> {
        return this._http
            .delete(TeamService.ENDPOINT.replace(':id', id));
    }
}
