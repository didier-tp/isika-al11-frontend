import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre : string ="titre_par_defaut";


  myMenuDef : MenuDefinition[] = [
    { label : "Autres" , 
      children : [
        { label : "welcome" , path : "/ngr-welcome" } ,
        { divider : true },
        { label : "produit" , path : "/ngr-produit" },
        { label : "conversion" , path : "/ngr-conversion" },
        { divider : true },
        { label : "login" , path : "/ngr-login" },
        { label : "admin-devise" , path : "/ngr-admin-devise" } ,
      ]
    },
    { label : "basic" , path : "/ngr-basic" } , 
    { label : "conversion" , path : "/ngr-conversion" } 
    ];
  

  //injection de dépendance par constructeur
  constructor(public preferencesService : PreferencesService){
      console.log("dans constructeur : titre="+this.titre);
  }

  //equivalent de @PostConstruct de java
  ngOnInit(): void {
    console.log("dans ngOnInit : titre="+this.titre);
  }
  
}
