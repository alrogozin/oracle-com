import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show = false;

  toggleCollapse() {
    this.show = !this.show;
    console.log('toggleCollapse');
  }
}
