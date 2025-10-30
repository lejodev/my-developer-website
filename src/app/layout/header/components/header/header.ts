import { Component } from '@angular/core';
import { Scroll } from '../../../services/scroll/scroll';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private scrollService: Scroll) { }

  scrollTo(id: string) {
    this.scrollService.scrollToView(id)
  }

}
