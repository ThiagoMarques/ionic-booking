import { Component } from '@angular/core'
import { MenuController } from '@ionic/angular'
import { PlacesService } from './places/places.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController) {}
  onLogout() {
    this.menuCtrl.toggle()
  }
}
