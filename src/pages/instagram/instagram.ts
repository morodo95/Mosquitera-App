import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-instagram',
  templateUrl: 'instagram.html',
})
export class InstagramPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    window.open("https://www.instagram.com/lamosquitera/","_system");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstagramPage');
  }

}
