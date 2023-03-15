import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectsGallery',
  templateUrl: './projectsGallery.component.html',
})
export class ProjectsGalleryComponent {
  @Input() projectList: any;
  @Input() pageLanguage: string;

  @Input() svgName: string
  @Input() color: string
  src: string

  ngOnInit(): void {
    this.src = `./assets/images/${this.svgName}.svg`
  }
}
