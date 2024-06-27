interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Committee",
    link: "/committee",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Topics",
    link: "/topics",
    has_dropdown: false,
  },

  {
    id: 4,
    title: "Programme",
    link: "/programme",
    has_dropdown: false,
  },

  {
    id: 6,
    title: "Conferences",
    link: "",
    has_dropdown: true,
    sub_menus: [
      {
        title: "TIM'14",
        link: "https://sites.google.com/view/labotimfsbm/tim14?authuser=0",
      },
      {
        title: "TIM'15",
        link: "https://sites.google.com/view/labotimfsbm/tim15?authuser=0",
      },
      {
        title: "TIM'16",
        link: "https://sites.google.com/view/labotimfsbm/tim16?authuser=0",
      },
    ],
  },
];
export default menu_data;
