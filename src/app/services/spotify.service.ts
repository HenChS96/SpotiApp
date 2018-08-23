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
      'Authorization': 'Bearer BQAifRfSGnCDzEfAwN4a4KDoqW3BdVHO1ZKgP3XHuKZ9sPgVjVzFHdoz_bvL5QyTbujG28xwCwR2Yvz_mDw'
    });

    return this.http.get(url, { headers } )

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
    

  }

  getArtist( termino: string ){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAifRfSGnCDzEfAwN4a4KDoqW3BdVHO1ZKgP3XHuKZ9sPgVjVzFHdoz_bvL5QyTbujG28xwCwR2Yvz_mDw'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    .pipe( map( data => data ['artists'].items)); 
    // here you take the same authorization, then you can copy and paste from the Get that shows on the search in the spotify api and then change the artist by ${ variable you want to look for }
    // you can change this -> data => {return data ['artists'].items;} - to this -> data => data ['artists'].items) -> only if there is 1 return or 1 line and this line is the return
  }

}
