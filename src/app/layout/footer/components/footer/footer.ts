import { Component } from '@angular/core';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { Scroll } from '../../../services/scroll/scroll';

@Component({
  selector: 'app-footer',
  imports: [
    SHARED_MATERIAL_IMPORTS
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  constructor(private scrollService: Scroll) {}

  scrollTo(id: string) {
    this.scrollService.scrollToView(id)
  }

}
