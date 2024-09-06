import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import '@hub/shadcn-ui/color-purple.css';

import './globals.css';

import { Toaster } from '@hub/shadcn-ui/ui/toaster';
import { cn } from '@hub/utils';
import { Analytics } from '@hub/shadcn-ui/analytics';
import { TailwindIndicator } from '@hub/shadcn-ui/tailwind-indicator';
import { ThemeProvider } from '@hub/shadcn-ui/theme-provider';
//import MainStoreContextProvider from '../contexts/main-store';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Font files can be collocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
