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
                      <a href="https://cellid.com/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Cellid Inc(2024-current)</div>
                        <div className={tw(`text-sm`)}>Software Department Manager</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://www.eaglys.co.jp/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>EAGLYS Inc(2018-2024)</div>
                        <div className={tw(`text-sm`)}>Research Engineer (R&D Manager)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://www.waseda.jp/inst/cro/other/2020/03/29/4213/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Waseda University(2019-current)</div>
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
                        <div className={tw(`text-md`)}>Stony Brook University(2015-2018)</div>
                        <div className={tw(`text-sm`)}>Master of Arts (Physics & Astronomy)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://www.leeds.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>University of Leeds(2012-2013)</div>
                        <div className={tw(`text-sm`)}>Physics Exchange Student</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="http://www.sci.kumamoto-u.ac.jp/index-j.html" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Kumamoto University (熊本大学)</div>
                        <div className={tw(`text-sm`)}>Science Dept (理学部理学科) (2011-2015)</div>
                      </a>
                    </div>
                  </div>
                  <div className={tw(`flex flex-col mt-10`)}>
                    <div className={tw(`text-2xl text-gray-800 font-semibold`)}>Language</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <div className={tw(`text-md`)}>Chinese (HSK4級)</div>
                      <div className={tw(`text-sm`)}>2023-03</div>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <div className={tw(`text-md`)}>English (TOEFL iBT 94)</div>
                      <div className={tw(`text-sm`)}>2014</div>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <div className={tw(`text-md`)}>Japanese (Native)</div>
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
                      <a href="https://asciistartup.connpass.com/event/323458/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>PLATEAU Hack Challenge 2024 in Tokyo (2024)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://lu.ma/difun.hackathon" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Virtual Influener Hackathon (2023)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://powerplatformconf.connpass.com/event/300462/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Power Platform Hackathon (2023)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://kuso-app.connpass.com/event/301167/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Kuso App Hackathon 2023</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://www.digital.go.jp/policies/legal-practice/hackathon" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Law API Hackathon by Digital Ministry of Japan(2023)</div>
                        <div className={tw(`text-sm`)}>Developer (Won Prize)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://hackday.yahoo.co.jp/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Yahoo! JAPAN Digital Hack Day(2022)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://tokyo.akindo.io/" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Tokyo Web3 Hackathon (2022)</div>
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
                        <div className={tw(`text-md`)}>IDASH (Secure Computing Competition) (2021)</div>
                        <div className={tw(`text-sm`)}>Developer</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a href="https://www.businessinsider.jp/post-202846" target="_blank" rel="noopener noreferrer">
                        <div className={tw(`text-md`)}>Secure Computing Hackathon (2019)</div>
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
                    <div className={tw(`text-2xl text-gray-800 font-semibold`)}>Talk</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://www.youtube.com/live/NFdHFmavrVk?si=u8Ef5taXDydIwPvD&t=5070"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Plateau Hack Challenge (2024)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://www.youtube.com/live/A4r0zRADrKE?si=mD8GcfNDJDdAkUDe&t=1491"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Line Developer Community (2023)</div>
                      </a>
                    </div>
                  </div>
                  <div className={tw(`flex flex-col`)}>
                    <div className={tw(`text-2xl mt-10 text-gray-800 font-semibold`)}>Publication</div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://arxiv.org/abs/2012.13552"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Neural Network Training With Homomorphic Encryption (2020)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://eprint.iacr.org/2024/744"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>An NVMe-based Secure Computing Platform with FPGA-based TFHE Accelerator (2024)</div>
                      </a>
                    </div>
                    <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                      <a
                        href="https://accelconf.web.cern.ch/fel2017/doi/JACoW-FEL2017-WEP025.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={tw(`text-md`)}>Emittance Measurements from SRF Gun in CeC Accelerator (2018)</div>
                      </a>
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
