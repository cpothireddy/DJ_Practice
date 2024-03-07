import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicDirective {
    constructor(public elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}