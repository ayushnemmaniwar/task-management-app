import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
    title!:string;
    desc!:string;
    @Output() toDoAdd: EventEmitter<Todo> = new EventEmitter();

    constructor(){
          
    }
      ngOnInit(): void {
        
      }

      onSubmit(){
        const todo={
          sno:5,
          title:this.title,
          desc:this.desc,
          active:true
        }
        this.toDoAdd.emit(todo);
        this.resetForm();
      }
      
      resetForm(){
        this.title="",
        this.desc=""
      }
}
