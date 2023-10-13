import { Component,OnInit } from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
      todos: Todo[];
      localItem : string | null;
      constructor(){
        this.localItem = localStorage.getItem("todos");
        if(this.localItem===null){
          this.todos=[];
        }
        else{
          this.todos=JSON.parse(this.localItem);
        }
      }
      ngOnInit():void {

      }
      deleteTodo(todo:Todo){
        const index = this.todos.indexOf(todo);
        this.todos.splice(index,1);
        console.log("event is emiited");
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }

      addTodo(todo:Todo){
        this.todos.push(todo);
        console.log("event is emiited");
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }

      onCheckBoxClick(todo:Todo){
        const index = this.todos.indexOf(todo);
        this.todos[index].active=!this.todos[index].active;
        console.log("Toggle is clicked");
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    
}
