import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[capitalFirst]'
})
export class CapitalFirst{
    constructor(private element: ElementRef){}
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'blue';
    }
    @HostListener('mouseover') onMouseOver(){
        this.element.nativeElement.style.backgroundColor = 'green';
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.element.nativeElement.style.backgroundColor = 'blue';
    }
}