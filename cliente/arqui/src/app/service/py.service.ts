import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PyService {

  datos;
  datos2;

  constructor(public http: HttpClient) {
    this.traerdatos();
    this.starwar();
  }

  traerdatos() {
    try {
      const url = 'http://127.0.0.1:5000/api/v1/btcusd';
      this.http.get(url).subscribe((respuesta) => {
        console.log(respuesta);
        this.datos = respuesta;
      });
    } catch (error) {
      console.log(error);
    }
  }

  starwar() {
    try {
      const url = 'https://swapi.co/api/people/1';
      this.http.get(url).subscribe((respuesta) => {
        console.log(respuesta);
        this.datos2 = respuesta;
      });
    } catch (error) {
      console.log(error);
    }
  }

}
