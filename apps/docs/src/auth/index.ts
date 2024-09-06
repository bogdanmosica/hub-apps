import { authConfig } from '@/config/auth';
import { nextAuthHandlers } from '@hub/next-auth';

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = nextAuthHandlers(authConfig);
