import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Note: 'styleUrls' should be plural,
})
export class AppComponent {
  title = 'child-app';
  onClick() {
    alert('Button clicked!');
  }
}
