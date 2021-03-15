import { Injectable } from '@angular/core';
import { DeviceColor } from 'enums/device-color.enum';
import { Device } from 'interfaces/device.interface';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor() {}

  devices: Device[] = [
    {
      name: 'Galaxy S3',
      deviceName: 'galaxyS3',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 833,
        height: 1622,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },

    {
      name: 'Galaxy S5',
      deviceName: 'galaxyS5',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 1230,
        height: 2356,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'Galaxy Tab 4',
      deviceName: 'galaxyTab4',
      orientations: ['portrait'],
      size: {
        width: 1178,
        height: 1983,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },

    {
      name: 'iMac',
      deviceName: 'iMac',
      orientations: ['portrait'],
      size: {
        width: 1843,
        height: 1483,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'iPad',
      deviceName: 'iPad',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 1116,
        height: 1446,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },

    {
      name: 'iPad Air 2',
      deviceName: 'iPadAir2',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 1766,
        height: 2497,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'iPad Pro',
      deviceName: 'iPadPro',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 2294,
        height: 3180,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'iPhone 6',
      deviceName: 'iPhone6',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 853,
        height: 1771,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'iPhone 6 plus',
      deviceName: 'iPhone6Plus',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 1240,
        height: 2498,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'iPhone SE',
      deviceName: 'iPhoneSE',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 763,
        height: 1601,
      },
      colors: [
        DeviceColor.black,
        DeviceColor.white,
        DeviceColor.gold,
        DeviceColor.pink,
      ],
    },

    {
      name: 'iPhone 5',
      deviceName: 'iPhone5',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 761,
        height: 1594,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },

    {
      name: 'Lumia 930',
      deviceName: 'Lumia930',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 1483,
        height: 2852,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },

    {
      name: 'Macbook',
      deviceName: 'Macbook',
      orientations: ['portrait'],
      size: {
        width: 1916,
        height: 1102,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'Macbook 2015',
      deviceName: 'Macbook2015',
      orientations: ['portrait'],
      size: {
        width: 1916,
        height: 1102,
      },
      colors: [DeviceColor.black, DeviceColor.white, DeviceColor.gold],
    },

    {
      name: 'Macbook Pro',
      deviceName: 'MacbookPro',
      orientations: ['portrait'],
      size: {
        width: 1208,
        height: 700,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'Samsung tv',
      deviceName: 'SamsungTV',
      orientations: ['portrait'],
      size: {
        width: 1056,
        height: 683,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'iPhone 6 with hand',
      deviceName: 'iPhone6Hand',
      orientations: ['portrait'],
      size: {
        width: 1553,
        height: 1384,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },

    {
      name: 'iPhone 7 with hand',
      deviceName: 'iPhone7Hand',
      orientations: ['portrait'],
      size: {
        width: 846,
        height: 1340,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'iPhone 7 with hand 2',
      deviceName: 'iPhone7Hand_2',
      orientations: ['portrait'],
      size: {
        width: 846,
        height: 1340,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'Chromebook',
      deviceName: 'Chromebook',
      orientations: ['portrait'],
      size: {
        width: 3566,
        height: 2103,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'HTC One M8',
      deviceName: 'HtcOneM8',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 320,
        height: 669,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'Huawei P8',
      deviceName: 'HuaweiP8',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 1119,
        height: 2347,
      },
      colors: [DeviceColor.gold],
    },

    {
      name: 'Surface Pro 3',
      deviceName: 'SurfacePro3',
      orientations: ['landscape'],
      size: {
        width: 3621,
        height: 2468,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'Surface Studio',
      deviceName: 'SurfaceStudio',
      orientations: ['portrait'],
      size: {
        width: 3972,
        height: 3435,
      },
      colors: [DeviceColor.black],
    },

    {
      name: 'iPhone 7',
      deviceName: 'iPhone7',
      orientations: ['portrait', 'landscape'],
      size: {
        width: 870,
        height: 1767,
      },
      colors: [
        DeviceColor.black,
        DeviceColor.white,
        DeviceColor.gold,
        DeviceColor.pink,
        DeviceColor.red,
      ],
    },

    {
      name: 'Pixel',
      deviceName: 'Pixel',
      orientations: ['portrait'],
      size: {
        width: 229,
        height: 464,
      },
      colors: [DeviceColor.black, DeviceColor.white],
    },
  ];
}
