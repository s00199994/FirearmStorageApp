import { Component, OnInit } from '@angular/core';
import { Gun } from '../interface/gun';
import { AwsService } from '../services/aws.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showForm: boolean = false;
  isLoggedIn: boolean = false;

  Locker_1_guns: Gun[] = [];
  Locker_2_guns: Gun[] = [];

  constructor(private awsService: AwsService) {}

  ngOnInit(): void {
    this.awsService.getLocker1().subscribe((locker1_guns) => {
      this.Locker_1_guns = locker1_guns;
    })

    this.awsService.getLocker2().subscribe((locker2_guns) => {
      this.Locker_2_guns = locker2_guns;
    })
  }
}
