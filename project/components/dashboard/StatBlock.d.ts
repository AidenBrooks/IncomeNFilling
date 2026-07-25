export interface StatBlockProps{
label:string;
value:string|number;
status?:'positive'|'warning'|'critical'|'neutral';
/** render on the dark navy panel treatment */
inverse?:boolean;
}
export declare function StatBlock(props:StatBlockProps):JSX.Element;
