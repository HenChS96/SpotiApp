import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';(test)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // countries: any[] = []; test

  constructor(  ) { // private http: HttpClient (insde the constructor like injection this is a test)

   /* this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp:any) => { //here you put the variable as any to match the global variable (test)
      console.log(resp); // you subscribe to the get methos and the things you get would be safe on the resp variable (test)
      this.countries = resp;
    });*/

  }

  ngOnInit() {
  }

}
