import React from 'react'
import { BunnyColorType, EyeType, MouthType } from '../App';
import { Body } from './Body';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

export interface ZayoProps {
    bunnyColors: BunnyColorType
    eyeType: EyeType,
    mouthType: MouthType
}

export const Zayo = ({bunnyColors, eyeType, mouthType}: ZayoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="243"
            fill="none"
        >
            <g filter="url(#Zayo__a)">
                <Body bunnyColors={bunnyColors}/>
                <Eyes type={eyeType}/>
                <Mouth type={mouthType}/>
            </g>
            <defs>
                <filter
                    id="Zayo__a"
                    width="238.469"
                    height="242.392"
                    x="0"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.73 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_43_835"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_43_835"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}
