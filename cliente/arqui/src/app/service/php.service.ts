import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpService {

  datosPHP:[]=[];

  constructor(public http: HttpClient) {
  }

  traerdatosPHP(id) {
    try {
      const urlPHP = `http://localhost/phpservices/index.php/BooksService/datos/${id}`;
      this.http.get(urlPHP).subscribe((respuestaPHP) => {
        console.log(respuestaPHP);
        this.datosPHP = respuestaPHP['respuesta'];
      });
    } catch (error) {
      console.log(error);
    }
  }
}
