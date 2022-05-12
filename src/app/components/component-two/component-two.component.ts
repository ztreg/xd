import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
  // todo = [
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '',
  //   '4',
  //   'Get to work',
  //   'Get to work2',
  //   'Get to work3',
  //   'Get to work4',
  //   'Get to work',
  //   'Get to work2',
  //   'Get to work3',
  //   'Get to work4',
  //   'Get to work',
  //   'Get to work2',
  //   'Get to work3',
  //   'Get to work4'
  // ];
  todo = new Array(64).fill({image: ''});
  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo)
  }

}
