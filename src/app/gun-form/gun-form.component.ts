import { Component } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { Gun } from '../interface/gun'
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-gun-form',
  templateUrl: './gun-form.component.html',
  styleUrls: ['./gun-form.component.css']
})

export class GunFormComponent {

  gun: Gun = {id: '', make: '', serialNumber: '', type: '', logNumber: ''}
  constructor(private AwsService: AwsService) {}

  onSubmit() {
    const data = {
      id: uuidv4(),
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
