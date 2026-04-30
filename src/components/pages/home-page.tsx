import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { JsonLd } from '@/components/site/json-ld';
import { SmartLink } from '@/components/site/smart-link';
import { SponsorCTA } from '@/components/site/sponsor-cta';
import { breadcrumbJsonLd } from '@/lib/json-ld';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/locale';
import { withLocale } from '@/lib/locale';
import { siteConfig } from '@/lib/site-config';

const workHistory = [
  {
    title: 'Cellid Inc',
    period: '2024-current',
    subtitle: 'Software Department Manager',
    href: 'https://cellid.com/',
  },
  {
    title: 'EAGLYS Inc',
    period: '2018-2024',
    subtitle: 'Research Engineer (R&D Manager)',
    href: 'https://www.eaglys.co.jp/',
  },
  {
    title: 'Waseda University',
    period: '2019-current',
    subtitle: 'Researcher @ Global Consolidated Research Institute for Science Wisdom',
    href: 'https://www.waseda.jp/inst/cro/other/2020/03/29/4213/',
  },
];

const academicHistory = [
  {
    title: 'Stony Brook University',
    period: '2015-2018',
    subtitle: 'Master of Arts (Physics & Astronomy)',
    href: 'https://www.stonybrook.edu/commcms/grad-physics-astronomy/',
  },
  {
    title: 'University of Leeds',
    period: '2012-2013',
    subtitle: 'Physics Exchange Student',
    href: 'https://www.leeds.ac.uk/',
  },
  {
    title: 'Kumamoto University',
    period: '2011-2015',
    subtitle: 'Science Dept (理学部理学科)',
    href: 'http://www.sci.kumamoto-u.ac.jp/index-j.html',
  },
];

const hackathons = [
  {
    title: 'PLATEAU Hack Challenge 2024 in Tokyo',
    period: '2024',
    subtitle: 'Developer',
    href: 'https://asciistartup.connpass.com/event/323458/',
  },
  {
    title: 'Virtual Influener Hackathon',
    period: '2023',
    subtitle: 'Developer',
    href: 'https://lu.ma/difun.hackathon',
  },
  {
    title: 'Law API Hackathon by Digital Ministry of Japan',
    period: '2023',
    subtitle: 'Developer (Won Prize)',
    href: 'https://www.digital.go.jp/policies/legal-practice/hackathon',
  },
  {
    title: 'Yahoo! JAPAN Hack Day',
    period: '2021-2022',
    subtitle: 'Developer / Judge',
    href: 'https://hackday.yahoo.co.jp/',
  },
];

const talksAndPublications = [
  {
    title: 'Plateau Hack Challenge',
    period: '2024',
    subtitle: 'Talk',
    href: 'https://www.youtube.com/live/NFdHFmavrVk?si=u8Ef5taXDydIwPvD&t=5070',
  },
  {
    title: 'Line Developer Community',
    period: '2023',
    subtitle: 'Talk',
    href: 'https://www.youtube.com/live/A4r0zRADrKE?si=mD8GcfNDJDdAkUDe&t=1491',
  },
  {
    title: 'Neural Network Training With Homomorphic Encryption',
    period: '2020',
    subtitle: 'Publication',
    href: 'https://arxiv.org/abs/2012.13552',
  },
  {
    title: 'An NVMe-based TFHE Accelerator',
    period: '2024',
    subtitle: 'Publication',
    href: 'https://eprint.iacr.org/2024/744',
  },
];

