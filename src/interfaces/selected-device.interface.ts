import { DeviceColor } from 'enums/device-color.enum';
import { Orientation } from 'types/orientation.type';
import { DeviceSize } from './device-size.interface';

export interface selectedDevice {
  deviceName: string;
  orientation: Orientation;
  color: DeviceColor;
  size: DeviceSize;
}
