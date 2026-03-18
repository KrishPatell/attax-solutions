import svgPaths from "./svg-sgovbpraxs";
import imgYgHYlFnmtk4HrBmcGTzGicGEwPng from "figma:asset/29be9e144d4cbc3f542ccc4e6b661999b17fa2ee.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">[About Us]</p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[76px]" data-name="[About Us]">
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#03030f] text-[72px] w-full">
        <p className="leading-[86.4px]">Navigate Business</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-semibold h-[90.4px] leading-[0] relative shrink-0 text-[#03030f] w-full" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:SemiBold',sans-serif] h-[87px] justify-center left-0 text-[0px] top-[46.75px] w-[157.072px]">
        <p className="text-[72px]">
          <span className="font-['Inter_Tight:SemiBold',sans-serif] font-semibold leading-[86.4px]">with</span>
          <span className="font-['Inter_Tight:Medium',sans-serif] font-medium leading-[86.4px]">{` `}</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] h-[87px] italic justify-center left-[156.75px] text-[72px] top-[43px] tracking-[-1.44px] w-[343.764px]">
        <p className="leading-[86.4px]">Confidence</p>
      </div>
    </div>
  );
}

function NavigateBusinessWithConfidence() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Navigate Business with Confidence">
      <Heading />
      <Heading1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[11.25px] items-start relative shrink-0 w-full" data-name="Header">
      <AboutUs />
      <NavigateBusinessWithConfidence />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[20px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Expert strategic consulting to drive sustainable growth, operational innovation, and `}</p>
        <p>{`lasting business transformation `}</p>
      </div>
    </div>
  );
}

function ExpertStrategicConsultingToDriveSustainableGrowthOperationalInnovationAndLastingBusinessTransformation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Expert strategic consulting to drive sustainable growth, operational innovation, and lasting business transformation">
      <Heading2 />
    </div>
  );
}

function HeaderDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header & desc">
      <Header />
      <ExpertStrategicConsultingToDriveSustainableGrowthOperationalInnovationAndLastingBusinessTransformation />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Book A Free Call</p>
      </div>
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.77px)] top-[-0.75px] w-[115px]" data-name="View Details">
      <Container3 />
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.5px)] top-[27.39px] w-[46.95px]" data-name="View Details">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails />
      <ViewDetails1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6253 13.1271">
          <path d={svgPaths.p704f000} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6309 13.1317">
          <path d={svgPaths.p3f7e580} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container4 />
      <Container5 />
    </div>
  );
}

function ArrowPlaceholder() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function LinkBlue() {
  return (
    <div className="bg-[#1d1ee3] flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Link - Blue">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text />
          <ArrowPlaceholder />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[206px]" data-name="Container">
      <LinkBlue />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 right-[377px] top-[-0.75px]" data-name="Header & button">
      <HeaderDesc />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-medium h-[41.5px] leading-[0] relative shrink-0 text-[32px] text-[rgba(3,3,15,0.7)] w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[40px] justify-center left-0 top-[21.25px] w-[127.187px]">
        <p className="leading-[40px]">{`Success `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[40px] italic justify-center left-[126.79px] top-[19.75px] w-[76.057px]">
        <p className="leading-[40px]">Ratio</p>
      </div>
    </div>
  );
}

function SuccessRatio1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Success Ratio">
      <Paragraph />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[139.83999633789062px] opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">97%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">97%</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[25.2px]">In the Previous year</p>
      </div>
    </div>
  );
}

function InThePreviousYear() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="In the Previous year">
      <Container9 />
    </div>
  );
}

function Stat() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Stat">
      <Container6 />
      <InThePreviousYear />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Top">
      <SuccessRatio1 />
      <Stat />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">Operational Efficiency</p>
      </div>
    </div>
  );
}

function OperationalEfficiency() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Operational Efficiency">
      <Heading3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We help businesses streamline processes, `}</p>
        <p>reduce waste, and boost productivity</p>
      </div>
    </div>
  );
}

function WeHelpBusinessesStreamlineProcessesReduceWasteAndBoostProductivity() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="We help businesses streamline processes, reduce waste, and boost productivity">
      <Container10 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pt-[40px] relative shrink-0 w-full" data-name="Details">
      <OperationalEfficiency />
      <WeHelpBusinessesStreamlineProcessesReduceWasteAndBoostProductivity />
      <div aria-hidden="true" className="absolute border-[#eaeaff] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function SuccessRatio() {
  return (
    <div className="bg-[#eaeaff] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Success ratio">
      <div className="content-stretch flex flex-col gap-[50px] items-start px-[20px] py-[24px] relative w-full">
        <Top />
        <Details />
        <div className="absolute inset-0 rounded-[12px]" data-name="HorizontalBorder">
          <div aria-hidden="true" className="absolute border-[#1d1ee3] border-solid border-t-3 inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function StatisticsCard() {
  return (
    <div className="absolute content-stretch flex items-center left-[763px] max-w-[377px] pr-[40px] pt-[58px] right-0 top-0" data-name="Statistics card">
      <SuccessRatio />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[444.3px] relative shrink-0 w-full" data-name="Content">
      <HeaderButton />
      <StatisticsCard />
    </div>
  );
}