const externalBlogPosts = [
  {
    category: 'Secure Computing',
    date: '2022-12-23',
    title: '秘密計算エンジニアを始めて４年が経った。',
    source: 'Qiita @ kenmaro',
    href: 'https://qiita.com/kenmaro/items/74c3147ccb8c7ce7c60c',
    image: 'https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png',
  },
  {
    category: 'Secure Computing',
    date: '2019-11-06',
    title: '最先端の秘密計算技術、格子暗号スタディロードマップを公開！！',
    source: 'Qiita @ kenmaro',
    href: 'https://qiita.com/kenmaro/items/f2d4fb84833c308a4d29',
    image: 'https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png',
  },
  {
    category: 'Machine Learning',
    date: '2019-11-06',
    title: 'ResNet なんて全く理解していないだけの人生だった(序)',
    source: 'Qiita @ kenmaro',
    href: 'https://qiita.com/kenmaro/items/008051dae0bf0ad718cb',
    image: 'https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png',
  },
  {
    category: 'My Thoughts',
    date: '2023-05-24',
    title: 'ChatGPTが誕生した今、コードを書けない(書かない）という言い訳は通用しない世の中になったと思う',
    source: 'note @ kenmaro',
    href: 'https://note.com/kenmaro/n/ndfcc6bb1c384',
    image:
      'https://assets.st-note.com/production/uploads/images/106373080/rectangle_large_type_2_74d264dc7ef4179981f45cfe36af98df.png?width=2000&height=2000&fit=bounds&quality=85',
  },
  {
    category: 'My Thoughts',
    date: '2023-05-07',
    title: '自分のDNAの中でマックスを出すために努力し継続していくというただそれだけの生き方',
    source: 'note @ kenmaro',
    href: 'https://note.com/kenmaro/n/na7911f63d98a',
    image:
      'https://assets.st-note.com/production/uploads/images/104952470/rectangle_large_type_2_10130a0198886d259df6fa8c5fc0ec77.png?width=2000&height=2000&fit=bounds&quality=85',
  },
  {
    category: 'My Thoughts',
    date: '2023-03-02',
    title: '5年間働いて考えた、自己肯定感を高めるためのたった３つの方法',
    source: 'note @ kenmaro',
    href: 'https://note.com/kenmaro/n/n05d0112e49f1',
    image:
      'https://assets.st-note.com/production/uploads/images/99272462/rectangle_large_type_2_443de046971f7a9e1367fbbb442d5fc9.png?width=2000&height=2000&fit=bounds&quality=85',
  },
];

const legacyWhoIAm = [
  {
    title: 'Web / Infrastructure / AI Engineer',
    description: '様々なアプリケーション開発をフリーランスとして開発しています。',
  },
  {
    title: 'Mobile App Developer',
    description: '個人開発プロジェクトを通じてモバイルアプリの開発に取り組んでいます。',
  },
  {
    title: 'Blog / Hackathon Lover',
    description: 'ブログや、ハッカソンを通じていろんな技術をアウトプットしています。',
  },
  {
    title: 'Challenging New Things',
    description: '自分のやりたいことに制限を設けず、日々チャレンジしています。',
  },
];

const legacyPersonalProjects = [
  {
    title: 'AUTHBLUE',
    image: '/images/authblue-logo.png',
    description: ['同意を取るならAUTHBLUE。', '同意をもっとスマートに', 'そして安全に。'],
    link: 'https://authblue.jp',
  },
  {
    title: 'Themis',
    image: '/images/themis.png',
    description: ['法律AIアシスタント', '法律のお悩み事をもっと気軽に', '相談しよう。'],
    link: 'https://themisjp.com',
  },
  {
    title: 'ノミカイカンジ(Liff App)',
    image: 'https://image.brush-stock.com/img/vewoev000026.jpg',
    description: ['ラインでの飲み会開催を主催する', '幹事のあなたをサポートします。', 'ノミカイカンジでノミタイカンジ。'],
    link: 'https://liff.line.me/1645278921-kWRPP32q/904siiki/profile/img?accountId=904siiki',
  },
  {
    title: 'Yorimichi (iOS/Android)',
    image: 'https://uploads-ssl.webflow.com/616910d261f7ebc4a0e18759/61691112600952ed705e66d1_yorimichi1.png',
    description: ['マップとSNSの融合により', 'より未知な寄り道へ、寄り道でより未知へ', 'あなたを導きます。'],
    link: 'https://apps.apple.com/jp/app/yorimichiapp/id1596625712',
  },
  {
    title: 'Protohub(Web)',
    image: '/images/coding.png',
    description: ['プロトタイプ作りを行う', 'エンジニアを対象とした', 'ブログプラットフォームはこちら'],
    link: 'https://protohub.tech',
  },
  {
    title: 'ダイビングイクンゴ(Web)',
    image: 'https://www.owd.jp/wp-content/uploads/2018/04/DSC7678.jpg',
    description: ['ダイビングが好きな', '人たちを対象とした', 'ダイビングスポットの口コミサイト'],
    link: 'https://diving-front-g13kqmlq7-kenmaro3.vercel.app/',
  },
];

