import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
})
export class BirthdayComponent {
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
  @Input() color: string
}
