import { Component, OnInit } from '@angular/core'
import { IonItemSliding } from '@ionic/angular'
import { Subscription } from 'rxjs'
import { Booking } from './booking.model'
import { BookingService } from './booking.service'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[]
  private bookingSub: Subscription

  constructor(private bookingsService: BookingService) {}

  ngOnInit() {
    this.bookingSub = this.bookingsService.bookings.subscribe((bookings) => {
      this.loadedBookings = bookings
    })
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close()
  }

  ngOnDestroy() {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe()
    }
  }
}
