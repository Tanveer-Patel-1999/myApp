import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
//if else n then
  name:boolean=true;
  change(vab:boolean)
  {
    this.name=vab;
  }
  //for 
  Info = [
    {
  firstName:"A",
  lastname:"B"
    },
    {
      firstName:"C",
      lastname:"D"
        },
        {
          firstName:"E",
          lastname:"F"
            },
  ];
  //
  age = 70;
}
 

