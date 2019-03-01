import { Component } from '@angular/core';
import { AuthServiceProvider } from '../../providers/authservice/authservice';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  audio;
  bandera: boolean;
  programas: any[];
  constructor( public auth: AuthServiceProvider) {
    this.audio = new Audio('http://stream.codigosur.org:8000/mosquitera.mp3');
    this.getProgramas();
  }


  getProgramas() {
    this.auth.getProgramacion().subscribe(
      data => this.programas = data,
      err => console.log(err)
    );
  }




  play(){
    this.audio.play();
    this.bandera = true;
    
  }

  stop(){
    
      this.audio.pause();
      this.bandera = false;
  }

  whatsapp(){
    window.open("https://api.whatsapp.com/send?phone=5492613068060","_system");
  }
}
