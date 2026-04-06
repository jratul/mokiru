export interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
}

export interface NavSection {
  id: string;
  label: string;
  icon?: string;
  items: NavItem[];
}
