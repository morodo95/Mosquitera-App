import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Auth - Service, sirve para la identificación y traer datos de la api externa.


*/
@Injectable()
export class AuthServiceProvider {
  
  apiUrl = "http://lamosquitera.org/wp-json/wp/v2/posts";
  apiImg = "http://apimosquitera.lavena.com.ar/";
  apiPublicidades = "http://localhost/api-publicidad/";
  constructor(public http: Http) {
  }

  getQuotes(){
    return this.http.get(this.apiUrl).map(res=>res.json());
  }

  getProgramacion(){
    return this.http.get(this.apiImg+'getimages.php').map(res=>res.json());
  }

  getPublicidades(){
    return this.http.get(this.apiPublicidades + 'publicidades.php').map(res=>res.json());
  }

}
