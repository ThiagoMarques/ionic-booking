import { Component, OnDestroy, OnInit } from '@angular/core'
import {
  LoadingController,
  MenuController,
  SegmentChangeEventDetail,
} from '@ionic/angular'

import { PlacesService } from '../places.service'
import { Place } from '../place.model'
import { Subscription } from 'rxjs'
import { AuthService } from 'src/app/auth/auth.service'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[]
  listedLoadedPlaces: Place[]
  relevantPlaces: Place[]
  private placesSub: Subscription
  isLoading = false

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
  ) {}

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places
      this.relevantPlaces = this.loadedPlaces
      this.listedLoadedPlaces = this.relevantPlaces.slice(1)
    })
  }

  ionViewWillEnter() {
    this.isLoading = true
    this.placesService.fetchPlaces().subscribe(() => {
      this.isLoading = false
    })
  }

  onOpenMenu() {
    this.menuCtrl.toggle()
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'all') {
      this.relevantPlaces = this.loadedPlaces
      this.listedLoadedPlaces = this.relevantPlaces.slice(1)
    } else {
      this.relevantPlaces = this.loadedPlaces.filter(
        (place) => place.userId !== this.authService.userId,
      )
      this.listedLoadedPlaces = this.relevantPlaces.slice(1)
    }
  }

  ngOnDestroy(): void {
    if (this.placesSub) {
      this.placesSub.unsubscribe()
    }
  }
}
