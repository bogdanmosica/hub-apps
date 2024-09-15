import { DashboardConfig } from '@hub/types';
import { MainNav } from '@hub/shadcn-ui/main-nav';
import { UserAccountNav } from '@hub/shadcn-ui/user-account-nav';
import { dashboardConfig } from '../../../config/dashboard';

interface EditorProps {
  children?: React.ReactNode;
}

export default function EditorLayout({ children }: EditorProps) {
  return (
    <div className='flex h-screen flex-col md:space-y-6'>
      <header className='hidden m3ETY2d:block sticky top-0 z-40 border-b bg-background'>
        <div className='container flex h-16 items-center justify-between py-4'>
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav />
        </div>
      </header>
      <div className='md:container grid flex-1 gap-12 md:grid-cols-[1fr]'>
        {/* <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside> */}
        <main className='flex w-full h-full flex-1 flex-col overflow-hidden'>
          {children}
        </main>
      </div>
    </div>
  );
}
