@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {

  private _todoItem: ITodoItem = {text: "", done: false};

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
    if (this.todoItem.text.trim() === "") {
      alert("Bitte geben Sie einen ToDo-Text ein");
    } else {
      this.addTodoClicked.emit({...this.todoItem});
      this.todoItem.text = "";
    }
  }
}
