import { Component, OnInit } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { Tool } from '../../../../shared/interfaces/tools.interface';
import { HomeService } from '../../services/home/home';
import { ProjectsService } from '../../services/projects/projects';
import { Project } from '../../../../shared/interfaces/project.interface';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SHARED_MATERIAL_IMPORTS, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  tools: Tool[] = [];
  projects: Project[] = [];
  formGroup!: FormGroup

  constructor(
    private homeService: HomeService,
    private projectsService: ProjectsService,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects()
    this.tools = this.homeService.getTools()
    console.log(this.projects);

    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })

  }

  async sendEmail(e: Event) {
    e.preventDefault();

    emailjs.init('user_fhFkAb44WG1pMgD5at18A')

    let response = await emailjs.send("service_gtkylj9", "template_j1cwa3f", {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      message: this.formGroup.value.message,
    });

    alert('Success')
  }


}
