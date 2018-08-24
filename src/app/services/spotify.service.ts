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
      'Authorization': 'Bearer BQBgb7xiq_CAynAt7GOxa_7sXBL35MUyQqLUbsExu-7Q3uln_G14iT3F0ZOCH8Mfdq-47R8o3RmmuEqKKTE'
    });

    return this.http.get(url, { headers } )

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
    

  }

  getArtists( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data ['artists'].items)); 
  
  }

  getArtist( id: string ) {

    return this.getQuery(`artists/${ id }`);
     // .pipe( map( data => data)); -> you dont need this because you get an specific artist by the ${ id }

  }

}
