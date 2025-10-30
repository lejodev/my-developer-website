import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/components/header/header';
import { Layout } from "./layout/layout/components/layout/layout/layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
