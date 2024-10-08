import { Icons } from "../components/icons";

export type User = {
  __id: string | null;
  id: string | null;
  image: string | null;
  name: string | null;
};

export type CompositionType = {
  id: string;
  title: string;
  published?: string;
  createdAt: string;
};

export type MainFeaturesItem = {
  title: string;
  icon: React.ElementType;
  description: string;
  icon?: keyof typeof Icons;
};

export type MainTestimonialsItem = {
  authorName: string;
  companyName?: string;
  description: string;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  needAuth?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href?: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav?: MainNavItem[];
  mainFeatures?: MainFeaturesItem[];
  mainTestimonials?: MainTestimonialsItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number | undefined;
    isPro: boolean | "" | null;
  };

export type UserSignInSocial = "email" | "github" | "google" | "facebook";

export type SignInOptions = {
  email: string;
  redirect: boolean;
  callbackUrl: string | null;
};
