import { Injectable } from '@angular/core';
import { Tool } from '../../../../shared/interfaces/tools.interface';
import { TOOLS_LIST } from '../../../../mocks/tools.mocks';
import { Project } from '../../../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  tools: Tool[] = []
  projects: Project[] = [];

  constructor() { }

  setTools(): void {
    this.tools = TOOLS_LIST
  }

  getTools(): Tool[] {
    this.setTools()
    return this.tools
  }

}
