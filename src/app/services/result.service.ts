import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ResultService {
    constructor(private _http: Http) {

    }

    getResults(keyword:string) {
        return this._http.get('http://dev-api.secondhandy.it/search?k=' + keyword + '&items=10').map(r => r.json());
    }
}