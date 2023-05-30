import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `ノミカイカンジ(Liff App)`,
    image: `https://image.brush-stock.com/img/vewoev000026.jpg`,
    alt: `nomikai_kanji_logo`,
    desc1: `ラインでの飲み会開催を主催する`,
    desc2: `幹事のあなたをサポートします。`,
    desc3: `ノミカイカンジでノミタイカンジ。`,
    link: `https://liff.line.me/1645278921-kWRPP32q/904siiki/profile/img?accountId=904siiki`,
  },
  {
    title: `Yorimichi (iOS/Android)`,
    image: `https://uploads-ssl.webflow.com/616910d261f7ebc4a0e18759/61691112600952ed705e66d1_yorimichi1.png`,
    alt: `yorimichi_logo`,
    desc1: `マップとSNSの融合により`,
    desc2: `より未知な寄り道へ、寄り道でより未知へ`,
    desc3: `あなたを導きます。`,
    link: `https://apps.apple.com/jp/app/yorimichiapp/id1596625712`,
  },
  {
    title: `Protohub(Web)`,
    image: `https://protohub.tech/static/media/nav_logo.13d82e2580a891aad301.png`,
    alt: `protohub_logo`,
    desc1: `プロトタイプ作りを行う`,
    desc2: `エンジニアを対象とした`,
    desc3: `ブログプラットフォームはこちら`,
    link: `https://protohub.tech`,
  },
  {
    title: `ダイビングイクンゴ(Web)`,
    image: `https://www.owd.jp/wp-content/uploads/2018/04/DSC7678.jpg`,
    alt: `diving_logo`,
    desc1: `ダイビングが好きな`,
    desc2: `人たちを対象とした`,
    desc3: `ダイビングスポットの口コミサイト`,
    link: `https://diving-ikungo.com`,
  },
  // {
  //   title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
  //   image: `/images/case-2.webp`,
  //   alt: `Proident pariatur est.`,
  // },
  // {
  //   title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
  //   image: `/images/case-3.webp`,
  //   alt: `Proident pariatur est.`,
  // },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        {/* <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>What will you build?</h1> */}
        <p className={tw(`lg:text-2xl text-white text-gray-400 text-center text-xl mt-12`)}>個人開発プロジェクト</p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 p-2
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <a href={article.link}>
                  <div className={tw(`h-64 z-20`)}>
                    <img
                      src={article.image}
                      alt={article.alt}
                      className={tw(`p-10 h-full w-full object-contain overflow-hidden rounded`)}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                    <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.title}</p>
                    <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.desc1}</p>
                    <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.desc2}</p>
                    <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.desc3}</p>
                  </div>
                </a>
              </div>
            ))}
            {/* <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
              See all case studies
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
