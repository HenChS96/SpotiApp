import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('service ready!');
  }

  getQuery( query:string ){

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAVxs4oHxq7k1mYKYn8VCi50w_TjJfaKE41B2acZC0NV-joCXxgDEwjg7BeRybl_2lgEuQig147R70SPnA'
    });

    return this.http.get(url, { headers } )

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
    

  }

  getArtist( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data ['artists'].items)); 
  
  }

}
