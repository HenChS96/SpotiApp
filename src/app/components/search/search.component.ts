import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  loading: boolean;

  constructor( private spotify: SpotifyService) {

    this.loading = true;

   }

  ngOnInit() {
  }

  search(termino:string){
    
    this.spotify.getArtist(termino).subscribe( (resp:any) => {
      console.log(resp);
      this.artists = resp;
      this.loading = false;
    })

  }

}
