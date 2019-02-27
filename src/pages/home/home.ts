import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
  }

  //La unica funcion que cumple esta parte, es ir a la pagina de welcome
  welcome(){
    this.navCtrl.push(TabsPage);
  }
  
}
