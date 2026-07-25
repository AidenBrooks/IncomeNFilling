import * as React from 'react';
export interface TerminalSearchProps{
value?:string;
onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
/** queries cycled in the placeholder while the input is empty, e.g. ["search gst registration"] */
placeholders?:string[];
/** CLI-style output/result block rendered below the input */
children?:React.ReactNode;
}
export declare function TerminalSearch(props:TerminalSearchProps):JSX.Element;
