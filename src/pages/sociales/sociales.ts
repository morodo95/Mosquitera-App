import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-sociales',
  templateUrl: 'sociales.html',
})
export class SocialesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.open("https://twitter.com/lamosquitera","_system");
  }

  ionViewDidLoad() {
    
  }

 
}
