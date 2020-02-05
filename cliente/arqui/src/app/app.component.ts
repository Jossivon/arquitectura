import { Component, OnInit } from '@angular/core';
import { PyService } from './service/py.service';
import { PhpService } from './service/php.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  id : Number;

  constructor(public respuestaPy: PyService, public respuestaPHP: PhpService) {
//this.respuestaPHP.traerdatosPHP(1);
  }

  peticion(){
    this.respuestaPHP.traerdatosPHP(this.id);
  }

}
