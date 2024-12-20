import type { MarketingConfig } from "@hub/types";
import { HomeTestimonialsList } from "./testimonials-list";

interface HomeTestimonialsSectionProps {
  marketingConfig?: MarketingConfig;
}
export function HomeTestimonialsSection({
  marketingConfig = {
    mainTestimonials: [
      {
        authorName: "",
        description: "",
        companyName: "",
      },
    ],
  },
}: HomeTestimonialsSectionProps): JSX.Element {
  return (
    <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:pb-12 lg:pb-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Testimonials
        </h2>
      </div>
      <HomeTestimonialsList items={marketingConfig.mainTestimonials} />
    </section>
  );
}
