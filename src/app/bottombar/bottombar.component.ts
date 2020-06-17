import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITodoItem} from "../types/itodo-item";

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  private _todoItem: ITodoItem = {text: ""};

  get todoItem(): ITodoItem {
    return this._todoItem;
  }

  set todoItem(value: ITodoItem) {
    this._todoItem = value;
  }

  @Output()
  public addTodoClicked: EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewTodo() {
    this.addTodoClicked.emit({...this.todoItem});
    this.todoItem.text = "";
  }
}
