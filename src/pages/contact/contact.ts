import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  todo = {
    title: "",
    description: ""
  }
  constructor(public navCtrl: NavController, public app: App) {

  }
  
  // Este metodo funciona para desloguearse de la cuenta ingresada
 // Donde borramos la cuenta que esta en el localstorages
  
  logout(){
    //Api Token Logout
    localStorage.clear();
    setTimeout(()=> this.backToWelcome(), 1000);
  }
  
  // Este metodo volveremos a la pagina anterior
  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();

  }
 

 
 // Este metodo llamara al auth, para hacer el envio del mensaje hacia el correo de revite
  logForm() {
    console.log(this.todo)
  }
}
