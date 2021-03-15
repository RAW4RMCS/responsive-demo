import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeviceColor } from 'enums/device-color.enum';
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
