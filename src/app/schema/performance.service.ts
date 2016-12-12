import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Artist } from './artist';
import { CollectionResponse } from './collection-response';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PerformanceService
{
    private url = 'https://api.etreedb.org/performance';

    constructor (private http: Http) {}

    search(params: string): Promise<CollectionResponse> {
        alert('url load');
        return this.http.get(this.url + '?' + params)
            .toPromise()
            .then(
                response => response.json()
            )
            .catch(this.handleError);
    }

    find(id: number): Promise<Performance> {
        return this.http.get(this.url + '/' + id)
            .toPromise()
            .then(
                response => response.json() as Performance
            )
            .catch(this.handleError);   
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
