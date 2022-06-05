import React from 'react'
import { MouthType } from '../App'


export const Mouth = ({ type }: { type: MouthType }) => {
    switch (type) {
        case 'smirking':
            return (
                <g>
                    <path
                        fill="#F6F6F6"
                        d="M86.223 120.796s-.013 4.001-.406 7.281c-.393 3.282.82 9.816 5.157 11.4 4.335 1.584 8.93 2.135 13.26 2.655 4.33.519 10.147-3.576 10.587-7.251l.981-8.179c-8.52-4.439-14.053-9.097-12.92-18.545 0 0-4.005 12.034-16.657 12.637l-.002.002z"
                    ></path>
                    <path
                        fill="#DC8776"
                        d="M102.596 92.483c3.785.11 6.006.986 8.788 1.651 2.782.666 2.084 4.72-.996 4.873-4.282.552-6.386.9-9.234-1.44-2.847-2.338-2.343-5.196 1.442-5.086v.002z"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M124.768 130.236c-4.836-.58-9.818-2.049-13.559-4.141-5.86-3.278-10.451-10.748-9.823-15.986l1.252-10.455a1.352 1.352 0 012.684.322l-1.252 10.455c-.495 4.13 3.617 10.597 8.459 13.306 5.44 3.042 14.09 4.696 20.123 3.845 6.196-.874 12.688-6.043 12.752-6.095a1.352 1.352 0 011.695 2.106c-.29.232-7.146 5.689-14.069 6.665-2.497.352-5.352.325-8.261-.024l-.001.002z"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M84.758 121.97c-2.594-.31-2.677-.68-3.68-1.149-2.104-.981-.142-3.048 1.142-2.448 1.821.85 2.697 2.163 9.215-.525 6.497-2.679 10.19-9.098 10.226-9.162a1.351 1.351 0 012.351 1.331c-.167.297-4.198 7.299-11.549 10.33-3.713 1.531-5.237 1.919-7.707 1.623h.002z"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M101.618 109.242l-3.958 32.14 2.682.33 3.958-32.14-2.682-.33zm3.255-8.548c-1.545-.184-2.973-.766-4.576-2.082-1.94-1.593-2.731-3.527-2.115-5.176.272-.723 1.247-2.397 4.453-2.304 3.061.088 5.174.66 7.217 1.21.603.163 1.21.327 1.845.48 1.826.436 2.938 1.973 2.765 3.823-.163 1.74-1.571 3.563-3.951 3.709l-.29.037c-2.102.273-3.784.49-5.348.303zm-.261-6.71a22.784 22.784 0 00-2.055-.151c-1.12-.032-1.732.252-1.843.55-.119.319.128 1.18 1.297 2.14 2.32 1.906 3.944 1.696 7.865 1.188l.445-.053c1.059-.052 1.411-.818 1.452-1.264.046-.505-.19-.821-.705-.945a77.06 77.06 0 01-1.919-.498c-1.444-.39-2.828-.762-4.535-.967h-.002z"
                    ></path>
                    <path
                        stroke="#231F20"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="3.499"
                        d="M140.496 119.767s.996-2.177 5.306-1.638c4.309.539 6.215 6.382 6.215 6.382"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M104.073 143.476c-4.464-.536-9.08-1.088-13.563-2.726-4.949-1.81-6.526-8.725-6.035-12.83.38-3.162.398-7.087.398-7.126a1.35 1.35 0 011.286-1.345c11.544-.551 15.285-11.261 15.439-11.717a1.352 1.352 0 012.623.589c-1.022 8.524 3.702 12.756 12.203 17.186.498.259.784.801.718 1.359l-.981 8.179c-.535 4.461-7.086 9.032-12.088 8.432v-.001zm-16.518-21.428c-.034 1.463-.13 3.969-.396 6.192-.346 2.89.788 8.694 4.28 9.97 4.189 1.53 8.646 2.065 12.956 2.582 3.741.449 8.757-3.348 9.084-6.07l.87-7.258c-6.833-3.668-11.646-7.697-12.734-14.084-2.451 3.544-6.866 7.885-14.058 8.668h-.002z"
                    ></path>
                </g>
            )
        case 'smiling':
            return (
                <g>
                    <path
                        fill="#231F20"
                        d="M122.574 127.427c-4.504-.54-9.146-1.906-12.629-3.857-5.46-3.053-9.736-10.012-9.151-14.892l1.168-9.739a1.259 1.259 0 012.499.3l-1.168 9.739c-.461 3.847 3.369 9.871 7.879 12.394 5.069 2.834 13.126 4.373 18.744 3.583 5.771-.814 11.819-5.63 11.879-5.679a1.258 1.258 0 011.577 1.962c-.269.217-6.655 5.298-13.105 6.207-2.327.328-4.986.303-7.695-.021l.002.003z"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M83.8 119.558c-2.416-.29-4.144-1.095-5.078-1.532-1.96-.913-5.889-4.619-6.33-5.037a1.258 1.258 0 01-.045-1.779 1.26 1.26 0 011.779-.047c1.554 1.475 4.463 4.023 5.66 4.583 1.696.791 5.668 2.646 11.74.142 6.051-2.495 9.491-8.474 9.525-8.534a1.26 1.26 0 012.192 1.24c-.157.277-3.91 6.798-10.758 9.621-3.46 1.427-6.385 1.619-8.685 1.344v-.001z"
                    ></path>
                    <path
                        fill="#DC8776"
                        d="M102.262 92.005c3.784.11 6.006.986 8.787 1.652 2.782.665 2.084 4.72-.996 4.872-4.281.552-6.385.9-9.233-1.44-2.848-2.338-2.343-5.196 1.442-5.086v.002z"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M104.043 99.91c-1.439-.173-2.77-.713-4.263-1.94-1.808-1.482-2.544-3.286-1.97-4.82.253-.675 1.162-2.234 4.147-2.147 2.851.083 4.82.614 6.723 1.128a60.85 60.85 0 001.719.446c1.702.408 2.736 1.839 2.576 3.561-.15 1.62-1.462 3.319-3.68 3.455l-.271.035c-1.956.254-3.525.456-4.982.282h.001zm-.242-6.25a21.367 21.367 0 00-1.915-.142c-1.043-.03-1.614.236-1.718.513-.111.296.12 1.1 1.21 1.994 2.161 1.776 3.673 1.578 7.325 1.106l.414-.05c.985-.048 1.315-.763 1.353-1.177.044-.47-.178-.767-.656-.88a61.32 61.32 0 01-1.789-.464c-1.344-.362-2.634-.712-4.224-.9z"
                    ></path>
                    <path
                        stroke="#231F20"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2.588"
                        d="M103.419 140.229C99.523 142.735 94.123 141.674 91 138"
                    ></path>
                </g>
            )
        case 'chipped':
            return (
                <g>
                    <path
                        fill="#F6F6F6"
                        d="M85.79 119.192s-.014 3.938-.389 7.165c-.374 3.23.782 9.659 4.918 11.218 4.134 1.559 3.558 1.264 7.687 1.776-.102-4.074 14.144-2.857 14.564-6.473l1.424-7.874c-8.124-4.368-13.4-8.951-12.32-18.248 0 0-3.82 11.843-15.885 12.436z"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M103.573 99.413c-1.473-.182-2.835-.754-4.363-2.05-1.85-1.566-2.604-3.47-2.016-5.092.258-.712 1.189-2.359 4.245-2.267 2.92.086 4.934.648 6.882 1.19.575.16 1.154.322 1.76.472 1.741.43 2.801 1.942 2.636 3.762-.155 1.712-1.497 3.506-3.767 3.65l-.276.036c-2.005.269-3.609.482-5.101.299zm-.248-6.604a21.025 21.025 0 00-1.96-.148c-1.068-.032-1.65.248-1.757.542-.114.313.122 1.16 1.237 2.105 2.211 1.876 3.761 1.669 7.499 1.169l.425-.052c1.01-.051 1.346-.805 1.384-1.243.044-.497-.181-.809-.672-.93a66.69 66.69 0 01-1.83-.49c-1.376-.384-2.696-.75-4.325-.953h-.001z"
                    ></path>
                    <path
                        fill="#DC8776"
                        d="M103.325 92.81a21.025 21.025 0 00-1.96-.149c-1.068-.032-1.65.248-1.757.542-.114.313.122 1.16 1.237 2.105 2.211 1.876 3.761 1.669 7.499 1.169l.425-.052c1.01-.051 1.346-.805 1.384-1.243.044-.497-.181-.809-.672-.93a66.69 66.69 0 01-1.83-.49c-1.376-.384-2.698-.75-4.326-.953z"
                    ></path>
                    <path
                        fill="#231F20"
                        fillRule="evenodd"
                        d="M109.334 123.168c1.177.68 5.035 3.126 8.661 4.122 3.288.902 10.758.733 14.703-1.606 1.464-.868 1.618-1.095.909-2.516-3.236 1.618-12.148 2.524-15.236 1.648-3.354-.952-6.401-2.097-7.498-2.73-4.617-2.666-8.538-9.029-8.066-13.093l1.194-10.288c.084-.73-.42-1.392-1.126-1.478-.708-.087-1.349.433-1.433 1.162l-1.194 10.287c-.6 5.155 3.498 11.266 9.086 14.492z"
                        clipRule="evenodd"
                    ></path>
                    <path
                        fill="#231F20"
                        d="M84.392 120.347c-2.473-.305-2.552-.668-3.509-1.13-2.006-.965-.135-2.999 1.09-2.409 1.736.837 2.571 2.129 8.786-.517 6.195-2.636 9.717-8.952 9.751-9.015a1.268 1.268 0 011.756-.502c.619.362.837 1.173.486 1.812-.16.292-4.003 7.182-11.012 10.164-3.542 1.507-4.994 1.889-7.35 1.597h.002z"
                    ></path>
                    <g fill="#231F20">
                        <path
                            fillRule="evenodd"
                            d="M102.795 138.27l.015.002c4.769.59 11.016-3.906 11.527-8.295l.935-4.812a1.342 1.342 0 00-.685-1.337c-8.106-4.36-12.61-8.524-11.636-16.911.079-.677-.351-1.304-.995-1.454-.645-.151-1.294.229-1.506.874-.147.448-3.714 10.988-14.722 11.529-.685.034-1.224.616-1.226 1.324 0 .038-.018 3.901-.38 7.012-.468 4.039 1.036 10.844 5.755 12.624 2.988 1.127 6.039 1.732 9.058 2.174l.07-.975.119-1.686c-2.823-.42-5.651-.99-8.362-2.011-3.33-1.256-4.41-6.967-4.08-9.811.253-2.187.345-4.653.377-6.093 6.858-.771 11.07-5.042 13.407-8.529 1.037 6.285 5.627 10.249 12.142 13.858l-.829 3.906c-.311 2.679-5.095 6.414-8.662 5.973-1.232-.153-2.477-.307-3.724-.489l-.27 2.648c1.232.177 2.458.329 3.672.479z"
                            clipRule="evenodd"
                        ></path>
                        <path d="M99.004 140.025c-.023.543-.046.972-.069.975h.189l.269-2.61-.27-.051-.119 1.686z"></path>
                    </g>
                    <path
                        fill="#231F20"
                        d="M100.469 107.823l-3.774 31.626 2.558.325 3.773-31.626-2.557-.325z"
                    ></path>
                </g>
            )
        default:
            return (<></>)
    }
}