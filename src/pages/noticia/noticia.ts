import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {
  quote;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quote = this.navParams.get('quote');
    console.log(this.quote);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiaPage');
  }

}
