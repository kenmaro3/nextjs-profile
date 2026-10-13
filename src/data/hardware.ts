import type { Locale } from '@/lib/locale';

type Copy = Record<Locale, string>;
export type HardwareCategory = 'sensors' | 'motion' | 'boards' | 'fpga';

export type HardwarePart = {
  id: string;
  model: string;
  category: HardwareCategory;
  kind: Copy;
  story: Copy;
  projects: string[];
  note?: Copy;
};

// Local research audit (not published): docs/hardware-research.json.
// Illustrations are original schematic artwork, not product photos or CAD.
export const hardwareParts: HardwarePart[] = [
  {
    id: 'gear-motor',
    model: 'JGA25-370',
    category: 'motion',
    kind: { ja: 'DCギアドモーター', en: 'DC gear motor' },
    story: {
      ja: 'ローバーの車輪駆動。4個のモーターとエンコーダによる左右の速度制御。',
      en: 'Rover wheel drive with four geared motors and encoder feedback.',
    },
    projects: ['rover-slam'],
    note: { ja: '12V / 60rpm・エンコーダ付き', en: '12V / 60rpm · with encoders' },
  },
  {
    id: 'motor-driver',
    model: 'BTS7960 / IBT-2',
    category: 'motion',
    kind: { ja: 'モータードライバ', en: 'Motor driver' },
    story: {
      ja: 'ローバーのDCモーター制御。ArduinoからのPWM入力で速度・正逆転を制御。',
      en: 'Rover DC motor speed and direction control through Arduino PWM.',
    },
    projects: ['rover-slam'],
  },
  {
    id: 'imu-mpu',
    model: 'MPU-6050',
    category: 'sensors',
    kind: { ja: '6軸IMU', en: '6-axis IMU' },
    story: {
      ja: 'ローバーの加速度・角速度の取得。ステレオカメラと組み合わせた位置推定の実験。',
      en: 'Rover acceleration and angular velocity input for stereo-inertial experiments.',
    },
    projects: ['rover-slam'],
  },
  {
    id: 'camera',
    model: 'IMX296',
    category: 'sensors',
    kind: { ja: 'カメラセンサー', en: 'Camera sensor' },
    story: {
      ja: 'Raspberry Pi用ステレオカメラ。画像取得、カメラ校正、Visual SLAMの実験。',
      en: 'Stereo cameras connected to Raspberry Pi for image capture, calibration, and SLAM experiments.',
    },
    projects: ['rover-slam'],
  },
  {
    id: 'lidar-2d',
    model: 'RPLIDAR A1M8',
    category: 'sensors',
    kind: { ja: '2D LiDAR', en: '2D LiDAR' },
    story: {
      ja: 'ローバーの周辺距離計測。Mac直結でのLiDARデータ収録とSLAMの実験。',
      en: 'A scanning distance sensor used on the rover and connected to a Mac to capture data for LiDAR SLAM.',
    },
    projects: ['rover-slam', 'lidar_slam_proto'],
  },
  {
    id: 'lidar-3d',
    model: 'Livox MID-360',
    category: 'sensors',
    kind: { ja: '3D LiDAR', en: '3D LiDAR' },
    story: {
      ja: 'ローバー用の3D点群取得。Raspberry Piで点群と内蔵IMUデータを受信。',
      en: 'Rover 3D point cloud and built-in IMU packet reception on Raspberry Pi.',
    },
    projects: ['rover-slam'],
  },
  {
    id: 'xiao-nrf',
    model: 'XIAO nRF52840 Sense',
    category: 'boards',
    kind: { ja: 'MCUボード', en: 'MCU board' },
    story: {
      ja: '足首ウェアラブルの試作。電池駆動でのIMU記録、フラッシュ保存、USB経由のデータ回収。',
      en: 'Battery-powered ankle IMU logging, flash storage, and USB data retrieval.',
    },
    projects: ['ankle-wearable'],
    note: { ja: 'nRF52840 / P25Q16H QSPIフラッシュ', en: 'nRF52840 / P25Q16H QSPI flash' },
  },
  {
    id: 'imu-lsm',
    model: 'LSM6DS3TR-C',
    category: 'sensors',
    kind: { ja: 'オンボードIMU', en: 'Onboard IMU' },
    story: {
      ja: 'XIAO Sense内蔵のIMU。足首ウェアラブルの加速度取得と動作記録。',
      en: 'The IMU on XIAO Sense, read directly for a motion logger intended to be worn on the ankle.',
    },
    projects: ['ankle-wearable'],
  },
  {
    id: 'ppg',
    model: 'MAX30102',
    category: 'sensors',
    kind: { ja: '光学式PPGセンサー', en: 'Optical PPG sensor' },
    story: {
      ja: '赤色・赤外光によるPPG波形取得。指先の脈波計測と足首での計測条件の検討。',
      en: 'Red and infrared PPG capture, fingertip pulse measurement, and ankle measurement experiments.',
    },
    projects: ['ankle-wearable'],
    note: { ja: 'MH-ET LIVEのモジュール', en: 'MH-ET LIVE module' },
  },
  {
    id: 'xiao-esp',
    model: 'XIAO ESP32S3 Sense',
    category: 'boards',
    kind: { ja: 'カメラ付きMCUボード', en: 'MCU board with camera' },
    story: {
      ja: 'USB経由のカメラ画像取得とMQTT配信。ブラウザ表示、Wi-Fi・BLEの試作。',
      en: 'USB camera capture, MQTT streaming, browser display, and Wi-Fi/BLE prototyping.',
    },
    projects: ['seed_proto'],
    note: { ja: 'カメラ型番は現物との照合待ち', en: 'Camera model awaits hardware identification' },
  },
  {
    id: 'servo',
    model: 'SG90',
    category: 'motion',
    kind: { ja: 'マイクロサーボ', en: 'Micro servo' },
    story: {
      ja: '四脚ロボットの脚・首の制御。9個のサーボの初期角度調整と歩行制御コード。',
      en: 'Nine servos for a four-legged robot’s legs and neck, with a PC calibration tool and walking control code.',
    },
    projects: ['spidar-sg90'],
    note: { ja: '配線・コード実装（実機動作未確認）', en: 'Wiring and firmware; hardware operation unverified' },
  },
  {
    id: 'ultrasonic',
    model: 'HC-SR04',
    category: 'sensors',
    kind: { ja: '超音波距離センサー', en: 'Ultrasonic distance sensor' },
    story: {
      ja: '四脚ロボットの前方距離計測。Arduino Nanoへの配線と調整ツールからの読出し。',
      en:
        'A forward-facing distance sensor in the four-legged robot setup, wired to Nano and supported by the calibration tool.',
    },
    projects: ['spidar-sg90'],
    note: { ja: '配線・コード実装（実機動作未確認）', en: 'Wiring and firmware; hardware operation unverified' },
  },
  {
    id: 'pi',
    model: 'Raspberry Pi 5',
    category: 'boards',
    kind: { ja: 'ローバーの計算機', en: 'Rover computer' },
    story: {
      ja: 'ローバーのカメラ・LiDAR接続とROS 2／SLAM処理。電源・センサー構成の検証。',
      en: 'Rover camera and LiDAR host for ROS 2 and SLAM, including power and sensor integration checks.',
    },
    projects: ['rover-slam'],
    note: { ja: 'v1は試作・失敗も含む制作記録', en: 'v1 is an experiment archive, including failures' },
  },
  {
    id: 'arduino',
    model: 'Arduino Mega / UNO / Nano',
    category: 'boards',
    kind: { ja: '制御用MCUボード', en: 'Control MCU boards' },
    story: {
      ja: 'ローバーのモーター制御、四脚ロボットのサーボ調整。試作ごとにMega・UNO・Nanoを使用。',
      en:
        'Motor control for the rover and servo calibration for the four-legged robot, using different boards across iterations.',
    },
    projects: ['rover-slam', 'spidar-sg90'],
    note: {
      ja: 'ローバーv1: Mega / 後の構成: UNO / 四脚: Nano',
      en: 'Rover v1: Mega / later setup: UNO / quadruped: Nano',
    },
  },
  {
    id: 'fpga-cmod',
    model: 'Cmod A7-35T',
    category: 'fpga',
    kind: { ja: 'Artix-7 FPGAボード', en: 'Artix-7 FPGA board' },
    story: {
      ja: '自作RISC-V CPU・OSの実機検証。USB UARTによるカーネル出力の確認とシミュレータとの比較。',
      en: 'Custom RISC-V CPU and OS validation, with kernel output over USB UART compared against the simulator.',
    },
    projects: ['custom-os'],
    note: { ja: 'XC7A35T-CPG236-1', en: 'XC7A35T-CPG236-1' },
  },
  {
    id: 'fpga-pynq',
    model: 'PYNQ-Z2',
    category: 'fpga',
    kind: { ja: 'Zynq-7020 FPGAボード', en: 'Zynq-7020 FPGA board' },
    story: {
      ja: '自作CPU・OSの実機検証。PL側のUARTをILAで記録し、カーネル・MMU・Ethernet MACを確認。',
      en: 'Custom CPU and OS validation, using ILA to capture PL-side UART for kernel, MMU, and Ethernet MAC checks.',
    },
    projects: ['custom-os'],
    note: { ja: 'XC7Z020-CLG400-1', en: 'XC7Z020-CLG400-1' },
  },
  {
    id: 'fpga-zed',
    model: 'ZedBoard',
    category: 'fpga',
    kind: { ja: 'Zynq-7020 FPGAボード', en: 'Zynq-7020 FPGA board' },
    story: {
      ja: 'custom-osの開発環境に接続。FMC経由のカメラ入力と画像処理の構成を検討。',
      en:
        'Connected to the custom-os development setup, with FMC camera input and image-processing configurations under exploration.',
    },
    projects: ['custom-os'],
    note: { ja: 'XC7Z020-CLG484-1 / カメラ入力は未検証', en: 'XC7Z020-CLG484-1 / camera input unverified' },
  },
];

export const firmwareExperiments = [
  {
    model: 'PCA9685',
    project: 'Arduino / sketch_arm',
    story: {
      ja: 'アーム用のUART・PWM制御ブリッジ。2枚のボードを使用。',
      en: 'An arm bridge controlling two PWM boards from UART.',
    },
  },
  {
    model: 'nRF24L01',
    project: 'Arduino / nRF24L01_1・2',
    story: {
      ja: 'アーム・ローバー向けのジョイスティック入力の無線送受信。',
      en: 'Code to transmit joystick input for arm and rover control.',
    },
  },
  {
    model: 'RP2040 / ICM-42688P',
    project: 'sync_proto',
    story: {
      ja: 'カメラのトリガ・VSYNC・IMU入力をまとめる同期ハブ。',
      en: 'A sync hub implementation combining camera triggers, VSYNC, and IMU input.',
    },
  },
];
