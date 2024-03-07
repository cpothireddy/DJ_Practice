import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform{
    transform(value: string, ...args: string[]) {
        return value.replace(/\w\s*/g, function(str){
            return str.charAt(0).toUpperCase() + str.substr(1).toUpperCase();
        })
    }
}