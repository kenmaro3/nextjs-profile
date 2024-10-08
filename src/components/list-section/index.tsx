import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Web / Infrastructure / AI Engineer`,
    description: `様々なアプリケーション開発をフリーランスとして開発しています。
    `,
  },
  {
    title: `Mobile App Developer`,
    description: `個人開発プロジェクトを通じてモバイルアプリの開発に取り組んでいます。
    `,
  },
  {
    title: `Blog / Hackathon Lover`,
    description: `ブログや、ハッカソンを通じていろんな技術をアウトプットしています。
    `,
  },
  {
    title: `Challenging New Things`,
    description: `自分のやりたいことに制限を設けず、日々チャレンジしています。
    `,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-4 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`lg:text-2xl text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
          Who I am in 4 Lines
        </h2>
        {/* <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your business
        </p> */}
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center mb-20`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <img
              src="https://pbs.twimg.com/media/FdiVIk1aIAEmzzg?format=jpg&name=large"
              alt="programming_picture"
              width="100%"
            />
            <div className={tw(`mb-16 text-center`)}>
              <h4 className={tw(`mt-2 lg:text-xl font-semibold text-gray-500 text-base tracking-wide`)}>
                Blenderで家のモデリングをした時の作品
              </h4>
              {/* <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your business
        </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
