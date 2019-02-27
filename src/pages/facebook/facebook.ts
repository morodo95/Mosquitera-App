import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html',
})
export class FacebookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.open("https://www.facebook.com/LaMosquiteraRadioComunitaria881/","_system");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacebookPage');
  }

}
