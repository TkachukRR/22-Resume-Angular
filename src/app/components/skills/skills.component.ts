import { Component, Input } from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
}
