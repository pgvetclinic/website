'use client';

import useNavigationStore from '@/store/NavigationStore';

type SidebarOpenWrapperProps = {
  children: React.ReactNode;
};

export default function SidebarOpenWrapper({
  children,
}: SidebarOpenWrapperProps) {
  const isOpen = useNavigationStore((state) => state.isOpen);

  return isOpen ? null : <>{children}</>;
}
