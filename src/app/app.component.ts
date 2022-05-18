import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular'
import { AuthService } from './auth/auth.service'
import { PlacesService } from './places/places.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService,
    private route: Router,
  ) {}
  onLogout() {
    this.authService.logout()
    this.route.navigateByUrl('/auth')
    // this.menuCtrl.toggle()
  }
}
