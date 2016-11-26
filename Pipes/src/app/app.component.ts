import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent
{

    title: string = 'Angular 2 pipes Example' ;
    toDate: Date = new Date();
    msg: string= 'Welcome to Angular 2';
    num: number= 9542.14554;
    per: number= .7414;
    cur: number= 175;
}



