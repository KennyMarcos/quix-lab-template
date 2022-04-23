export declare interface MenuList {

  id:string;
  title:string;
  icon?:string;
  route: string;
  subMenu?:MenuList[];
}
