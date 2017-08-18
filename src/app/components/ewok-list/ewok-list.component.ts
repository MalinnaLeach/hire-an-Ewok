import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, EwokProfile } from '../../reducers/ewoks';
import * as Rx from 'RxJS';

@Component({
  selector: 'app-ewok-list',
  templateUrl: './ewok-list.component.html',
  styleUrls: ['./ewok-list.component.scss'],
})
export class EwokListComponent {
  public ewoks: Rx.Observable<Array<EwokProfile>>;

  constructor(private store: Store<AppState>) {
    this.ewoks = store.select('ewoks');
  }

  private initialEwoks: EwokProfile[] = [
    {
        name: "Chirpa",
        email: "chirpa@hireanewok.com",
        cuteness: 8,
        thumbnail: "https://vignette3.wikia.nocookie.net/starwars/images/4/4e/Chief_Chirpa_DB.jpg/revision/latest?cb=20150825142530"
    }
  ];

}
