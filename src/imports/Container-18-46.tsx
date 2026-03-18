import svgPaths from "./svg-w6in6wygdq";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_18_50)" id="Icon">
          <path d={svgPaths.p22e960f0} id="Vector" stroke="var(--stroke-0, #A5B4FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #A5B4FC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_18_50">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[22.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter_Tight:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-[rgba(255,255,255,0.8)] top-[-1px] whitespace-nowrap">100% Confidential Consultation</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}