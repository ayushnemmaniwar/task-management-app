import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Todo} from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() todo !: Todo;
    @Output() toToDelete: EventEmitter<Todo> = new EventEmitter();
    @Output() onCheckBox: EventEmitter<Todo> = new EventEmitter();

    constructor(){}
    ngOnInit():void {
    }
    
    onClick(todo :Todo){
      this.toToDelete.emit(todo); 
      console.log("Deleted");
    }

    onCheckBoxClick(todo:Todo){
      this.onCheckBox.emit(todo);
    }
}
