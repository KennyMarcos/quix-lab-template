import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quixlab-Angular';

  constructor() {
    const preloader = document.getElementById('preloader');
    preloader?.classList.add('d-none');

    const mainWrapper = document.getElementById('main-wrapper');
    console.log(mainWrapper);

    mainWrapper?.classList.add('show');
  }
}
