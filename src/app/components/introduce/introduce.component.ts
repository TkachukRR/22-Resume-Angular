import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
})
export class IndroduceComponent {
  @Input() info: MyInfo;
}
