import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/authservice/authservice';
import { NoticiaPage } from '../noticia/noticia';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  quotes;
  constructor(public navCtrl: NavController, public navParams: NavParams, public  auth: AuthServiceProvider) {
    
    this.auth.getQuotes().subscribe(data => {
      console.log(data);
      this.quotes = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }


  onShowQuoteDetail(quote){
    this.navCtrl.push(NoticiaPage, {quote: quote});
  }

}
