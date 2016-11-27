import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent
{

    title: string = 'Angular 2 Custom Pipes Example' ;
    celcius: number;
    Fahrenheit: number;   
}



