import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { C4Component } from '../c4/c4.component';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit, AfterViewInit, AfterContentInit {
  constructor(private cd:ChangeDetectorRef){}
  messages:any;

//@ViewChild(C4Component) c4viewChild: C4Component;

@ViewChildren(C4Component) c4viewChildren: QueryList<C4Component>

ngOnInit(): void {
  this.messages = this.getMessages();
}

getMessages(){
  return [
    "hello",
    "world",
    "hi",
    "JS"
  ]
}

ngAfterViewInit(): void {
  //console.log(this.c4viewChild);
  console.log(this.c4viewChildren);
  this.c4viewChildren.forEach((item) => {
    item.data = 'new data'
  })
  this.cd.detectChanges();
  
}

ngAfterContentInit() {
  
  
}

}
