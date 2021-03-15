import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DeviceSize } from 'interfaces/device-size.interface';
import { selectedDevice } from 'interfaces/selected-device.interface';

@Component({
  selector: 'app-device-selector',
  templateUrl: './device-selector.component.html',
  styleUrls: ['./device-selector.component.scss'],
})
export class DeviceSelectorComponent implements OnInit {
  @Input() selectedDevice: selectedDevice;
  @Input() url: string;
  unsafeUrl: SafeResourceUrl;

  width = 0;
  height = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const { width, height } = this.calculateDeviceSize();
    this.width = width;
    this.height = height;
    this.getLargestSize();
  }

  ngOnChanges(): void {
    this.getLargestSize();
    // this is needed to change the iFrame url
    this.unsafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  calculateDeviceSize(): DeviceSize {
    const isPortrait = this.selectedDevice.orientation === 'portrait';

    const portraitWidth = this.selectedDevice.size.width;
    const porttraitHeight = this.selectedDevice.size.height;

    return {
      width: isPortrait ? portraitWidth : porttraitHeight,
      height: isPortrait ? porttraitHeight : portraitWidth,
    };
  }

  getLargestSize() {
    const { width, height } = this.calculateDeviceSize();
    const windowHeight = window.innerHeight;

    // Check is needed because some displays are wider in portrait - ex; iMac
    let isPortrait = height > width;
    const padding = isPortrait ? 64 : 256;

    const differenceInDecimals = windowHeight / height;

    this.width = width * differenceInDecimals - padding;
    this.height = height * differenceInDecimals - padding;
  }
}
