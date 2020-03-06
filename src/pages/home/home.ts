import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bandera : boolean;
  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('welcome').then((val) => {
      this.bandera = val;
      this.comprobarData();

    });
   
  }

  //La unica funcion que cumple esta parte, es ir a la pagina de welcome
  welcome(){
    this.navCtrl.push(TabsPage);
  }
  
  comprobarData(){
    if (this.bandera == undefined) {
      this.storage.set('welcome', '1');
    }else{
      this.navCtrl.push(TabsPage);
    }
  }
}
