import type { Locale } from '@/lib/locale';

type ProjectCopy = Record<Locale, string[]>;

// Public descriptions only. The source repositories are private.
export const personalProjects: {
  id: string;
  title: string;
  image: string;
  href?: string;
  description: ProjectCopy;
}[] = [
  {
    id: 'xiao-surveillance-camera',
    title: 'XIAO監視カメラ試作',
    image: '/images/projects/xiao-surveillance-camera.svg',
    href: '/projects/xiao-surveillance-camera',
    description: {
      ja: ['ESP32S3 Sense × OV5640 × PIR', '34 × 44 mmの専用キャリアPCB', 'PCB発注済み・実機検証待ち'],
      en: ['ESP32S3 Sense × OV5640 × PIR', 'Custom 34 × 44 mm carrier PCB', 'PCB ordered; hardware validation pending'],
    },
  },
  {
    id: 'slam-proto',
    title: 'SLAM / slam_proto',
    image: '/images/projects/slam-proto.svg',
    description: {
      ja: ['単眼・ステレオのVisual SLAM', 'カメラ画像からの位置推定と地図生成', 'C++実装・データセットでの評価'],
      en: [
        'Monocular & stereo Visual SLAM',
        'Camera-based localization and mapping',
        'C++ implementation and dataset evaluation',
      ],
    },
  },
  {
    id: 'voice-proto',
    title: 'VoiceProto (iPhone / Watch)',
    image: '/images/projects/voice-proto.png',
    description: {
      ja: ['録音・文字起こし・議事録アプリ', 'iPhone・Apple Watchの録音連携', '端末内処理とクラウド処理の試作'],
      en: [
        'Recording, transcription, and meeting notes',
        'iPhone and Apple Watch recording workflow',
        'On-device and cloud processing prototypes',
      ],
    },
  },
  {
    id: 'custom-os',
    title: 'custom-os',
    image: '/images/projects/custom-os.svg',
    description: {
      ja: ['自作RISC-V CPU・OS・Cコンパイラ', 'シミュレータとFPGAでの動作検証', 'AIアクセラレータの設計・実装'],
      en: [
        'Custom RISC-V CPU, OS, and C compiler',
        'Simulator and FPGA hardware validation',
        'AI accelerator design and implementation',
      ],
    },
  },
];
