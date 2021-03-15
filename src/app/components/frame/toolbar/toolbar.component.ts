import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from 'app/components/services/device.service';
import { DeviceColor } from 'enums/device-color.enum';
import { Device } from 'interfaces/device.interface';
import { selectedDevice } from 'interfaces/selected-device.interface';
import { Orientation } from 'types/orientation.type';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  devices: Device[] = [];
  originalDevice: Device;

  @Input() selectedDevice: selectedDevice;
  @Output() selectDeviceEvent = new EventEmitter<selectedDevice>();

  @Input() url: string;
  @Output() urlEvent = new EventEmitter<string>();

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    const devices = this.deviceService.devices;
    this.devices = devices;

    this.originalDevice = devices.find(
      (d) => d.deviceName === this.selectedDevice.deviceName
    );
  }

  handleUrlChange(url: string) {
    this.url = url;
  }

  handleUrlSubmit() {
    this.urlEvent.emit(this.url);
  }

  handleDeviceChange(deviceName: string) {
    this.originalDevice = this.devices.find((d) => d.deviceName === deviceName);
    const device = this.devices.find((d) => d.deviceName === deviceName);

    this.selectDeviceEvent.emit({
      deviceName: device.deviceName,
      orientation: device.orientations[0],
      color: device.colors[0],
      size: device.size,
    });
  }

  handleOrientationChange(orientation: Orientation) {
    this.selectDeviceEvent.emit({ ...this.selectedDevice, orientation });
  }

  handleColorChange(color: DeviceColor) {
    this.selectDeviceEvent.emit({ ...this.selectedDevice, color });
  }
}