function YgHYlFnmtk4HrBmcGTzGicGEwPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="YgHYlFnmtk4hrBmcGTzGicGEw.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-0.99%] max-w-none top-0 w-[101.99%]" src={imgYgHYlFnmtk4HrBmcGTzGicGEwPng} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute aspect-[1140/673] bottom-0 left-0 right-0 rounded-[16px]" data-name="Image">
      <YgHYlFnmtk4HrBmcGTzGicGEwPng />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="h-[630px] relative rounded-[12px] shrink-0 w-full" data-name="Hero image">
      <Image />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center max-w-[1200px] pt-[160px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Content />
      <HeroImage />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 right-0 top-0" data-name="Section - Hero">
      <Container />
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="image">
          <path d={svgPaths.p3807e880} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function Mask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[30px]" data-name="Mask">
      <ImageFill />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Mask Group">
      <Mask />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[30px] top-1/2" data-name="Background" />
    </div>
  );
}

function Icon() {
  return (
    <div className="aspect-[52/52] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[11px] relative rounded-[52px] shrink-0" data-name="Icon">
      <MaskGroup />
    </div>
  );
}

function StrategicPlanningHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Strategic Planning → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Strategic Planning</p>
      </div>
    </div>
  );
}

function Variant() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px pt-[20px] relative" data-name="Variant 1">
      <Icon />
      <StrategicPlanningHeading />
      <div aria-hidden="true" className="absolute border-[#eaeaff] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="image">
          <path d={svgPaths.p29c41d80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3ad94d00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="image fill">
      <Image2 />
    </div>
  );
}

function Mask1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[30px]" data-name="Mask">
      <ImageFill1 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Mask Group">
      <Mask1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[30px] top-1/2" data-name="Background" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="aspect-[52/52] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[11px] relative rounded-[52px] shrink-0" data-name="Icon">
      <MaskGroup1 />
    </div>
  );
}

function StrategicPlanningHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Strategic Planning → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Consulting Excellence</p>
      </div>
    </div>
  );
}

function Variant1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px pt-[20px] relative" data-name="Variant 1">
      <Icon1 />
      <StrategicPlanningHeading1 />
      <div aria-hidden="true" className="absolute border-[#eaeaff] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="image">
          <path d={svgPaths.p1ed68e00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1d867400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="image fill">
      <Image3 />
    </div>
  );
}

function Mask2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[30px]" data-name="Mask">
      <ImageFill2 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Mask Group">
      <Mask2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[30px] top-1/2" data-name="Background" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="aspect-[52/52] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[11px] relative rounded-[52px] shrink-0" data-name="Icon">
      <MaskGroup2 />
    </div>
  );
}

function StrategicPlanningHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Strategic Planning → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Business Catalyze</p>
      </div>
    </div>
  );
}

function Variant2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px pt-[20px] relative" data-name="Variant 1">
      <Icon2 />
      <StrategicPlanningHeading2 />
      <div aria-hidden="true" className="absolute border-[#eaeaff] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="image">
          <path d={svgPaths.p1e42180} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2ec5ad80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="image fill">
      <Image4 />
    </div>
  );
}

function Mask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[30px]" data-name="Mask">
      <ImageFill3 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Mask Group">
      <Mask3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[30px] top-1/2" data-name="Background" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="aspect-[52/52] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[11px] relative rounded-[52px] shrink-0" data-name="Icon">
      <MaskGroup3 />
    </div>
  );
}

function StrategicPlanningHeading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Strategic Planning → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Precision Monitoring</p>
      </div>
    </div>
  );
}

function Variant3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px pt-[20px] relative" data-name="Variant 1">
      <Icon3 />
      <StrategicPlanningHeading3 />
      <div aria-hidden="true" className="absolute border-[#eaeaff] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[28px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Variant />
      <Variant1 />
      <Variant2 />
      <Variant3 />
    </div>
  );
}

function SectionFeatures() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 px-[60px] py-[120px] top-[1244.3px] w-[1200px]" data-name="Section - Features">
      <Container11 />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <SectionHero />
      <SectionFeatures />
    </div>
  );
}