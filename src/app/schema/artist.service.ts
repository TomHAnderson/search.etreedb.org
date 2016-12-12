import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Artist } from './artist';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtistService
{
    private url = 'https://api.etreedb.org/artist';

    constructor (private http: Http) {}

    find(id: number): Promise<Artist> {
        return this.http.get(this.url + '/' + id)
            .toPromise()
            .then(
                response => response.json() as Artist
            )
            .catch(this.handleError);   
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
