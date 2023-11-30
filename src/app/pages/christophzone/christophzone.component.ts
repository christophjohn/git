import { Component } from '@angular/core';

@Component({
  selector: 'app-christophzone',
  templateUrl: './christophzone.component.html',
  styleUrls: ['./christophzone.component.css','../manuelszone/manuelszone.component.css']
})
export class ChristophzoneComponent {
  Start: boolean = false;
  Question: boolean = false;
  steps: boolean[] = [];
}
