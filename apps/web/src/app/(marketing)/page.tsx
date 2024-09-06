import { HomeFeaturesSection } from '@hub/shadcn-ui/home/features-section';
import { HomeHeroSection } from '@hub/shadcn-ui/home/hero-section';
import { HomeTestimonialsSection } from '@hub/shadcn-ui/home/testimonials-section';
import { siteConfig } from '../../config/site';
import { marketingConfig } from '../../config/marketing';

export default async function IndexPage() {
  return (
    <>
      <HomeHeroSection siteConfig={siteConfig} />
      <HomeFeaturesSection marketingConfig={marketingConfig} />
      <HomeTestimonialsSection marketingConfig={marketingConfig} />
    </>
  );
}
