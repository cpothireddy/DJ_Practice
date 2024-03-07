import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'app-two',
    templateUrl:'./two.component.html'
})
export class TwoComponent{
    _name:string;
    @Input() iValue:number;
    @Output() sendiValue= new EventEmitter();
    @Input() set name(name:string){
        this._name = (name && name.trim()) || 'chandra';
    }
    // get name(){
    //     return this._name;
    // }





    constructor(){}
    IncreseIVal(){
        this.iValue++;
        this.sendiValue.emit(this.iValue);
    }
}