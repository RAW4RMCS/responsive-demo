import { DeviceColor } from 'enums/device-color.enum';
import { Orientation } from 'types/orientation.type';
import { DeviceSize } from './device-size.interface';

export interface Device {
  name: string;
  deviceName: string;
  orientations: Orientation[];
  colors: DeviceColor[];
  size: DeviceSize;
}
