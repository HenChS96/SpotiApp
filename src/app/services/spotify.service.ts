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
      'Authorization': 'Bearer BQDxZVGpQFP2LtGur73KtYamZH59uFZXlcAyBlp6maRG6RZOtRgBOSOpvd9XBFjb-v8qWpVqY1fsoPkgCfU'
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

  getTopTracks( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map(data => data['tracks']));
  }

}
