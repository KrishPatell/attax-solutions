import svgPaths from "./svg-tbbnbj1wyr";

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[24px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[36px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[48px] size-[16px] top-0" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17f48400} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[16px] relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[242.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter_Tight:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-[rgba(255,255,255,0.6)] top-0 whitespace-nowrap">Over 500+ Cases Resolved Successfully</p>
      </div>
    </div>
  );
}

export default function CtaBannerSection() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="CtaBannerSection">
      <Container />
      <Text />
    </div>
  );
}