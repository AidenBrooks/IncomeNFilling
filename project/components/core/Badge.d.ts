export interface BadgeProps{
children:React.ReactNode;
status?:'positive'|'warning'|'critical'|'neutral';
/** animate the status dot like a live ops indicator */
pulse?:boolean;
}
export declare function Badge(props:BadgeProps):JSX.Element;
