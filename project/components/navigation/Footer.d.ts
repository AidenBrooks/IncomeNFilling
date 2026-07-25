import * as React from 'react';
export interface FooterLink{label:string;href?:string;}
export interface FooterColumn{title:string;links:FooterLink[];}
export interface FooterContact{phone:string;email:string;region:string;}
export interface FooterProps{
brandName?:string;
tagline?:string;
columns?:FooterColumn[];
contact?:FooterContact;
year?:number;
}
export declare function Footer(props:FooterProps):JSX.Element;
