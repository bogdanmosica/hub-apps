import { CustomActionsPlopTypes } from './PlopTypes/CustomActionsPlopTypes';

const dependencies = [
  '@hub/validations|*',
  '@prisma/database|*',
  '@hub/next-auth|*',
  '@hub/shadcn-ui|*',
  '@prisma/client|^5.17.0',
  '@vercel/og|^0.6.2',
];

const devDependencies = [
  '@prisma/nextjs-monorepo-workaround-plugin|^5.17.0',
  'prisma|^5.3.3',
];

export const packageJsonDependencies = {
  type: CustomActionsPlopTypes.AddDependencies,
  dependencies,
  devDependencies,
};
