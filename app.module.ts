import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { BasicDirective } from './basic.directive';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three/three.component';
import { FourComponent } from './four/four/four.component';
import { CapitalFirst } from './capital.directive';
import { dynamicBorder } from './border.directive';
import { FiveComponent } from './five/five/five.component';
import { FirstCapitalPipe } from './firstCapital.pipe';
import { TLoginComponent } from './tLogin/t-login/t-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RLoginComponent } from './rLogin/r-login/r-login.component';
import { RBuilderLoginComponent } from './rBuilderLogin/r-builder-login/r-builder-login.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';

@NgModule({
  declarations: [
    AppComponent, OneComponent, BasicDirective, TwoComponent, ThreeComponent, FourComponent, CapitalFirst, dynamicBorder, FiveComponent, FirstCapitalPipe, TLoginComponent, RLoginComponent, RBuilderLoginComponent, C1Component, C2Component, C3Component, C4Component, C5Component, C6Component
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
