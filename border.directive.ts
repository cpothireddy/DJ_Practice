import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[dynamicBorder]'
})
export class dynamicBorder{
    @HostBinding('style.border') border: string;

    @HostListener('mouseover') onMouseOver(){
        this.border = '5px solid green';
    }
}