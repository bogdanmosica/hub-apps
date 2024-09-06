import db from '@prisma/database';
import { siteConfig } from './site';

export const authConfig = {
  productName: siteConfig.name,
  config: {
    providers: [],
  },
  db,
};
