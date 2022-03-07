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
    title: `iOS App`,
    image: `https://uploads-ssl.webflow.com/616910d261f7ebc4a0e18759/61691112600952ed705e66d1_yorimichi1.png`,
    alt: `yorimichi_logo`,
    desc1: `マップとSNSの融合により`,
    desc2: `より未知な寄り道へ、寄り道でより未知へ`,
    desc3: `あなたを導きます。`,
  },
  {
    title: `TFHEpp`,
    image: `https://avatars.githubusercontent.com/u/35465898?v=4`,
    alt: `tfhepp_logo`,
    desc1: `プログラマブルブートストラップを用いた`,
    desc2: `格子暗号の応用アプリケーションを`,
    desc3: `実装しています。`,
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
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <a href="https://apps.apple.com/jp/app/yorimichiapp/id1596625712">
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
