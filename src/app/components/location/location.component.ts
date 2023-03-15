import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
})
export class LocationComponent {
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
  @Input() color: string
}
