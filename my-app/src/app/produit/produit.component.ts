import { Component, OnInit } from '@angular/core';
import { Produit } from '../common/data/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produit : Produit = new Produit(); //produit sélectionné (à modifier ou à supprimer ou ....)
  
  onSelectionnerProduit(p:Produit){
     this.produit = p; //variante simpliste (idéalement clonage)
  }

  onSupprimerSelection(){
    for(let i in this.produits){
        if(this.produit.ref == this.produits[i].ref){
          delete this.produits[i]; break;
        }
    }
 }

 onAjouterNew(){
   this.produit = new Produit();
   this.produits.push(this.produit);
 }
  
  produits : Produit[] = [
    new Produit('p1' , "Cahier" , 2.34) ,
    new Produit('p2' , 'Classeur' , 3.4)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
