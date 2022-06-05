import { BunnyColorType } from "../App"

export const Body = ({ bunnyColors }: { bunnyColors: BunnyColorType }) => {
    return (
        <g>
            <path
                fill={`${bunnyColors.bodyColor}`}
                stroke="#0D0000"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M37.914 232.43s22.531-64.887 47.583-77.424c25.052-12.537 41.045-12.198 69.061 10.504 28.017 22.702 41.818 65.734 41.818 65.734L37.914 232.43z"
            ></path>
            <path
                fill={`${bunnyColors.shirtColor}`}
                stroke="#0D0000"
                strokeMiterlimit="10"
                strokeWidth="3.936"
                d="M74.523 163.957s20.739 10.248 40.052 11.434c19.314 1.185 44.761-4.981 44.761-4.981l15.22 17.08s-3.734-4.645-7.8-6c-4.066-1.356-11.181-2.372-15.586 5.929-4.405 8.302 4.913 27.785 4.913 27.785s2.033 5.421 6.438 6.776l-3.98 9.603-101.483.817s10.758-25.837 9.742-39.051c-1.017-13.215 1.016-21.347 1.016-21.347l6.707-8.045z"
            ></path>
            <path
                fill={`${bunnyColors.bodyColor}`}
                d="M113.24 166.952s14.482 2.09 32.959-1.02c18.477-3.111 32.845-10.441 37.126-26.168 4.281-15.727-4.423-24.181-4.423-24.181s3.573-24.998-14.274-39.739c-13.258-10.819-25.06-18.976-45.734-18.26-20.676.717-28.222 10.631-30.528 14.8-2.305 4.17-5.83 12.116-15.332 18.592-9.503 6.477-25.836 27.239-12.569 48.352 13.267 21.115 52.777 27.624 52.777 27.624h-.002z"
            ></path>
            <path
                fill={`${bunnyColors.earColor}`}
                d="M191.464 63.96c2.807 9.888 7.244 24.443 16.159 26.332 15.224 2.556 27.646-54.44 25.223-62.361-1.447-3.756-26.734-25.745-40.918-20.46-21.85 10.515-46.129 55.514-46.129 55.514s13.45 7.056 20.383 13.794l25.282-12.82z"
            ></path>
            <path
                fill="#DC8776"
                d="M188.677 31.646c-9.67 2.818-31.85 20.412-37.617 34.097l8.662 5.198s27.478-11.917 29.33-19.281l-.375-20.014z"
            ></path>
            <path
                fill={`${bunnyColors.earColor}`}
                d="M118.366 56.717s-3.006-27.422-7.411-38.067C106.55 8.006 76.567.507 59.061 1.427 12.247 24.75 3.017 70.68 5.8 73.674c2.24 2.043 7.898 2.809 15.285 1.077 7.386-1.733 39.047-17.108 57.026-32.347 0 0 7.448 13.391 18.324 21.491 0 0 7.712-4.893 21.928-7.177l.002-.001z"
            ></path>
            <path
                fill="#DC8776"
                d="M110.936 58.033c1.274-10.63-16.91-28.454-16.91-28.454l-10.425 7.21c1.756 2.207 17.558 22.178 19.808 23.377l7.527-2.133z"
            ></path>
            <path
                fill="#231F20"
                d="M162.998 147.208a1.352 1.352 0 01-.381-2.579c1.754-.767 5.191-4.157 6.368-5.399a1.35 1.35 0 111.961 1.859c-.471.498-4.681 4.892-7.246 6.016-.229.099-.47.132-.702.105v-.002zm-5.817-5.887a1.35 1.35 0 01-.19-2.648c.49-.175 1.864-1.73 2.873-3.262a1.352 1.352 0 012.257 1.488c-.769 1.167-2.743 3.932-4.432 4.383a1.385 1.385 0 01-.51.037l.002.002z"
            ></path>
            <path
                fill="#0C0B0B"
                d="M207.75 91.676a6.225 6.225 0 01-.352-.05c-10.079-2.135-14.725-18.45-17.222-27.253-.393-1.113-5.172-15.504-1.552-47.893a1.352 1.352 0 011.493-1.193c.756.054 1.276.752 1.193 1.493-3.624 32.413 1.37 46.576 1.421 46.715l.03.095c2.34 8.244 6.694 23.591 15.138 25.38 2.099.363 4.388-.838 6.762-3.545 10.874-12.395 18.63-51.04 16.902-57.048-1.447-3.412-25.985-24.463-39.112-19.661-21.194 10.261-45.227 54.466-45.468 54.911a1.352 1.352 0 01-2.377-1.284c1-1.853 24.74-45.506 46.732-56.09l.114-.05c14.866-5.542 40.965 16.87 42.649 21.24l.031.091c2.082 6.811-5.672 46.258-17.442 59.671-2.919 3.328-5.928 4.83-8.945 4.468l.005.003z"
            ></path>
            <path
                fill="#161213"
                d="M166.023 78.121a1.35 1.35 0 01-.453-2.546l25.282-12.82a1.353 1.353 0 011.224 2.41l-25.282 12.82a1.35 1.35 0 01-.771.138v-.002zm-15.122-11.036a1.353 1.353 0 01-1.085-1.867c5.861-13.907 28.283-31.898 38.485-34.87a1.351 1.351 0 01.758 2.596c-9.508 2.77-31.255 20.281-36.75 33.325a1.353 1.353 0 01-1.407.816h-.001z"
            ></path>
            <path
                fill="#231F20"
                d="M159.563 72.283a1.353 1.353 0 01-.38-2.582c10.387-4.507 27.327-13.479 28.557-18.372a1.353 1.353 0 012.621.659c-1.958 7.787-27.227 18.946-30.102 20.193-.227.098-.468.13-.698.102h.002zm56.216-16.725a1.351 1.351 0 01-1.181-1.503l1.589-13.255a1.352 1.352 0 012.684.322l-1.589 13.255a1.352 1.352 0 01-1.503 1.18zm-7.47-2.094a1.352 1.352 0 01-1.098-1.837c.844-2.146.47-7.927.253-9.973a1.353 1.353 0 011.203-1.486 1.355 1.355 0 011.486 1.201c.086.82.808 8.105-.426 11.244a1.35 1.35 0 01-1.418.848v.003z"
            ></path>
            <path
                fill="#0C0A0A"
                d="M10.75 76.913c-2.528-.303-4.56-1.057-5.859-2.24l-.08-.078c-.967-1.041-1.07-3.705-.305-7.916C7.446 50.513 22.117 18.322 58.46.219l.25-.125.28-.015c17.611-.927 48.396 6.41 53.215 18.056 4.426 10.7 7.381 37.31 7.505 38.436l.14 1.277-1.268.204c-13.728 2.206-21.346 6.937-21.42 6.985a1.352 1.352 0 01-1.447-2.284c.315-.2 7.651-4.78 21.162-7.156-.652-5.496-3.422-27.376-7.169-36.432-3.88-9.377-31.966-17.272-50.296-16.404-23.906 11.986-37.08 29.548-43.93 42.191-7.957 14.688-9.305 26.106-8.65 27.826 1.817 1.489 6.877 2.312 13.945.655C28.25 71.681 59.828 56.13 77.24 41.371l.085-.066c.203-.146 20.372-14.687 26.285-20.688a1.352 1.352 0 011.925 1.897c-5.991 6.081-25.27 20.004-26.587 20.953C60.919 58.73 29.265 74.219 21.396 76.064c-3.98.934-7.66 1.205-10.647.847v.002z"
            ></path>
            <path
                fill="#231F20"
                d="M103.209 61.74a1.296 1.296 0 01-.464-.147c-.593-.316-2.396-1.276-19.188-22.406l-.32-.403A1.352 1.352 0 0185.35 37.1l.322.405c15.491 19.493 18.004 21.502 18.349 21.706.632.374.873 1.196.514 1.836a1.342 1.342 0 01-1.327.691v.002zm7.434-2.262a1.352 1.352 0 01-1.181-1.503c1.179-9.844-15.722-26.373-15.893-26.539a1.351 1.351 0 111.882-1.94c.737.715 18.033 17.633 16.695 28.801a1.352 1.352 0 01-1.503 1.181z"
            ></path>
            <path
                fill="#161213"
                d="M95.848 65.508a1.33 1.33 0 01-.586-.217c-7.06-4.696-17.831-21.448-18.287-22.16a1.352 1.352 0 012.275-1.459c.109.17 10.92 16.985 17.51 21.367a1.352 1.352 0 01-.912 2.467v.002z"
            ></path>
            <path
                fill="#0D0000"
                d="M113.769 168.383a32.528 32.528 0 01-.722-.093l-.027-.003c-1.638-.27-40.266-6.855-53.702-28.239-13.748-21.88 2.789-43.26 12.952-50.186 8.229-5.608 11.778-12.268 14.126-16.676.278-.524.539-1.01.784-1.454 2.442-4.413 10.413-14.76 31.663-15.496 21.226-.736 33.194 7.595 46.636 18.563 16.823 13.895 15.29 36.152 14.836 40.325 1.86 2.121 8.208 10.673 4.31 24.995-3.977 14.608-16.473 23.489-38.206 27.146-16.373 2.757-29.47 1.5-32.653 1.118h.003zm-.324-2.766c.515.073 14.74 1.977 32.528-1.018 20.585-3.465 32.376-11.705 36.046-25.191 4.003-14.707-3.734-22.534-4.064-22.86l-.487-.477.092-.68c.034-.242 3.239-24.437-13.796-38.505-12.989-10.599-24.538-18.656-44.828-17.952-19.87.69-27.175 10.094-29.392 14.104-.24.432-.492.907-.764 1.417-2.323 4.359-6.211 11.654-14.99 17.636-9.46 6.448-24.888 26.301-12.187 46.517 12.697 20.207 50.922 26.853 51.839 27.007l.003.002z"
            ></path>
        </g>
    )
}