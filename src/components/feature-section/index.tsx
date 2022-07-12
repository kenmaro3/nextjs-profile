import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`lg:text-2xl text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Blogs</h4>
          <p className={tw(`font-mono text-center font-medium text-sm text-gray-600 pt-6`)}>
            <p className={tw(`font-bold`)}>199</p> articles on Qiita
          </p>
          <p className={tw(`font-mono text-center font-medium text-sm text-gray-600 pt-6`)}>
            <p className={tw(`font-bold`)}>10</p> articles on note
          </p>
          {/* <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change the game
          </p> */}
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Secure Computing</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              <a href="https://qiita.com/kenmaro/items/a1d90a074d552b7bf886" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2021-12-27</div>
                <h4>秘密計算エンジニアを始めて３年が経った。</h4>
                <div>Qiita＠ kenmaro</div>
              </a>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Secure Computing</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              <a href="https://qiita.com/kenmaro/items/f2d4fb84833c308a4d29" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2019-11-06</div>
                <h4>最先端の秘密計算技術、格子暗号スタディロードマップを公開！！</h4>
                <div>Qiita＠ kenmaro</div>
              </a>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Machine Learning</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              <a href="https://qiita.com/kenmaro/items/008051dae0bf0ad718cb" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2019-11-06</div>
                <h4>ResNet なんて全く理解していないだけの人生だった(序)</h4>
                <div>Qiita＠ kenmaro</div>
              </a>
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>My Thoughts</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              <a href="https://note.com/kenmaro/n/n99bb7c1446fa" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://assets.st-note.com/production/uploads/images/73878349/rectangle_large_type_2_b731344c7fdf5f3696c499ab5703f1d4.png?width=800"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2022-01-21</div>
                <h4>ITスタートアップ企業で３年過ごして、習慣化してよかった仕事上のtipsを書き下してみる。</h4>
                <div>note@ kenmaro</div>
              </a>
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>My Thoughts</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              <a href="https://note.com/kenmaro/n/n3da4cde75a35" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://assets.st-note.com/production/uploads/images/73764102/rectangle_large_type_2_2d1870b00f0404d8e287544fa406b080.png?width=800"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2022-01-27</div>
                <h4>ハードだけどSDGsな働き方をしようじゃないか、という提案</h4>
                <div>note@ kenmaro</div>
              </a>
            </p>
          </div>
          <div
            className={tw(
              `w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8 hover:scale-105`,
            )}
          >
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>My Thoughts</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              <a href="https://note.com/kenmaro/n/n3da4cde75a35" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://assets.st-note.com/production/uploads/images/73763947/rectangle_large_type_2_239667040f0efbb70f42c3e8f3f86f10.png?width=800"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2022-01-25</div>
                <h4>Nstock 株式会社を設立しましたを読んで非常に感銘を受けたので感想文を書く。</h4>
                <div>note@ kenmaro</div>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
