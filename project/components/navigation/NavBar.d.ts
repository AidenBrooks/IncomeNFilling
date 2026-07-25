import * as React from 'react';
export interface NavItem{label:string;href?:string;active?:boolean;}
export interface NavBarProps{
logoSrc?:string;
brandName?:string;
tagline?:string;
items?:NavItem[];
phone?:string;
}
export declare function NavBar(props:NavBarProps):JSX.Element;
