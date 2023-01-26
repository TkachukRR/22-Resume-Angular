import { Component } from '@angular/core';
import { MyInfo } from './models/myInfo';
import { fullInfo as data } from './data/fullInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fullInfo: MyInfo = data;
}
