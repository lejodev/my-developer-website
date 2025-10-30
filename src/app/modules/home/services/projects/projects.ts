import { Injectable } from '@angular/core';
import { projects } from '../../../../mocks/projects.mock';
import { Project } from '../../../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [];

  constructor() { }

  setProjects(): void {
    this.projects = projects
  }

  getProjects(): Project[] {
    this.setProjects()
    return this.projects
  }

}
