import { Injectable } from '@angular/core'
import { Place } from './place.model'

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place = [
    new Place(
      'p1',
      'Apartamento em SP',
      'Apartamento de exemplo',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcasavogue.globo.com%2FSmart%2Fnoticia%2F2021%2F08%2Fapartamento-de-47-m-ganha-decoracao-pratica-apos-reforma-rapida.html&psig=AOvVaw3RsKntdLkuw0vYHrZlxZmu&ust=1652783417987000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDOrZno4_cCFQAAAAAdAAAAABAD',
      149.99,
    ),
    new Place(
      'p2',
      'Aparamento no DF',
      'Apartamento de exemplo',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcasavogue.globo.com%2FSmart%2Fnoticia%2F2021%2F08%2Fapartamento-de-47-m-ganha-decoracao-pratica-apos-reforma-rapida.html&psig=AOvVaw3RsKntdLkuw0vYHrZlxZmu&ust=1652783417987000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDOrZno4_cCFQAAAAAdAAAAABAD',
      169.99,
    ),
  ]

  get places() {
    return [...this._places]
  }

  constructor() {}
}
