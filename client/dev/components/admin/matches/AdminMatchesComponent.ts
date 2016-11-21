import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import { MatchService } from '../../../services/MatchService';
import { Match } from '../../../models/Match';

@Component({
    selector: 'admin-matches',
    templateUrl: 'components/admin/matches/matches.html',
    styleUrls: ['components/admin/matches/matches.css']
})
export class AdminMatchesComponent implements OnInit {

    matchForm: Match;
    matches: Match[] = [];

    ngOnInit() {
        this._getAll();
        this.matchForm = {
            _id: '',
            name: ''
        };
    }

    constructor(private _MatchService: MatchService) {}

    private _getAll(): void {
        this._MatchService
            .getAll()
            .subscribe((Matchs) => {
                this.matches = Matchs;
            });
    }

    add(Match: Match): void {
        this._MatchService
            .add(Match)
            .subscribe((m) => {
                this.matches.push(m);
                this.matchForm.name = '';
            });
    }

    remove(id: string): void {
        this._MatchService
            .remove(id)
            .subscribe(() => {
                this.matches.forEach((t, i) => {
                    if (t._id === id)
                        return this.matches.splice(i, 1);
                });
            })
    }
}
