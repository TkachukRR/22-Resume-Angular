import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
}
