import React from 'react'
import { BunnyColorType, EyeType, MouthType } from '../App';
import { Body } from './Body';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

export interface ZayoProps {
    bunnyColors: BunnyColorType,
    eyeType: EyeType,
    mouthType: MouthType,
    isExplaining: boolean,
    isNext: boolean,
}

export const Zayo = ({ bunnyColors, eyeType, mouthType, isExplaining, isNext }: ZayoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="243"
            fill="none"
        >
            <g filter="url(#Zayo__a)">
                <Body bunnyColors={bunnyColors} />
                <Eyes type={eyeType} />
                <Mouth type={mouthType} />
                {isExplaining ? <g fillRule="evenodd" clipRule="evenodd">
                    <path
                        fill="url(#paint0_linear_262_2164)"
                        d="M93.93 12.661L19.27 296.451h191.398l-57.738-283.79H93.931z"
                    ></path>
                    <path
                        fill="#0D0000"
                        d="M154.617 0H90.8c-1.656 3.816-2.63 8.496-2.63 14.39h69.076c0-5.894-.974-10.575-2.629-14.39z"
                    ></path>
                </g> : <></>}
                {isNext ? <g>
                    <path
                        fill="#F3DC7C"
                        stroke="#F3DC7C"
                        d="M77.504 202.815c-.027 2.015-2.282 6.651-5.016 7.072l1.014 14.017c3.133.574 5.722 5.068 5.874 7.18 0 0 12.45-.998 29.332-2.218l30.959-2.239c-.076-3.396 3.131-7.185 4.609-7.938l-1.014-14.017c-2.796-1.016-4.715-2.679-5.622-6.079-8.682.628-19.579 1.401-30.962 2.201-16.781 1.167-29.174 2.021-29.174 2.021z"
                    ></path>
                    <path
                        fill="#700E0E"
                        d="M95.591 208.888l.775 11.611-1.87.125-6-7.544-.096.007.528 7.908-2.103.141-.775-11.611 1.882-.125 5.993 7.549.102-.007-.528-7.914 2.092-.14zm4.184 11.383L99 208.661l7.552-.504.117 1.763-5.448.364.211 3.152 5.057-.338.117 1.763-5.057.338.212 3.169 5.493-.367.118 1.763-7.597.507zm11.797-12.449l2.841 4.081.091-.006 2.284-4.424 2.398-.16-3.19 6.044 4.022 5.563-2.438.163-2.867-4.051-.091.006-2.303 4.396-2.426.162 3.28-6.05-4.01-5.564 2.409-.16zm9.99 1.104l-.117-1.763 9.263-.619.118 1.763-3.589.24.657 9.847-2.086.14-.657-9.848-3.589.24z"
                    ></path>
                </g> : <></>}
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

                <linearGradient
                    id="paint0_linear_262_2164"
                    x1="129.812"
                    x2="118.492"
                    y1="14.495"
                    y2="324.904"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F3DC7C"></stop>
                    <stop offset="0.395" stopColor="#F3DC7C" stopOpacity="0.59"></stop>
                    <stop offset="0.595" stopColor="#F3DC7C" stopOpacity="0.16"></stop>
                    <stop offset="0.839" stopColor="#F3DC7C" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="#F3DC7C" stopOpacity="0.21"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}
