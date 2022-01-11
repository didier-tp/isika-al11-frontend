import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/data/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produit : Produit = new Produit(); //produit sélectionné (à modifier ou à supprimer ou ....)
  //...
  produits : Produit[] = [
    new Produit('p1' , "Cahier" , 2.34) ,
    new Produit('p2' , 'Classeur' , 3.4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
