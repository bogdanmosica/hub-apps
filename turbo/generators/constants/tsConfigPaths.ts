import { CustomActionsPlopTypes } from './PlopTypes/CustomActionsPlopTypes';

const paths = {
  '@/config/*': ['./config/*'],
  '@/assets/*': ['./assets/*'],
  '@/app/*': ['./app/*'],
  '@/actions/*': ['./actions/*'],
  '@/auth': ['./auth/index.ts'],
};

export const tsConfigPaths = {
  type: CustomActionsPlopTypes.AddTsConfigPaths,
  baseUrl: './src',
  paths,
};
