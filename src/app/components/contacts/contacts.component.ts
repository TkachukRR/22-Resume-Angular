import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
}
