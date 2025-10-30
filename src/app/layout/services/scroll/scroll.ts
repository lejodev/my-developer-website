import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Scroll {

  scrollToView(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

}
