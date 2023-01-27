import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-educationList',
  templateUrl: './educationList.component.html',
})
export class EducationListComponent {
  now: Number = Date.now();

  @Input() info: MyInfo;
  @Input() pageLanguage: string;
}
