import { Component, Input } from '@angular/core';
import { Gun } from '../interface/gun';

@Component({
  selector: 'app-gun-card',
  templateUrl: './gun-card.component.html',
  styleUrls: ['./gun-card.component.css']
})
export class GunCardComponent {

  @Input() gun!: Gun;
}
