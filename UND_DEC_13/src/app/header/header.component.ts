import { Component, OnInit } from '@angular/core';

import { BasicService } from '../services/basic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private basicService: BasicService ) { }


  ngOnInit() {
  }

  QueryPolicy() {
    alert('Need to get know the service call Plz close this.')
    console.log('No data');
  }

  // xpandScreen1Status: true;
  // OpenScreenDrop(Search: string, event) {
  //   console.log('Inside OpenScreenDrop Component')
  //   this.basicService.OpenScreenDropService(Search)
  //   //this.xpandScreen1Status = this.basicService.xpandScreen1Status;
    
  // }

}
