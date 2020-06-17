import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public showSearch: boolean = false;
  private _searchString: string = '';


  get searchString(): string {
    return this._searchString;
  }

  set searchString(value: string) {
    this._searchString = value;
    this.search.emit(value);
  }

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public enableSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleSearch() {
    this.showSearch = !this.showSearch;
    this.enableSearch.emit(this.showSearch);
  }
}
