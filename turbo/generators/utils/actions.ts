import generatePlopActionsArray from "./generateActions";

export const dashboardActions = [
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/layout.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/layout.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/loading.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/loading.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/settings/loading.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/settings/loading.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/settings/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/settings/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/billing/loading.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/billing/loading.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(dashboard)/dashboard/billing/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/dashboard/billing/page.tsx.hbs",
  },
];

export const authActions = [
  {
    type: "add",
    path: "apps/{{name}}/src/app/(auth)/register/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/auth/register.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(auth)/login/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/auth/login.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(auth)/layout.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/auth/layout.tsx.hbs",
  },
  // {
  //   type: "add",
  //   path: "../../apps/{{name}}/src/app/(auth)/layout.tsx",
  //skipIfExists: true, //
  //templateFile: "templates/pages/auth/layout.tsx.hbs",
  // },
  // {
  //   type: "append",
  //   path: "package.json",
  //   pattern: /"exports": {(?<insertion>)/g,
  //   template: '    "./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",',
  // },
];

export const configActions = [
  {
    type: "add",
    path: "apps/{{name}}/src/app/config/dashboard.ts",
    skipIfExists: true,
    templateFile: "templates/pages/config/dashboard.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/config/docs.ts",
    skipIfExists: true,
    templateFile: "templates/pages/config/docs.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/config/marketing.ts",
    skipIfExists: true,
    templateFile: "templates/pages/config/marketing.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/config/site.ts",
    skipIfExists: true,
    templateFile: "templates/pages/config/site.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/config/subscriptions.ts",
    skipIfExists: true,
    templateFile: "templates/pages/config/subscriptions.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/.env.example",
    skipIfExists: true,
    templateFile: "templates/pages/config/env-example.hbs",
  },
];

export const marketingActions = [
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/marketing/layout.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/layout.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/marketing/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/pricing/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/pricing/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/[...slug]/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/[...slug]/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/blog/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/blog/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/blog/[...slug]/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/blog/[...slug]/page.tsx.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/(marketing)/pricing/page.tsx",
    skipIfExists: true,
    templateFile: "templates/pages/marketing/pricing/page.tsx.hbs",
  },
];

export const apiActions = [
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/auth/[...nextauth]/_route.ts",
    skipIfExists: true,
    templateFile: "templates/api/auth/[...nextauth]/_route.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/og/route.ts",
    skipIfExists: true,
    templateFile: "templates/api/og/route.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/posts/[postId]/route.ts",
    skipIfExists: true,
    templateFile: "templates/api/posts/[postId]/route.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/posts/route.ts",
    skipIfExists: true,
    templateFile: "templates/api/posts/route.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/users/[userId]/route.ts",
    skipIfExists: true,
    templateFile: "templates/api/users/[userId]/route.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/users/stripe/route.ts",
    skipIfExists: true,
    templateFile: "templates/api/users/stripe/route.ts.hbs",
  },
  {
    type: "add",
    path: "apps/{{name}}/src/app/api/webhooks/stripe/route.ts",
    skipIfExists: true,
    templateFile: "templates/api/webhooks/stripe/route.ts.hbs",
  },
];
