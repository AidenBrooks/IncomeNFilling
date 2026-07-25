export interface OfficeCardProps{
city:string;
region:string;
address:string;
/** pulse dot signalling this office as an active node */
live?:boolean;
}
export declare function OfficeCard(props:OfficeCardProps):JSX.Element;
