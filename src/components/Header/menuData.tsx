import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    titleKey: "Navigation.home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    titleKey: "Navigation.products",
    newTab: false,
    submenu: [
      {
        id: 21,
        titleKey: "Navigation.kidou",
        path: "/kidou",
        newTab: true,
      },
    ],
  },
  {
    id: 3,
    titleKey: "Navigation.about",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    titleKey: "Navigation.contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
