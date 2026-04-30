export type UseItem = {
  title: string;
  image: string;
  comment: string;
  url: string;
  affiliate?: boolean;
};

export type UseCategory = {
  title: string;
  description: string;
  items: UseItem[];
};

export const usesCategories: UseCategory[] = [
  {
    title: '3D Printers',
    description: 'Quick-turn mechanical iteration tools for brackets, wheel mounts, and enclosure ideas.',
    items: [
      {
        title: 'CoreXY 3D Printer',
        image: '/images/uses/3d-printer.svg',
        comment: 'The main tool for fast prototype frames, sensor mounts, and robot fixtures.',
        url: 'https://example.com/3d-printer',
        affiliate: true,
      },
    ],
  },
  {
    title: 'Microcontrollers',
    description: 'Boards I reach for when testing motion, connectivity, or sensor pipelines.',
    items: [
      {
        title: 'ESP32 Dev Board',
        image: '/images/uses/microcontroller.svg',
        comment: 'Good balance of Wi-Fi, BLE, and enough GPIO for robot experiments.',
        url: 'https://example.com/esp32-dev-board',
        affiliate: true,
      },
      {
        title: 'Arduino Nano Compatible',
        image: '/images/uses/microcontroller.svg',
        comment: 'Useful for simple control loops and quick motor driver checks.',
        url: 'https://example.com/arduino-nano',
        affiliate: true,
      },
    ],
  },
  {
    title: 'Sensors',
    description: 'Small modules that make every build log more measurable.',
    items: [
      {
        title: 'Time-of-Flight Distance Sensor',
        image: '/images/uses/sensor.svg',
        comment: 'Great for obstacle tests when building tiny mobile robots.',
        url: 'https://example.com/tof-sensor',
        affiliate: true,
      },
      {
        title: 'IMU Sensor Module',
        image: '/images/uses/sensor.svg',
        comment: 'Useful for heading drift checks and movement logging.',
        url: 'https://example.com/imu-sensor',
        affiliate: true,
      },
    ],
  },
  {
    title: 'Tools',
    description: 'Bench essentials that reduce friction during quick experiments.',
    items: [
      {
        title: 'Soldering Station',
        image: '/images/uses/tool.svg',
        comment: 'A stable temperature iron matters more than any fancy accessory.',
        url: 'https://example.com/soldering-station',
        affiliate: true,
      },
      {
        title: 'Digital Multimeter',
        image: '/images/uses/tool.svg',
        comment: 'The first thing I grab when a motor driver or sensor behaves strangely.',
        url: 'https://example.com/multimeter',
        affiliate: true,
      },
    ],
  },
  {
    title: 'Camera',
    description: 'Capture both the build process and the failures worth documenting.',
    items: [
      {
        title: 'Compact Overhead Camera',
        image: '/images/uses/camera.svg',
        comment: 'Good for bench shots and YouTube close-ups without taking over the workspace.',
        url: 'https://example.com/compact-camera',
        affiliate: true,
      },
    ],
  },
  {
    title: 'Software',
    description: 'The software stack behind CAD files, code, docs, and build notes.',
    items: [
      {
        title: 'VS Code + PlatformIO',
        image: '/images/uses/software.svg',
        comment: 'My default for firmware iteration, serial logging, and project notes.',
        url: 'https://code.visualstudio.com/',
      },
      {
        title: 'Fusion Workflow',
        image: '/images/uses/software.svg',
        comment: 'Useful when a quick sketch has to become a printable part.',
        url: 'https://www.autodesk.com/products/fusion-360/overview',
      },
    ],
  },
  {
    title: 'Frequently Used Parts',
    description: 'Small consumables and modules that appear across multiple builds.',
    items: [
      {
        title: 'Jumper Wire Kit',
        image: '/images/uses/parts.svg',
        comment: 'Necessary when the prototype is still changing every hour.',
        url: 'https://example.com/jumper-wires',
        affiliate: true,
      },
      {
        title: 'DC Gear Motor Set',
        image: '/images/uses/parts.svg',
        comment: 'A common baseline for tiny drive experiments and chassis tests.',
        url: 'https://example.com/dc-gear-motors',
        affiliate: true,
      },
    ],
  },
];
