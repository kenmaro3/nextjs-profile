import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const News = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Press Release</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
              <a href="https://pr-free.jp/2021/45712/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://pr-free.jp/wp-content/uploads/2021/11/20211124_1417top1.png"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2021-11-25</div>
                <h4>YorimichiApp／【iOSアプリ】SNS機能を有したナビゲーションアプリ「YorimichiApp」公式リリース</h4>
                <div>Press Release</div>
              </a>
            </div>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Publish</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
              <a href="https://arxiv.org/abs/2012.13552" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://thumb.ac-illust.com/38/383f761353919dd2f1216cded23942a2_t.jpeg"
                  loading="lazy"
                  width="250"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2020-12-25</div>
                <h4>Neural Network Training With Homomorphic Encryption</h4>
                <div>Technical Paper</div>
              </a>
            </div>
          </div>

          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 hover:scale-105`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Interview</div>
            </div>
            <div className={tw(`leading-loose text-gray-500`)}>
              <a
                href="https://www.innovation-osaka.jp/ja/hatarakuhito/hatarakuhito-9794/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.innovation-osaka.jp/ja/wp-content/themes/ena2022/img/hatarakuhito/banner4.jpg"
                  loading="lazy"
                  width="505"
                  alt="Qiita＠ Kenmaro"
                />
                <div>2021-08-26</div>
                <h4>OSAKA INNOVATION HUB</h4>
                <div>Interview</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default News;
