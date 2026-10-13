import Image from 'next/image';
import { hardwareParts, firmwareExperiments } from '@/data/hardware';
import type { Locale } from '@/lib/locale';

const groups = [
  { id: 'imu', ja: 'IMU・動作センサー', en: 'IMUs & motion sensors', parts: ['imu-mpu', 'imu-lsm'] },
  { id: 'optical', ja: 'カメラ・光学センサー', en: 'Cameras & optical sensors', parts: ['camera', 'ppg'] },
  {
    id: 'distance',
    ja: '距離センサー・LiDAR',
    en: 'Distance sensors & LiDAR',
    parts: ['lidar-2d', 'lidar-3d', 'ultrasonic'],
  },
  { id: 'motion', ja: 'モーター・ドライバ', en: 'Motors & drivers', parts: ['gear-motor', 'motor-driver', 'servo'] },
  { id: 'boards', ja: 'MCU・ボード', en: 'MCUs & boards', parts: ['xiao-nrf', 'xiao-esp', 'pi', 'arduino'] },
] as const;

export function HardwareShelf({ locale }: { locale: Locale }) {
  const isJa = locale === 'ja';

  return (
    <section className="hardware-shelf" id="hardware" aria-labelledby="hardware-heading">
      <div className="container">
        <h2 className="legacy-section-label" id="hardware-heading">
          {isJa ? 'ハードウェア' : 'Hardware'}
        </h2>
        <p className="hardware-intro">
          {isJa
            ? 'ロボット・ウェアラブルの個人制作で扱っているセンサーや制御用ボード。'
            : 'Sensors and control boards for personal robotics and wearable projects.'}
        </p>

        <div className="hardware-categories">
          {groups.map((group) => (
            <section className="hardware-category" key={group.id} aria-labelledby={`hardware-${group.id}`}>
              <h3 id={`hardware-${group.id}`}>{group[locale]}</h3>
              <div className="hardware-grid">
                {group.parts
                  .map((id) => hardwareParts.find((part) => part.id === id))
                  .map((part) =>
                    part ? (
                      <article key={part.id} className="legacy-card hardware-card">
                        <div className="hardware-art">
                          <Image src={`/images/hardware/${part.id}.svg`} alt="" width={360} height={220} />
                        </div>
                        <div className="hardware-card-body">
                          <h4>{part.model}</h4>
                          <span className="hardware-kind">{part.kind[locale]}</span>
                          <div className="hardware-projects">
                            {part.projects.map((project) => (
                              <span key={project}>{project}</span>
                            ))}
                          </div>
                          <p>{part.story[locale]}</p>
                          {part.note ? <small>{part.note[locale]}</small> : null}
                        </div>
                      </article>
                    ) : null,
                  )}
              </div>
            </section>
          ))}
        </div>
        <p className="hardware-image-note">
          {isJa ? '画像は部品のイメージです。' : 'Images are illustrations of the parts.'}
        </p>

        <details className="hardware-experiments">
          <summary>{isJa ? 'ファームウェアの試作' : 'Firmware prototypes'}</summary>
          <p>{isJa ? 'コード実装のみ。実機動作は未確認。' : 'Code implementations; hardware operation unverified.'}</p>
          <div className="hardware-experiment-grid">
            {firmwareExperiments.map((item) => (
              <article key={item.model}>
                <h3>{item.model}</h3>
                <span>{item.project}</span>
                <p>{item.story[locale]}</p>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
