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
import { Player } from '../models/Player';

@Injectable()
export class PlayerService {
    static ENDPOINT: string = '/api/players/:id';

    constructor( @Inject(Http) private _http: Http) {

    }

    getAll(): Observable<any> {
        return this._http
            .get(PlayerService.ENDPOINT.replace(':id', ''))
            .map((r) => r.json());
    }

    add(player: Player): Observable<any> {
        let _messageStringified = JSON.stringify(player);

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this._http
            .post(PlayerService.ENDPOINT.replace(':id', ''), _messageStringified, { headers })
            .map((r) => r.json());
    }

    remove(id: string): Observable<any> {
        return this._http
            .delete(PlayerService.ENDPOINT.replace(':id', id));
    }
}
