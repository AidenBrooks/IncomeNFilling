export interface AccordionItem{question:string;answer:string;}
export interface AccordionProps{
items:AccordionItem[];
defaultOpenIndex?:number;
}
export declare function Accordion(props:AccordionProps):JSX.Element;
