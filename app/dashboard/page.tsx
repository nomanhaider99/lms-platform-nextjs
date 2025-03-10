'use client'

import React, { Suspense } from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import Button from "@/components/Button"
import Create from "@/components/ui/Create"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Explore from "@/Explore"
import useTabStore from "@/store/tab"
import { useRouter, useSearchParams } from "next/navigation"
import MyCourses from '@/components/ui/MyCourses'

function DashboardContent() {
  const { mainTab, setMainTab } = useTabStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleTabChange = (tab: any) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`, { scroll: false });
    setMainTab(tab);
  };

  let body = <div></div>;

  if (mainTab === 'explore') {
    body = <Explore />;
  } else if (mainTab === 'my courses') {
    body = <MyCourses />
  } else if (mainTab === 'assignments') {
    body = <div>Assignments</div>;
  } else if (mainTab === 'certificates') {
    body = <div>Certificates</div>;
  } else if (mainTab === 'discussions') {
    body = <div>Discussions</div>;
  } else if (mainTab === 'profile') {
    body = <div>Profile</div>;
  } else if (mainTab === 'create') {
    body = <Create />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="w-full flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Button content="Create Course" onClick={() => handleTabChange('create')} />
          </div>
        </header>
        <div className="w-full flex flex-1 flex-col gap-4 pt-0">
          {body}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
