import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import About from '@/components/about';
import News from '@/components/news';

export default function Home() {
  return (
    <Page>
      <NextSeo title="kenmaro" description="kenmaro's engineer portfolio" />
      <Header />
      <About />
      <News />
      <main>
        {/* <VideoSection /> */}
        <ListSection />
        <CasesSection />
        <FeatureSection />
        {/* <SocialProof /> */}
        {/* <PricingTable /> */}
      </main>
      <Footer />
    </Page>
  );
}