export async function HomePage({ locale }: { locale: Locale }) {
  const { page, common } = getCopy(locale);
  const labels = page.home;
  const isJa = locale === 'ja';
  const channelHighlights = isJa
    ? ['現在の動画はモバイルアプリやWebアプリの試作が中心', 'ソフトウェア寄りのプロトタイピング記録', 'ハードウェア・ロボットの発信はこれから追加予定']
    : [
        'Current uploads are mainly mobile and web app prototypes',
        'The channel currently focuses on software-side prototyping',
        'Hardware and robotics content will be added next',
      ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: common.home, path: withLocale('/', locale) }])} />

      <section className="legacy-hero">
        <div className="container">
          <p className="legacy-hero-domain">kenmaro.about.me</p>
          <div className="legacy-hero-copy">
            <h1>{page.home.heroTitle1}</h1>
            <h1>{page.home.heroTitle2}</h1>
            <p>{page.home.heroDescription}</p>
            <div className="legacy-hero-actions">
              <SmartLink href={withLocale('/blog', locale)} className="legacy-pill-button">
                {common.blog}
              </SmartLink>
              <SmartLink href={siteConfig.social.youtube} className="legacy-pill-button">
                YouTube
              </SmartLink>
              <SmartLink href={siteConfig.social.github} className="legacy-pill-button">
                GitHub
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy-about">
        <div className="container">
          <p className="legacy-section-label">{labels.aboutHeading}</p>
          <div className="legacy-about-grid">
            <article className="legacy-card legacy-profile-card">
              <img
                className="legacy-profile-avatar"
                src="https://pbs.twimg.com/profile_images/1646290921103962113/pCinLyv5_400x400.jpg"
                alt="Kenmaro"
                width={128}
                height={128}
              />
              <h2>kenmaro</h2>
              <p>{labels.profileTitle}</p>
            </article>

            <article className="legacy-card">
              <h3>{labels.backgroundTitle}</h3>
              <p>
                ソフトウェアエンジニアとして仕事をしつつ、個人ではハードウェアDIY、ロボット、センサー、
                ESP32、3Dプリントを試しながら学んでいます。
              </p>
              <p>
                このサイトでは、完成品だけでなく途中の失敗や改善も含めて、個人の制作ログとして残していきます。
              </p>
            </article>

            <article className="legacy-card">
              <h3>{labels.focusTitle}</h3>
              <ul className="legacy-list">
                <li>Web / Infrastructure / AI Engineer</li>
                <li>Mobile App Developer</li>
                <li>Blog / Hackathon Lover</li>
                <li>Challenging New Things</li>
              </ul>
            </article>

            <article className="legacy-card">
              <h3>{labels.hardwareTitle}</h3>
              <ul className="legacy-list">
                <li>小型ロボット</li>
                <li>Arduino / ESP32 / Raspberry Pi</li>
                <li>センサーと制御の試作</li>
                <li>3Dプリントによる試作改善</li>
                <li>YouTube制作物の補足記事</li>
              </ul>
            </article>

            <article className="legacy-card">
              <h3>{labels.linksTitle}</h3>
              <div className="legacy-icon-links">
                <SmartLink href={siteConfig.social.x} className="legacy-inline-link">
                  X
                </SmartLink>
                <SmartLink href={siteConfig.social.github} className="legacy-inline-link">
                  GitHub
                </SmartLink>
                <SmartLink href={siteConfig.social.youtube} className="legacy-inline-link">
                  YouTube
                </SmartLink>
              </div>
            </article>

            <article className="legacy-card">
              <h3>{labels.workTitle}</h3>
              <div className="legacy-detail-list">
                {workHistory.map((item) => (
                  <SmartLink key={item.title} href={item.href} className="legacy-detail-item">
                    <strong>
                      {item.title} <span>({item.period})</span>
                    </strong>
                    <small>{item.subtitle}</small>
                  </SmartLink>
                ))}
              </div>
            </article>

            <article className="legacy-card">
              <h3>{labels.academicTitle}</h3>
              <div className="legacy-detail-list">
                {academicHistory.map((item) => (
                  <SmartLink key={item.title} href={item.href} className="legacy-detail-item">
                    <strong>
                      {item.title} <span>({item.period})</span>
                    </strong>
                    <small>{item.subtitle}</small>
                  </SmartLink>
                ))}
              </div>
            </article>

            <article className="legacy-card">
              <h3>{labels.hackathonTitle}</h3>
              <div className="legacy-detail-list">
                {hackathons.map((item) => (
                  <SmartLink key={item.title} href={item.href} className="legacy-detail-item">
                    <strong>
                      {item.title} <span>({item.period})</span>
                    </strong>
                    <small>{item.subtitle}</small>
                  </SmartLink>
                ))}
              </div>
            </article>

            <article className="legacy-card">
              <h3>{labels.talksTitle}</h3>
              <div className="legacy-detail-list">
                {talksAndPublications.map((item) => (
                  <SmartLink key={item.title} href={item.href} className="legacy-detail-item">
                    <strong>
                      {item.title} <span>({item.period})</span>
                    </strong>
                    <small>{item.subtitle}</small>
                  </SmartLink>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="legacy-lines">
        <div className="container">
          <div className="legacy-lines-heading">
            <h2>{labels.whoHeading}</h2>
          </div>
          <div className="legacy-lines-grid">
            <div>
              <ol className="legacy-number-list">
                {legacyWhoIAm.map((item, index) => (
                  <li key={item.title}>
                    <span>{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="legacy-side-image">
              <img
                src="https://pbs.twimg.com/media/FdiVIk1aIAEmzzg?format=jpg&name=large"
                alt="programming_picture"
                className="legacy-side-remote-image"
                width={1200}
                height={720}
              />
              <p>{labels.whoImageCaption}</p>
            </div>
          </div>
          <div className="legacy-hardware-note">
            <h3>{labels.hardwareNoteTitle}</h3>
            <p>{labels.hardwareNoteDescription}</p>
          </div>
        </div>
      </section>

      <section className="legacy-projects">
        <div className="container">
          <p className="legacy-projects-label">{labels.projectsHeading}</p>
          <div className="legacy-project-grid">
            {legacyPersonalProjects.map((project) => (
              <article key={project.title} className="legacy-project-card">
                <SmartLink href={project.link}>
                  <div className="legacy-project-image-wrap">
                    <img src={project.image} alt={project.title} className="legacy-project-image" width={1200} height={720} />
                  </div>
                  <div className="legacy-project-copy">
                    <p>{project.title}</p>
                    {project.description.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                </SmartLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-hardware-projects">
        <div className="container">
          <div className="legacy-section-heading">
            <h2>{labels.hardwareProjectsHeading}</h2>
          </div>
          <div className="legacy-youtube-channel-card">
            <div className="legacy-youtube-channel-copy">
              <p className="legacy-youtube-handle">@kenmaro-prototyping</p>
              <h3>{labels.youtubeChannelTitle}</h3>
              <p>{labels.youtubeChannelBody}</p>
              <ul className="legacy-list">
                {channelHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="legacy-youtube-channel-actions">
              <SmartLink href={siteConfig.social.youtube} className="legacy-pill-button">
                YouTube Channel
                <FiArrowUpRight aria-hidden="true" />
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy-blog-section">
        <div className="container">
          <div className="legacy-section-heading">
            <h2>{labels.blogsHeading}</h2>
            <p>{labels.blogsDescription}</p>
          </div>
          <div className="legacy-external-blog-summary">
            <div>
              <strong>281</strong>
              <span>{labels.externalQiitaCount}</span>
            </div>
            <div>
              <strong>48</strong>
              <span>{labels.externalNoteCount}</span>
            </div>
          </div>
          <div className="legacy-external-blog-grid">
            {externalBlogPosts.map((post) => (
              <article key={post.href} className="legacy-external-blog-card">
                <SmartLink href={post.href}>
                  <div className="legacy-external-blog-label">{post.category}</div>
                  <img src={post.image} alt={post.title} className="legacy-external-blog-image" />
                  <div className="legacy-external-blog-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.source}</p>
                </SmartLink>
              </article>
            ))}
          </div>
          <div className="legacy-blog-actions">
            <SmartLink href={withLocale('/blog', locale)} className="legacy-outline-button">
              {labels.blogListButton}
            </SmartLink>
          </div>
        </div>
      </section>

      <section className="legacy-youtube-section">
        <div className="container legacy-youtube-grid">
          <div className="legacy-youtube-copy">
            <h2>{labels.youtubeHeading}</h2>
            <p>{labels.youtubeDescription}</p>
            <div className="legacy-hero-actions">
              <SmartLink href={siteConfig.social.youtube} className="legacy-pill-button">
                {labels.youtubeButton}
                <FiArrowUpRight aria-hidden="true" />
              </SmartLink>
            </div>
          </div>
          <div className="legacy-youtube-channel-panel">
            <div className="legacy-youtube-channel-badge">YouTube</div>
            <h3>@kenmaro-prototyping</h3>
            <p>
              {isJa
                ? '現在はモバイルアプリやWebアプリの試作動画が中心です。ハードウェア系の内容はここから追加していきます。'
                : 'Right now this channel is mostly for mobile and web app prototype videos. Hardware content will be added here next.'}
            </p>
            <SmartLink href={siteConfig.social.youtube} className="legacy-outline-button">
              {labels.youtubeButton}
            </SmartLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SponsorCTA title={common.sponsorTitle} description={common.sponsorDescription} />
        </div>
      </section>
    </>
  );
}
