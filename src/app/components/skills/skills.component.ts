import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit{
  @Input() info: any
  @Input() pageLanguage: string;
  @Input() svgName: string
  src: string

  ngOnInit(): void {
    this.src = `./assets/images/${this.svgName}.svg`
  }


}
