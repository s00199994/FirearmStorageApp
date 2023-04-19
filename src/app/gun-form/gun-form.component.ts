import { Component } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { Gun } from '../interface/gun'

@Component({
  selector: 'app-gun-form',
  templateUrl: './gun-form.component.html',
  styleUrls: ['./gun-form.component.css']
})

export class GunFormComponent {

  gun: Gun = {id: '', make: '', serialNumber: '', type: '', logNumber: 0}
  constructor(private AwsService: AwsService) {}

  onSubmit() {
    const data = {
      id: this.gun.id,
      make: this.gun.make,
      serialNumber: this.gun.serialNumber,
      type: this.gun.type,
      logNumber: this.gun.logNumber
    };

    this.AwsService.addData(data).subscribe(response => {
      console.log(response);
    })
  }
}
