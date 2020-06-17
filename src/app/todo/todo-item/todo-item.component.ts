import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodoItem} from "../../types/itodo-item";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  private _todoItem: ITodoItem;
  private _todoDone: boolean;

  public get todoItem(): ITodoItem {
    return this._todoItem;
  }


  @Input()
  public set todoItem(value: ITodoItem) {
    this._todoItem = value;
  }

  get todoDone(): boolean {
    return this.todoItem.done;
  }

  set todoDone(value: boolean) {
    this.todoItem.done = value;
    this.todoDoneClicked.emit(this.todoItem);
    }

  @Output()
  public deleteTodoClicked: EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>();

  @Output()
  public todoDoneClicked: EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>();

  constructor() { }


  ngOnInit(): void {
  }

  public deleteTodo() {
    this.deleteTodoClicked.emit(this.todoItem);
  }

}
