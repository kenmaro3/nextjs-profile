import { tw } from 'twind';
import Button from '@/components/button';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import News from '@/components/news';

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
const ColoredLine = () => (
  <hr
    style={{
      color: `black`,
      backgroundColor: `black`,
      height: 2,
      marginTop: 20,
    }}
  />
);

const About = () => (
  <section className={tw(`bg-gray-50 lg:py-4 overflow-hidden`)}>
    <div className={tw(`w-full relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)} />
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto lg:pt-8`)}>
        <p className={tw(`lg:text-4xl text-gray-600 text-xl mt-8 font-bold`)}>About</p>
        <div className={tw(`mx-auto pt-20`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            <div
              className={tw(
                `px-2 xl:w-1/4 sm:w-6/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
              )}
            >
              <div className={tw(`shadow py-8 pb-10 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative rounded-lg`)}>
                <div className={tw(`flex flex-col justify-center items-center`)}>
                  <img
                    className={tw(`h-32 w-32 rounded-full mb-4`)}
                    src="https://pbs.twimg.com/profile_images/1646290921103962113/pCinLyv5_400x400.jpg"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                  <div className={tw(`text-2xl text-gray-800 font-medium pt-4`)}>kenmaro</div>
                  <div className={tw(`text-base pt-4 text-gray-500`)}>Software Developer</div>
                </div>
              </div>
            </div>

            <div
              className={tw(
                `px-2 xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
              )}
            >
              <div className={tw(`shadow p-4 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative rounded-lg`)}>
                <div className={tw(`flex flex-col justify-center px-4 pt-2 pb-6`)}>
                  <div className={tw(`flex flex-col`)}>
                    <div className={tw(`text-2xl pt-4 text-gray-800 font-semibold`)}>Work</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://www.eaglys.co.jp/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>EAGLYS Inc</div>
                        <div className={tw(`text-sm`)}>Research Engineer (R&D Manager)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://www.waseda.jp/inst/cro/other/2020/03/29/4213/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Waseda University</div>
                        <div className={tw(`text-sm`)}>
                          Researcher @Global Consolidated Research <br />
                          Institute for Science Wisdom
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className={tw(`flex flex-col mt-10`)}>
                    <div className={tw(`text-2xl pt-4 text-gray-800 font-semibold`)}>Academic</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://www.stonybrook.edu/commcms/grad-physics-astronomy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Stony Brook University</div>
                        <div className={tw(`text-sm`)}>Master of Arts (Physics & Astronomy)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="http://www.sci.kumamoto-u.ac.jp/index-j.html" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>熊本大学</div>
                        <div className={tw(`text-sm`)}>理学部理学科 (2015)</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={tw(
                `px-2 xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
              )}
            >
              <div className={tw(`shadow	 p-8 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative rounded-lg`)}>
                <div className={tw(`flex flex-col justify-center px-4 py-1 pb-4`)}>
                  <div className={tw(`flex flex-col`)}>
                    <div className={tw(`text-2xl text-gray-800 font-semibold`)}>Hackathon</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://hackday.yahoo.co.jp/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Yahoo! JAPAN Digital Hack Day 2022</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://tokyo.akindo.io/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>東京ウェブ３ハッカソン(2022)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://hackday.yahoo.co.jp/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>YJ Digital Hack Day(2021)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://about.yahoo.co.jp/pr/release/2021/01/13b/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Yahoo! JAPAN Hack Day 2021</div>
                        <div className={tw(`text-sm`)}>Judge</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://qiita.com/kenmaro/items/1d4c2cab7f3ad9b90dc2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>IDASH (秘密計算国際コンペティション) (2021)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://www.businessinsider.jp/post-202846" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>秘密計算ハッカソン (2019)</div>
                        <div className={tw(`text-sm`)}>Organizer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://qiita.com/kenmaro/items/9831dc3720ae738c04b2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Epson Hack Trek (2019)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={tw(
                `px-2 xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
              )}
            >
              <div className={tw(`shadow	 p-8 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative rounded-lg`)}>
                <div className={tw(`flex flex-col justify-center px-4 py-1 pb-4`)}>
                  <div className={tw(`flex flex-col`)}>
                    <div className={tw(`text-2xl text-gray-800 font-semibold`)}>Language</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <div className={tw(`text-md`)}>中国語(HSK4級)</div>
                      <div className={tw(`text-sm`)}>2023-03</div>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <div className={tw(`text-md`)}>英語(TOEFL iBT 94)</div>
                      <div className={tw(`text-sm`)}>2014</div>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <div className={tw(`text-md`)}>日本語(母国語)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
