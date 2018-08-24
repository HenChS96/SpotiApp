import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


  artist: any = {};

  constructor( private activetdRoute: ActivatedRoute, private spotify: SpotifyService ) { 

    this.activetdRoute.params.subscribe( params => {
      console.log(params['id']);
    });


    this.activetdRoute.params.subscribe( params => {
      this.getArtist( params['id'] );
    })
    
  }

  getArtist( id: string ){

    this.spotify.getArtist( id ).subscribe( artist => {
      console.log(artist);
      this.artist = artist;
    })

  }

  ngOnInit() {
  }

}
