import { Component } from "@angular/core";

@Component({
    selector:'app-one',
    templateUrl:'./one.component.html'
})

export class OneComponent{
    i:number;
    arr = ['a', 'b', '', 'c', '', 'd', 'e'];
    constructor(){
        this.i =10;
    }
    getIValue(iValue:number){
        this.i = iValue;
    }
    
}