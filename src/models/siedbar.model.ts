export interface ISidebarProps {
  isExpanded: boolean;
  toggleExpand: () => void;
}

export interface ISvgProps {
  className?: string;
  viewBox?: string;
  fill?: string;
  paths?: {
    className?: string | undefined;
    data: string;
    stroke?: string | undefined;
    strokeLinecap?: "round" | "inherit" | "butt" | "square";
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel";
  }[];
}

export interface ISidebarMenuItem {
  linkTo: string;
  linkTitle: string;
  subMenu: { linkTo: string; linkTitle: string }[];
  svg: ISvgProps;
}
