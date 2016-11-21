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
import { Match } from '../models/Match';

@Injectable()
export class MatchService {
    static ENDPOINT: string = '/api/matches/:id';

    constructor( @Inject(Http) private _http: Http) {

    }

    getAll(): Observable<any> {
        return this._http
            .get(MatchService.ENDPOINT.replace(':id', ''))
            .map((r) => r.json());
    }

    add(match: Match): Observable<any> {
        let _messageStringified = JSON.stringify(match);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this._http
            .post(MatchService.ENDPOINT.replace(':id', ''), _messageStringified, { headers })
            .map((r) => r.json());
    }

    remove(id: string): Observable<any> {
        return this._http
            .delete(MatchService.ENDPOINT.replace(':id', id));
    }
}
