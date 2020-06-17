import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ITodoItem} from '../../types/itodo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private _todos: ITodoItem[];

  get todos(): ITodoItem[] {
    return this._todos;
  }

  @Input()
  set todos(value: ITodoItem[]) {
    this._todos = value.sort((a, b): number => {
      /* if (a.done && !b.done) {return 1;}
      if (!a.done && b.done) {return -1;}
      return 0; */
      return +a.done - +b.done;
    });
  }

  @Output()
  public deleteTodoClicked: EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>();

  @Output()
  public todoDoneClicked: EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>();

  constructor() {

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: ITodoItem) {
    this.deleteTodoClicked.emit(todo);
  }

  public changeTodoDone(todo: ITodoItem) {
    this.todoDoneClicked.emit(todo);
  }


}
