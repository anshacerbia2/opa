import type { ISidebarMenuItem } from "../models/siedbar.model";

export const sidebarMenuLists: ISidebarMenuItem[] = [
  {
    linkTo: "",
    linkTitle: "Home",
    subMenu: [],
    svg: {
      paths: [
        {
          data: "M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
  {
    linkTo: "javascript:void(0)",
    linkTitle: "Search",
    subMenu: [
      {
        linkTo: "",
        linkTitle: "Flight",
      },
      {
        linkTo: "search-pnr",
        linkTitle: "PNR",
      },
      {
        linkTo: "",
        linkTitle: "Group PNR",
      },
    ],
    svg: {
      paths: [
        {
          data: "M12 11V14M12 14V17M12 14H15M12 14H9M6 7H18M8 5H16M6 9H18C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9Z",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
  {
    linkTo: "javascript:void(0)",
    linkTitle: "Memo",
    subMenu: [
      {
        linkTo: "",
        linkTitle: "GDM",
      },
      {
        linkTo: "",
        linkTitle: "GCM",
      },
      {
        linkTo: "",
        linkTitle: "GCM Airline",
      },
    ],
    svg: {
      paths: [
        {
          data: "M9.00004 5H17C17.5523 5 18 5.44772 18 6V19C18 19.5523 17.5523 20 17 20H7.00004C6.44776 20 6.00004 19.5523 6.00004 19V11M9.00004 5L9 9C9 10.1046 8.10457 11 7 11C5.89543 11 5 10.1046 5 9V5M9.00004 5C9.00004 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V9M11 9H15M10 12H15M9.00004 15H15",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
  {
    linkTo: "javascript:void(0)",
    linkTitle: "Report",
    subMenu: [
      {
        linkTo: "",
        linkTitle: "Umroh Konsorsium",
      },
      {
        linkTo: "",
        linkTitle: "Gerai",
      },
      {
        linkTo: "",
        linkTitle: "General Report",
      },
      {
        linkTo: "",
        linkTitle: "Call Center",
      },
      {
        linkTo: "",
        linkTitle: "Shopee Report",
      },
    ],
    svg: {
      paths: [
        {
          data: "M8 10H10L13 14H16M13 10H16M7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5Z",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
  {
    linkTo: "javascript:void(0)",
    linkTitle: "Transactions",
    subMenu: [
      {
        linkTo: "",
        linkTitle: "Ticketing",
      },
      {
        linkTo: "",
        linkTitle: "Deposits",
      },
      {
        linkTo: "",
        linkTitle: "Void",
      },
      {
        linkTo: "",
        linkTitle: "Billing",
      },
      {
        linkTo: "",
        linkTitle: "Direct Refund",
      },
    ],
    svg: {
      paths: [
        {
          data: "M9 15H15M6.86852 21H17.1315C17.9302 21 18.4066 20.1099 17.9635 19.4453L17.2969 18.4453C17.1114 18.1671 16.7992 18 16.4648 18H7.53518C7.20083 18 6.8886 18.1671 6.70313 18.4453L6.03647 19.4453C5.59343 20.1099 6.06982 21 6.86852 21ZM8 7H16C16.5523 7 17 7.44772 17 8V11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11V8C7 7.44772 7.44772 7 8 7ZM7 18H17C18.1046 18 19 17.1046 19 16V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6V16C5 17.1046 5.89543 18 7 18Z",
          stroke: "#fff",
          strokeLinecap: "round",
        },
      ],
    },
  },
  {
    linkTo: "master",
    linkTitle: "Master Data",
    subMenu: [
      {
        linkTo: "master/organization",
        linkTitle: "Organization",
      },
      {
        linkTo: "",
        linkTitle: "Agent Credential (1G / 1S)",
      },
      {
        linkTo: "master/organization-agreement",
        linkTitle: "Organization Agreement",
      },
      {
        linkTo: "",
        linkTitle: "Agent Credential (1A)",
      },
      {
        linkTo: "master/organization-dtu-account",
        linkTitle: "Organization DTU Account",
      },
      {
        linkTo: "",
        linkTitle: "BIN Setting",
      },
      {
        linkTo: "",
        linkTitle: "Flight Duration Deposit",
      },
      {
        linkTo: "",
        linkTitle: "System Parameter",
      },
      {
        linkTo: "",
        linkTitle: "Pricing Umroh HB",
      },
      {
        linkTo: "",
        linkTitle: "API Credential",
      },
    ],
    svg: {
      paths: [
        {
          data: "M10.4 5.6C10.4 4.84575 10.4 4.46863 10.6343 4.23431C10.8686 4 11.2458 4 12 4C12.7542 4 13.1314 4 13.3657 4.23431C13.6 4.46863 13.6 4.84575 13.6 5.6V6.6319C13.9725 6.74275 14.3287 6.8913 14.6642 7.07314L15.3942 6.34315C15.9275 5.80982 16.1942 5.54315 16.5256 5.54315C16.8569 5.54315 17.1236 5.80982 17.6569 6.34315C18.1903 6.87649 18.4569 7.14315 18.4569 7.47452C18.4569 7.80589 18.1903 8.07256 17.6569 8.60589L16.9269 9.33591C17.1087 9.67142 17.2573 10.0276 17.3681 10.4H18.4C19.1542 10.4 19.5314 10.4 19.7657 10.6343C20 10.8686 20 11.2458 20 12C20 12.7542 20 13.1314 19.7657 13.3657C19.5314 13.6 19.1542 13.6 18.4 13.6H17.3681C17.2573 13.9724 17.1087 14.3286 16.9269 14.6641L17.6569 15.3941C18.1902 15.9275 18.4569 16.1941 18.4569 16.5255C18.4569 16.8569 18.1902 17.1235 17.6569 17.6569C17.1236 18.1902 16.8569 18.4569 16.5255 18.4569C16.1942 18.4569 15.9275 18.1902 15.3942 17.6569L14.6642 16.9269C14.3286 17.1087 13.9724 17.2573 13.6 17.3681V18.4C13.6 19.1542 13.6 19.5314 13.3657 19.7657C13.1314 20 12.7542 20 12 20C11.2458 20 10.8686 20 10.6343 19.7657C10.4 19.5314 10.4 19.1542 10.4 18.4V17.3681C10.0276 17.2573 9.67142 17.1087 9.33591 16.9269L8.60598 17.6569C8.07265 18.1902 7.80598 18.4569 7.47461 18.4569C7.14324 18.4569 6.87657 18.1902 6.34324 17.6569C5.80991 17.1235 5.54324 16.8569 5.54324 16.5255C5.54324 16.1941 5.80991 15.9275 6.34324 15.3941L7.07314 14.6642C6.8913 14.3287 6.74275 13.9725 6.6319 13.6H5.6C4.84575 13.6 4.46863 13.6 4.23431 13.3657C4 13.1314 4 12.7542 4 12C4 11.2458 4 10.8686 4.23431 10.6343C4.46863 10.4 4.84575 10.4 5.6 10.4H6.6319C6.74275 10.0276 6.8913 9.67135 7.07312 9.33581L6.3432 8.60589C5.80987 8.07256 5.5432 7.80589 5.5432 7.47452C5.5432 7.14315 5.80987 6.87648 6.3432 6.34315C6.87654 5.80982 7.1432 5.54315 7.47457 5.54315C7.80594 5.54315 8.07261 5.80982 8.60594 6.34315L9.33588 7.07308C9.6714 6.89128 10.0276 6.74274 10.4 6.6319V5.6Z",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        {
          data: "M14.4 12C14.4 13.3255 13.3255 14.4 12 14.4C10.6745 14.4 9.6 13.3255 9.6 12C9.6 10.6745 10.6745 9.6 12 9.6C13.3255 9.6 14.4 10.6745 14.4 12Z",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
  {
    linkTo: "javascript:void(0)",
    linkTitle: "Promo Management",
    subMenu: [
      {
        linkTo: "",
        linkTitle: "Card Promo",
      },
      {
        linkTo: "",
        linkTitle: "Budget Promo",
      },
      {
        linkTo: "",
        linkTitle: "Voucher Group",
      },
      {
        linkTo: "",
        linkTitle: "Card Promo",
      },
      {
        linkTo: "",
        linkTitle: "BIN Promo",
      },
      {
        linkTo: "",
        linkTitle: "Card Promo Report",
      },
      {
        linkTo: "",
        linkTitle: "Voucher Budget",
      },
    ],
    svg: {
      paths: [
        {
          data: "M11 13L15.4564 8.5M11 13L6.38202 9.57695C5.7407 9.07229 5.94107 8.06115 6.72742 7.834L20 4L17.117 15.9189C16.9651 16.6489 16.0892 16.9637 15.5 16.5L13.5 15M11 13V18L13.5 15M11 13L13.5 15M7 20L9 18M4 19L8.5 14.5M4 15L6.5 12.5",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
  {
    linkTo: "javascript:void(0)",
    linkTitle: "User Management",
    subMenu: [
      {
        linkTo: "",
        linkTitle: "User Management",
      },
      {
        linkTo: "",
        linkTitle: "Unlock User",
      },
    ],
    svg: {
      paths: [
        {
          data: "M17.5 18H18.7687C19.2035 18 19.4209 18 19.5817 17.9473C20.1489 17.7612 20.5308 17.1231 20.498 16.4163C20.4887 16.216 20.42 15.9676 20.2825 15.4708C20.168 15.0574 20.1108 14.8507 20.0324 14.6767C19.761 14.0746 19.2766 13.6542 18.7165 13.5346C18.5546 13.5 18.3737 13.5 18.0118 13.5L15.5 13.5346M14.6899 11.6996C15.0858 11.892 15.5303 12 16 12C17.6569 12 19 10.6569 19 9C19 7.34315 17.6569 6 16 6C15.7295 6 15.4674 6.0358 15.2181 6.10291M13.5 8C13.5 10.2091 11.7091 12 9.5 12C7.29086 12 5.5 10.2091 5.5 8C5.5 5.79086 7.29086 4 9.5 4C11.7091 4 13.5 5.79086 13.5 8ZM6.81765 14H12.1824C12.6649 14 12.9061 14 13.1219 14.0461C13.8688 14.2056 14.5147 14.7661 14.8765 15.569C14.9811 15.8009 15.0574 16.0765 15.21 16.6278C15.3933 17.2901 15.485 17.6213 15.4974 17.8884C15.5411 18.8308 15.0318 19.6817 14.2756 19.9297C14.0613 20 13.7714 20 13.1916 20H5.80844C5.22864 20 4.93875 20 4.72441 19.9297C3.96818 19.6817 3.45888 18.8308 3.50261 17.8884C3.51501 17.6213 3.60668 17.2901 3.79003 16.6278C3.94262 16.0765 4.01891 15.8009 4.12346 15.569C4.4853 14.7661 5.13116 14.2056 5.87806 14.0461C6.09387 14 6.33513 14 6.81765 14Z",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
      ],
    },
  },
];
