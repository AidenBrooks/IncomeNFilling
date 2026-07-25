import * as React from 'react';
export interface ModuleCardProps{
/** glyph/emoji-free icon element — an inline SVG or letter mark */
icon?:React.ReactNode;
title:string;
description:string;
/** number of services available in this category */
count?:number;
onClick?:()=>void;
}
export declare function ModuleCard(props:ModuleCardProps):JSX.Element;
