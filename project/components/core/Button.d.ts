import * as React from 'react';
export interface ButtonProps{
children:React.ReactNode;
/** primary=gold fill, secondary=outline on dark, ghost=outline on light, command="[ bracket ]" terminal style */
variant?:'primary'|'secondary'|'ghost'|'command';
size?:'sm'|'md';
icon?:React.ReactNode;
disabled?:boolean;
onClick?:()=>void;
type?:'button'|'submit';
fullWidth?:boolean;
}
export declare function Button(props:ButtonProps):JSX.Element;
export interface CommandButtonProps{
children:React.ReactNode;
onClick?:()=>void;
disabled?:boolean;
href?:string;
}
export declare function CommandButton(props:CommandButtonProps):JSX.Element;
