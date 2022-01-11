import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  listeCouleurs : string[] = [ "lightyellow", "white",
 "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ; 
 
  //injection de dépendance par constructeur
  constructor(public preferencesService : PreferencesService) { 
      
  }

  

  ngOnInit(): void {
  }

}
