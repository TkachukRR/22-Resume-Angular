import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-workList',
  templateUrl: './workList.component.html',
})
export class WorkListComponent {
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
}
