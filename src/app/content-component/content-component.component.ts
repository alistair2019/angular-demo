import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-content-component',
  //templateUrl: './content-component.component.html',
  template: `

  <h1 [class.red-title]="titleClass">KOnichiwa</h1>


  <h1 [ngClass]="titleClasses">KOnichiwa</h1>
  
  <h1>{{ myObject.location }}</h1>
  <ul>
      <li *ngFor="let country of Countries">
      {{ country }}
      </li>
  </ul>

  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  <button [disabled]="buttonStatus">My Button</button>
  

  <button (click)="myEvent($event)">Button Event Click</button>
  <button (mouseenter)="myEventMouseEnter($event)">Button Event Click</button>



  <h1 [style.color]="titleColorStyle">KOnichiwa</h1>


  <h1 [style.color]="titleColorStyle ? 'blue' : 'pink'">KOnichiwa</h1>

  <h1 [ngStyle]="titleColorStyleMax">KOnichiwa</h1>


  <h2>Services Example</h2>

  <p>{{ someProperty }}</p>


  <h2>Animations Example</h2>
  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I Will animate</p>

  `,
  //styleUrls: ['./content-component.component.css']
  styles: [`
  
     button{
       background-color: pink;
     }

     .red-title{color: red;}

     .large-title{
       font-size: 4em;
     }

     p{
         width: 200px;
         background: lightgray;
         margin: 100px auto;
         padding: 20px;
         font-size: 1.5em;
         text-align: center;
     }
  
  
  `],
//  animations: [
//    trigger('myAwesomeAnimation', [
//        state('small', style({transform: 'scale(1)'})),
//        state('large', style({transform: 'scale(1.2)'})),
//
//        transition('small <=> large', animate('300ms ease-in', style({
//          transform: 'translateY(40px)'
//        }))),
//    ])
//  ]

animations: [
  trigger('myAwesomeAnimation', [
      state('small', style({transform: 'scale(1)'})),
      state('large', style({transform: 'scale(1.2)'})),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 0, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 0, transform: 'translateY(0)', offset: 1}),
      ]))),
  ])
]



})
export class ContentComponentComponent implements OnInit {

  myObject = {
    gender: 'Male',
    alge: 33,
    location: 'Japan'
  };

  Countries = ['USA', 'Japan', 'Korea', 'Philippines'];
  angularLogo = "http://www.plastikitty.com/wp-content/uploads/SupergirlPreorderHeader.jpg";

  buttonStatus = true;

  myEvent(event){
    alert('Button Clicked');
  }

  myEventMouseEnter(event){
    alert('Mouse Enter');
  }


  titleClass = true;

  titleClasses = {
    'red-title': true,
    'large-title': true

  }

  titleColorStyle = true;


  titleColorStyleMax = {
    'color' : 'grey',
    'font-size': '5em'
  }


  constructor(private usersService:UsersService){

  }

  someProperty:string = '';
  state:string = 'small';


  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  ngOnInit() {
    console.log(this.usersService.cars);
    this.someProperty = this.usersService.data();

  }

}
