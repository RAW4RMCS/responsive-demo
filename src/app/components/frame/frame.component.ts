import { Component, OnInit } from '@angular/core';
import { selectedDevice } from 'interfaces/selected-device.interface';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
  selectedDevice: selectedDevice;
  url: string;

  constructor() {}

  ngOnInit(): void {}

  handleUrlChange(url: string) {
    this.url = url;
  }

  handleSelectDevice(device: selectedDevice) {
    this.selectedDevice = device;
  }
}
