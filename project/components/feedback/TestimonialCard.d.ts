export interface TestimonialCardProps{
name:string;
/** e.g. "2024 · Google Review" */
meta:string;
quote:string;
initials:string;
rating?:number;
}
export declare function TestimonialCard(props:TestimonialCardProps):JSX.Element;
