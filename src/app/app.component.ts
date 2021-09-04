import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba-Mensajeros';
  public msjTheme = 'Dark Mode';
  public bolTheme = true;

  constructor(private themeService: NbThemeService) {
    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        console.log(`Theme changed to ${theme.name}`);
      });
  }
  changeTheme() {
    this.bolTheme = !this.bolTheme
    if (this.bolTheme) {
      this.msjTheme = 'Dark Mode';
      this.themeService.changeTheme('default');

    } else {
      this.msjTheme = 'Ligth Mode';
      this.themeService.changeTheme('dark');

    }
  }
}
