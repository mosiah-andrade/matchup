import { Suspense } from "react";
import Navbar from "./components/navebar";
import Sidebar from "./components/sidebar";
import MobileNav from "./components/MobileNav";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)] min-h-0">
        <div className="hidden lg:block">
          <Suspense fallback={<aside className="h-full w-[270px] shrink-0 border-r border-slate-200 bg-white" />}>
            <Sidebar />
          </Suspense>
        </div>
        <main className="min-w-0 flex-1 overflow-auto pb-14 lg:pb-0">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
