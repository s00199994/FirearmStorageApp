import { Component, Input } from '@angular/core';
import { Gun } from '../interface/gun';
import { AwsService } from '../services/aws.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gun-card',
  templateUrl: './gun-card.component.html',
  styleUrls: ['./gun-card.component.css']
})
export class GunCardComponent {

  @Input() gun!: Gun;

  refreshEvent = new Subject<void>();

  constructor(private aws: AwsService) {}

  deleteGun(gun: Gun) {
    this.aws.deleteLocker1(this.gun).subscribe(
      (response) => {
        console.log('Succesful delete!', response);
        this.refreshEvent.next();
      },
      (error) => {
        console.error('Error deleting!', error);
      }
    )
  }
}
