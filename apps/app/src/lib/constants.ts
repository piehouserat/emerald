import {
  HomeIcon,
  NotebookIcon,
  StoreIcon,
  UserIcon,
  type LucideIcon,
} from "lucide-react";

export interface AppConfig {
  companyName: string;
  appName: string;
}

export const appConfig: AppConfig = {
  companyName: "GEM",
  appName: "Emerald",
};

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: {
    title: string;
    url: string;
  }[];
};

export const navData: NavItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: HomeIcon,
    items: [],
  },
  {
    title: "Jobs",
    url: "/jobs",
    icon: NotebookIcon,
    items: [],
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: StoreIcon,
    items: [],
  },
  {
    title: "Users",
    url: "/users",
    icon: UserIcon,
    items: [],
  },
];
