export interface SelectProps{
label?:string;
options?:string[];
value?:string;
onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void;
placeholder?:string;
}
export declare function Select(props:SelectProps):JSX.Element;
