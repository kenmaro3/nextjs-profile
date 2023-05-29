import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import News from '@/components/news';
import { tw } from 'twind';

import React, { ReactElement } from 'react';

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

export default function Home() {
  return (
    <Page>
      <NextSeo title="kenmaro" description="kenmaro's engineer portfolio" />
      <main>
        <div className={tw(`w-full relative`)}>
          <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)} />
          <div className={tw(`max-w-7xl mx-4 lg:mx-auto lg:pt-8`)}>
            <p className={tw(`lg:text-4xl text-white text-gray-800 text-xl mt-8 font-bold`)}>About</p>
            <ColoredLine />
            <div className={tw(`mx-auto pt-20`)}>
              <div className={tw(`w-full flex flex-wrap justify-around`)}>
                <div
                  className={tw(
                    `xl:w-1/4 sm:w-6/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
                  )}
                >
                  <div className={tw(`p-4 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                    <div className={tw(`flex flex-col justify-center items-center`)}>
                      <img
                        className={tw(`h-48 w-48`)}
                        src="https://pbs.twimg.com/profile_images/1646290921103962113/pCinLyv5_400x400.jpg"
                        alt="logo"
                        width={100}
                        height={100}
                      />
                      <div className={tw(`text-3xl text-gray-800 font-medium pt-4`)}>kenmaro</div>
                      <div className={tw(`text-base pt-4 text-gray-500`)}>Software Engineer</div>
                      <div className={tw(`text-base pt-4 text-gray-500`)}>AI Engineer</div>
                    </div>
                  </div>
                </div>

                <div
                  className={tw(
                    `xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
                  )}
                >
                  <div className={tw(`p-4 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                    <div className={tw(`flex flex-col justify-center pl-20`)}>
                      <div className={tw(`flex flex-col`)}>
                        <div className={tw(`text-2xl pt-4 text-gray-800 font-semibold`)}>Work</div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a href="https://www.eaglys.co.jp/" target="_blank" rel="noopener noreferrer">
                            <div className={tw(`text-lg`)}>EAGLYS Inc</div>
                            <div className={tw(`text-sm`)}>Research Engineer (R&D Manager)</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://www.waseda.jp/inst/cro/other/2020/03/29/4213/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>Waseda University</div>
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
                            <div className={tw(`text-lg`)}>Stony Brook University</div>
                            <div className={tw(`text-sm`)}>Master of Arts (Physics & Astronomy) (2018)</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://www.stonybrook.edu/commcms/grad-physics-astronomy/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>熊本大学</div>
                            <div className={tw(`text-sm`)}>理学部理学科 (2015)</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={tw(
                    `xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
                  )}
                >
                  <div className={tw(`p-4 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                    <div className={tw(`flex flex-col justify-center pl-20`)}>
                      <div className={tw(`flex flex-col`)}>
                        <div className={tw(`text-2xl pt-4 text-gray-800 font-semibold`)}>Hackathon</div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a href="https://hackday.yahoo.co.jp/" target="_blank" rel="noopener noreferrer">
                            <div className={tw(`text-lg`)}>Yahoo! JAPAN Digital Hack Day 2021</div>
                            <div className={tw(`text-sm`)}>Developer</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://about.yahoo.co.jp/pr/release/2021/01/13b/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>Yahoo! JAPAN Hack Day 2021</div>
                            <div className={tw(`text-sm`)}>Judge</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://www.businessinsider.jp/post-202846"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>秘密計算ハッカソン</div>
                            <div className={tw(`text-sm`)}>Organizer</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://routexstartups.com/events/epsonhacktrek/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>Epson Hack Trek</div>
                            <div className={tw(`text-sm`)}>Developer</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={tw(
                    `xl:w-1/4 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                        xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0`,
                  )}
                >
                  <div className={tw(`p-4 w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                    <div className={tw(`flex flex-col justify-center pl-20`)}>
                      <div className={tw(`flex flex-col`)}>
                        <div className={tw(`text-2xl pt-4 text-gray-800 font-semibold`)}>Hackathon</div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a href="https://hackday.yahoo.co.jp/" target="_blank" rel="noopener noreferrer">
                            <div className={tw(`text-lg`)}>Yahoo! JAPAN Digital Hack Day 2021</div>
                            <div className={tw(`text-sm`)}>Developer</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://about.yahoo.co.jp/pr/release/2021/01/13b/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>Yahoo! JAPAN Hack Day 2021</div>
                            <div className={tw(`text-sm`)}>Judge</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://www.businessinsider.jp/post-202846"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>秘密計算ハッカソン</div>
                            <div className={tw(`text-sm`)}>Organizer</div>
                          </a>
                        </div>
                        <div className={tw(`text-gray-600 pt-4 cursor-pointer hover:scale-105`)}>
                          <a
                            href="https://routexstartups.com/events/epsonhacktrek/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className={tw(`text-lg`)}>Epson Hack Trek</div>
                            <div className={tw(`text-sm`)}>Developer</div>
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
        <News />
      </main>
      <Footer />
    </Page>
  );
}
