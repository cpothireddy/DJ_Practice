import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { NewErrorService } from '../services/newError.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  //providers:[ErrorService]
  //providers:[{provide:ErrorService, useClass: ErrorService}]
  providers:[NewErrorService, {provide:ErrorService, useExisting: NewErrorService}]
  // providers:[{provide:ErrorService, useValue:{
  //   logError:function(){
  //     console.log('value injected');
  //   }
  // }}]
})
export class C2Component implements OnInit {
  constructor(private es: ErrorService){

  }

  ngOnInit(): void {
    this.es.logError();
  }

}
