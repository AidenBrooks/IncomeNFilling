export interface CommandOutputLineProps{
label:string;
status?:'available'|'deployed'|'pending';
onBook?:()=>void;
}
export declare function CommandOutputLine(props:CommandOutputLineProps):JSX.Element;
