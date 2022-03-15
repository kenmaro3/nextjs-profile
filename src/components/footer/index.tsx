import { tw } from 'twind';
import Button from '@/components/button';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
const resourceLinks = [
  `Get started`,
  `Guides`,
  `Tools`,
  `Case studies`,
  `Solutions`,
  `FAQs`,
  `Help Center`,
  `Training`,
  `Other resources`,
];

const Footer = () => (
  <section className={tw(`bg-gray-50 lg:py-20 pt-14 overflow-hidden`)}>
    <div className={tw(`mb-2 text-center`)}>
      <h2 className={tw(`lg:text-2xl text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>
        Social Media
      </h2>
      {/* <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform your business
        </p> */}
    </div>
    <div className={tw(`flex flex-wrap -mx-8 items-center justify-center`)}>
      <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
        {/* <Aws className={tw(`m-12 mb-8`)} width={120} />
            <Netlify className={tw(`m-12`)} width={140} />
            <Nike className={tw(`m-12`)} width={140} />
            <Figma className={tw(`m-12`)} width={140} /> */}
        <div className={tw(`p-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}>
          <a href="https://twitter.com/kenmaro4" target="_blank" rel="noopener noreferrer">
            <div className={tw(`flex flex-col items-center`)}>
              <AiFillTwitterCircle size={40} color="#00acee" />
              <div className={tw(`pt-4 font-medium`)}>Twitter</div>
            </div>
          </a>
        </div>
        <div className={tw(`p-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}>
          <a href="https://github.com/kenmaro3" target="_blank" rel="noopener noreferrer">
            <div className={tw(`flex flex-col items-center`)}>
              <FaGithub size={40} color="#4078c0" />
              <div className={tw(`pt-4 font-medium`)}>Github</div>
            </div>
          </a>
        </div>
        <div className={tw(`p-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}>
          <a href="https://www.youtube.com/channel/UC6HgW2HTs720RPnohL1L-uQ" target="_blank" rel="noopener noreferrer">
            <div className={tw(`flex flex-col items-center`)}>
              <AiFillYoutube size={40} color="#c4302b" />
              <div className={tw(`pt-4 font-medium`)}>Youtube</div>
            </div>
          </a>
        </div>
        <div className={tw(`p-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}>
          <a href="https://qiita.com/kenmaro" target="_blank" rel="noopener noreferrer">
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/qiita-logo.png" alt="qiita_logo" width="40px" />
              <div className={tw(`pt-4 font-medium`)}>Qiita</div>
            </div>
          </a>
        </div>
        <div className={tw(`p-10 text-gray-500 text-center text-xl lg:text-2xl cursor-pointer hover:scale-105`)}>
          <a href="https://note.com/kenmaro" target="_blank" rel="noopener noreferrer">
            <div className={tw(`flex flex-col items-center`)}>
              <img src="/images/note-logo.png" alt="note_logo" width="60px" />
              <div className={tw(`pt-4 font-medium`)}>note</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
