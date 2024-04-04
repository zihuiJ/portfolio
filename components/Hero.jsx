import React from "react";
import heroButton from "./ui/heroButton";
import Link from "next/link";

const Hero = () => {
  const Blue = (
    <svg
      width="622"
      height="638"
      viewBox="0 0 622 638"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_18_46)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M293.779 161.296C333.457 167.08 370.063 183.036 400.542 214.729C434.372 249.904 478.839 292.121 471.115 345.689C463.454 398.825 406.527 410.26 368.452 437.286C344.539 454.259 321.045 466.09 293.779 471.561C258.253 478.688 215.787 503.796 189.903 473.109C164.014 442.416 192.331 389.472 187.607 345.689C181.302 287.239 130.489 227.563 158.218 179.404C185.479 132.06 246.857 154.456 293.779 161.296Z"
          fill="#AEE1FF"
          fill-opacity="0.75"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_18_46"
          x="0"
          y="0"
          width="622"
          height="638"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_18_46"
          />
        </filter>
      </defs>
    </svg>
  );
  const Green = (
    <svg
      width="599"
      height="579"
      viewBox="0 0 599 579"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_18_40)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M308.708 150.92C348.25 142.92 375.96 188.894 402.3 218.839C425.943 245.719 449.025 274.952 449 310.416C448.975 345.862 432.703 382.791 402.172 401.868C374.852 418.939 340.944 394.741 308.708 398.076C267.891 402.299 228.646 443.649 193.143 423.494C156.6 402.749 141.959 349.955 154.292 310.416C165.563 274.283 220.638 277.65 247.191 250.223C275.473 221.011 268.437 159.069 308.708 150.92Z"
          fill="#AEFFB6"
          fill-opacity="0.75"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_18_40"
          x="0"
          y="0"
          width="599"
          height="579"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_18_40"
          />
        </filter>
      </defs>
    </svg>
  );
  const Purple = (
    <svg
      width="590"
      height="547"
      viewBox="0 0 590 547"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_18_16)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M297.729 172.777C329.515 175.034 362.758 151.309 389.619 171.24C420.244 193.964 441.02 236.025 439.961 278.313C438.921 319.865 413.545 355.325 384.408 379.313C359.567 399.764 328.055 398.127 297.729 395.411C270.508 392.974 245.927 382.905 223.421 364.897C193.856 341.242 157.241 319.54 151.38 278.313C145.026 233.622 160.856 181.185 193.914 157.346C224.752 135.108 261.53 170.207 297.729 172.777Z"
          fill="#BAAEFF"
          fill-opacity="0.75"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_18_16"
          x="0"
          y="0"
          width="590"
          height="547"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_18_16"
          />
        </filter>
      </defs>
    </svg>
  );
  return (
    <div className="flex flex-row items-center justify-between mx-80 h-dvh">
      <div className="flex flex-col justify-between w-1/2 gap-8 z-30">
        <h1 className="heading">Front-end Developer</h1>
        <p className="paragraph">Hi, I'm Jess.</p>
        <p className="paragraph">
          I'm a front-end developer, currently based in Toronto. I studied
          Statisics in my undergrad, but now I work with code. I'm passionate
          about Coding, Web Design, and books
          <span className="animate-[blink_1s_infinite]">|</span>
        </p>
        <div className="flex flex-row space-x-12">
          <Link href="/about">
            <button className="paragraph btn-primary">About me</button>
          </Link>
          <Link href="/projects">
            <button className="paragraph btn-outline">Projects</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="z-0 absolute top-[50px] right-0 animate-[blue_8s_infinite_ease]">
          {Blue}
        </div>
        <div className="z-20 absolute top-[80px] right-[-20px] animate-[purple_8s_infinite_ease]">
          {Purple}
        </div>
        <div className="z-10 absolute top-[300px] right-[40px] animate-[green_8s_infinite_linear]">
          {Green}
        </div>
      </div>
    </div>
  );
};

export default Hero;
