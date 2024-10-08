import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`lg:text-2xl text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Blogs</h4>
          <div className={tw(`font-mono text-center font-medium text-sm text-gray-600 pt-6`)}>
            <div className={tw(`font-bold`)}>281</div> articles on Qiita
          </div>
          <div className={tw(`font-mono text-center font-medium text-sm text-gray-600 pt-6`)}>
            <div className={tw(`font-bold`)}>48</div> articles on note
          </div>
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
            <div className={tw(`leading-loose text-gray-500`)}>
              <a href="https://qiita.com/kenmaro/items/74c3147ccb8c7ce7c60c" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2022-12-23</div>
                <h4>秘密計算エンジニアを始めて４年が経った。</h4>
                <div>Qiita＠ kenmaro</div>
              </a>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Secure Computing</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
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
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Machine Learning</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
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
            </div>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>My Thoughts</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
              <a href="https://note.com/kenmaro/n/ndfcc6bb1c384" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://assets.st-note.com/production/uploads/images/106373080/rectangle_large_type_2_74d264dc7ef4179981f45cfe36af98df.png?width=2000&height=2000&fit=bounds&quality=85"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2023-05-24</div>
                <h4>ChatGPTが誕生した今、コードを書けない(書かない）という言い訳は通用しない世の中になったと思う</h4>
                <div>note@ kenmaro</div>
              </a>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>My Thoughts</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
              <a href="https://note.com/kenmaro/n/na7911f63d98a" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://assets.st-note.com/production/uploads/images/104952470/rectangle_large_type_2_10130a0198886d259df6fa8c5fc0ec77.png?width=2000&height=2000&fit=bounds&quality=85"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2023-05-07</div>
                <h4>自分のDNAの中でマックスを出すために努力し継続していくというただそれだけの生き方</h4>
                <div>note@ kenmaro</div>
              </a>
            </div>
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
            <div className={tw(`leading-loose text-gray-500`)}>
              <a href="https://note.com/kenmaro/n/n05d0112e49f1" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://assets.st-note.com/production/uploads/images/99272462/rectangle_large_type_2_443de046971f7a9e1367fbbb442d5fc9.png?width=2000&height=2000&fit=bounds&quality=85"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2023-03-02</div>
                <h4>5年間働いて考えた、自己肯定感を高めるためのたった３つの方法</h4>
                <div>note@ kenmaro</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
