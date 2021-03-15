import { Component, OnInit } from '@angular/core';
import { selectedDevice } from 'interfaces/selected-device.interface';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
  selectedDevice: selectedDevice;
  url: string = 'https://dev.appless.app/6CN4X0/142AO6';

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    const selectedDevice = this.deviceService.devices[0];
    this.selectedDevice = {
      color: selectedDevice.colors[0],
      deviceName: selectedDevice.deviceName,
      orientation: 'portrait',
      size: selectedDevice.size,
    };
  }

  handleUrlChange(url: string) {
    this.url = url;
  }

  handleSelectDevice(device: selectedDevice) {
    this.selectedDevice = device;
  }
}
