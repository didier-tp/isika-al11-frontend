import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre : string ="titre_par_defaut";

  //injection de dépendance par constructeur
  constructor(public preferencesService : PreferencesService){

  }

  //equivalent de @PostConstruct de java
  ngOnInit(): void {
  
  }
  


}
