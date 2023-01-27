import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectsGallery',
  templateUrl: './projectsGallery.component.html',
})
export class ProjectsGalleryComponent {
  @Input() projectList: any;

  ngOnInit(): void {}
}
