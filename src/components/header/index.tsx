import { tw, css } from 'twind/css';
import Button from '@/components/button';
// import Netlify from '@/constants/svg/netlify.svg';
// import Nike from '@/constants/svg/nike.svg';
// import Figma from '@/constants/svg/figma.svg';
// import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-xl mx-auto`)}>
      <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-xl`)}>kenmaro.about.me</p>
    </div>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h2 className={tw(`font-sans font-bold text-3xl md:text-5xl lg:text-5xl text-center leading-snug text-gray-800`)}>
        ねだるな、勝ち取れ
      </h2>
      <h2
        className={tw(
          `font-sans font-bold text-3xl md:text-5xl lg:text-5xl text-center leading-snug text-gray-800 mt-10`,
        )}
      >
        さすれば与えられん
      </h2>
      {/* <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div> */}
    </div>
    {/* <div className={tw(`h-auto flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Lead Developer of ...</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <div className={tw(`flex items-center justify-center max-w-xl mx-auto`)}>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              <a href="https://liff.line.me/1645278921-kWRPP32q/904siiki/profile/img?accountId=904siiki">
                Nomikai-Kanji
              </a>
            </p>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              <a href="https://apps.apple.com/jp/app/yorimichiapp/id1596625712">YorimichiApp</a>
            </p>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              <a href="https://protohub.tech">Protohub</a>
            </p>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              <a href="https://diving-ikungo.com">Diving-Ikungo</a>
            </p>
          </div>
        </div>
        <div className={tw(`mt-20 w-full`)}>
          <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Interested in ...</p>
          <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              Mobile App Dev
            </p>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              Secure Computing
            </p>
            <p
              className={tw(`p-10 mt-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}
            >
              Hackathon
            </p>
          </div>
        </div>
      </div>
    </div> */}
  </header>
);

export default Header;
