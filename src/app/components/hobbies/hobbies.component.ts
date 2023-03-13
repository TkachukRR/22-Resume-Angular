import {Component, Input, OnInit} from '@angular/core';
import { MyInfo } from 'src/app/models/myInfo';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
})
export class HobbiesComponent implements OnInit{
  @Input() info: MyInfo;
  @Input() pageLanguage: string;
  @Input() svgName: string


  src: string

  ngOnInit(): void {
    this.src = `./assets/images/${this.svgName}.svg`
  }
}
