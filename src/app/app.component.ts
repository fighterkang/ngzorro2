import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array = [ 1, 2, 3, 4 ];

  listOfOption = [];
  size = 'default';
  singleValue = 'a10';
  multipleValue = [ 'a10', 'c12' ];
  tagValue = [ 'a10', 'c12', 'tag' ];

  value1 = 1;
  value2 = 0;

  mode = false;
  dark = false;

  ngOnInit(): void {
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
