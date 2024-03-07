import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class NewErrorService{
    logError(){
        console.log('error msg from new service');
    }
}