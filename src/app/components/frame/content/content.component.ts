import { Component, Input, OnInit } from '@angular/core';
import { selectedDevice } from 'interfaces/selected-device.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() selectedDevice: selectedDevice;

  constructor() {}

  ngOnInit(): void {}
}
