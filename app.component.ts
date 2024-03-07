import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OneComponent } from './one/one.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'finalOne';
  p:any;
  data:any;
  ngOnInit(): void {
    this.p = {
      name: 'chandra',
      address: 'ABC'
    }
    this.data = new BehaviorSubject(this.p);
  }
  updateName(){
    this.p = {
      name: 'babu',
      address: 'ABC'
    };
    this.data.next(this.p)
  }

}
