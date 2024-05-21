import { NavbarComponent } from './shared/navbar/navbar.component';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary:FaIconLibrary= inject(FaIconLibrary)
  ngOnInit(): void {
    this.initFontAwesome();
  }
  title = 'netflix-clone-bootstrap-signals';

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons)
  }
}
