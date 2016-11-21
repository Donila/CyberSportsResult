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
import { Game } from '../models/Game';

@Injectable()
export class GameService {
    static ENDPOINT: string = '/api/games/:id';

    constructor( @Inject(Http) private _http: Http) {

    }

    getAll(): Observable<any> {
        return this._http
            .get(GameService.ENDPOINT.replace(':id', ''))
            .map((r) => r.json());
    }

    add(game: Game): Observable<any> {
        let _messageStringified = JSON.stringify(game);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this._http
            .post(GameService.ENDPOINT.replace(':id', ''), _messageStringified, { headers })
            .map((r) => r.json());
    }

    remove(id: string): Observable<any> {
        return this._http
            .delete(GameService.ENDPOINT.replace(':id', id));
    }
}
