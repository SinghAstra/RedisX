import { MainNavItem, SidebarNavItem } from "@/interfaces/nav";

export interface NavLinks {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navLinks: NavLinks = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Basics",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Counter API",
          href: "/docs/counter-api",
          label: "Code",
          items: [],
        },
      ],
    },
  ],
};
