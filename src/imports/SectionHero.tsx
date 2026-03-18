import svgPaths from "./svg-wz6cipvymc";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]">[Pricing]</p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Blog]">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-semibold h-[178.81px] leading-[0] relative shrink-0 text-[#03030f] text-[72px] text-center w-full" data-name="Heading 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter_Tight:SemiBold',sans-serif] h-[87px] justify-center left-[calc(50%+7.75px)] top-[42.5px] w-[530.463px]">
        <p className="leading-[86.4px]">{`Smart Solutions `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter_Tight:SemiBold',sans-serif] h-[87px] justify-center left-[calc(50%-119.39px)] top-[132.9px] w-[394.374px]">
        <p className="leading-[86.4px]">Transparent</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] h-[87px] italic justify-center left-[calc(50%+206.3px)] top-[129.4px] tracking-[-1.44px] w-[223.712px]">
        <p className="leading-[86.4px]">Pricing</p>
      </div>
    </div>
  );
}

function TheOptimoGrowthInsightsBlog() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[700px] relative shrink-0 w-[700px]" data-name="The Optimo Growth Insights Blog">
      <Heading />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Header & button">
      <Blog />
      <TheOptimoGrowthInsightsBlog />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Monthly</p>
      </div>
    </div>
  );
}

function Monthly() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[58px]" data-name="Monthly">
      <Container2 />
    </div>
  );
}

function Active() {
  return (
    <div className="bg-[#1d1ee3] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="Active">
      <Monthly />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Active />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Yearly</p>
      </div>
    </div>
  );
}

function Monthly1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[44px]" data-name="Monthly">
      <Container4 />
    </div>
  );
}

function Inactive() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shrink-0" data-name="Inactive">
      <Monthly1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Inactive />
    </div>
  );
}

function Duration() {
  return (
    <div className="bg-white content-stretch flex gap-[6.01px] items-center p-[4px] relative rounded-[16px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.02)] shrink-0" data-name="Duration">
      <Container1 />
      <Container3 />
      <div className="absolute inset-0 rounded-[16px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#ededea] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#03030f] text-[32px] w-full">
        <p className="leading-[38.4px]">Starter Plan</p>
      </div>
    </div>
  );
}

function StarterPlan() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Starter Plan">
      <Heading4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Ideal for growing businesses ready to scale `}</p>
        <p>with a clear strategy.</p>
      </div>
    </div>
  );
}

function IdealForGrowingBusinessesReadyToScaleWithAClearStrategy() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Ideal for growing businesses ready to scale with a clear strategy.">
      <Container7 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Title">
      <StarterPlan />
      <IdealForGrowingBusinessesReadyToScaleWithAClearStrategy />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[52px] whitespace-nowrap">
        <p className="leading-[62px]">$80</p>
      </div>
    </div>
  );
}

function Component80Month() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[94px]" data-name="$80/month">
      <Heading1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">/month</p>
      </div>
    </div>
  );
}

function Duration2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[50px]" data-name="Duration">
      <Container8 />
    </div>
  );
}

function Duration1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pb-[10px] relative shrink-0" data-name="Duration">
      <Duration2 />
    </div>
  );
}

function Pricing() {
  return (
    <div className="content-stretch flex gap-[2px] items-end overflow-clip relative shrink-0 w-full" data-name="Pricing">
      <Component80Month />
      <Duration1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.88px)] top-0 w-[82px]" data-name="View Details">
      <Container9 />
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
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

function Container10() {
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

function Container11() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.011px] items-start justify-center right-[-0.01px] top-1/2 w-[20.004px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container10 />
      <Container11 />
    </div>
  );
}

function ArrowPlaceholder() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4.01px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
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
    <div className="bg-[#1d1ee3] h-[56px] relative rounded-[50px] shrink-0 w-full" data-name="Link - Blue">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text />
          <ArrowPlaceholder />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">1 strategy consultation session.</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">Business performance review</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container14 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">High-level action plan</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container16 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">Email support (1 week)</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container18 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Small3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies3 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Details">
      <Small />
      <Small1 />
      <Small2 />
      <Small3 />
    </div>
  );
}

function ButtonAndDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Button and details">
      <LinkBlue />
      <Details />
    </div>
  );
}

function White() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="White">
      <div className="content-stretch flex flex-col gap-[28px] items-start pb-[32.01px] pt-[31px] px-[28px] relative w-full">
        <Title />
        <Pricing />
        <ButtonAndDetails />
        <div className="absolute inset-0 rounded-[12px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#eaeaff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <White />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[38.4px]">Growth Plan</p>
      </div>
    </div>
  );
}

function StarterPlan1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Starter Plan">
      <Heading5 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">{`Ideal for growing businesses ready to scale `}</p>
        <p>{`with a clear strategy. `}</p>
      </div>
    </div>
  );
}

function IdealForGrowingBusinessesReadyToScaleWithAClearStrategy1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Ideal for growing businesses ready to scale with a clear strategy.">
      <Container21 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Title">
      <StarterPlan1 />
      <IdealForGrowingBusinessesReadyToScaleWithAClearStrategy1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[52px] text-white whitespace-nowrap">
        <p className="leading-[62px]">$120</p>
      </div>
    </div>
  );
}

function Component80Month1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[112px]" data-name="$80/month">
      <Heading2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">/month</p>
      </div>
    </div>
  );
}

function Duration4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[50px]" data-name="Duration">
      <Container22 />
    </div>
  );
}

function Duration3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pb-[10px] relative shrink-0" data-name="Duration">
      <Duration4 />
    </div>
  );
}

function Pricing1() {
  return (
    <div className="content-stretch flex gap-[1.99px] items-end overflow-clip relative shrink-0 w-full" data-name="Pricing">
      <Component80Month1 />
      <Duration3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.88px)] top-0 w-[82px]" data-name="View Details">
      <Container23 />
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails2 />
      <ViewDetails3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6253 13.1271">
          <path d={svgPaths.p704f000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6253 13.1271">
          <path d={svgPaths.p704f000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group7 />
    </div>
  );
}

function Container25() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-0 top-1/2 w-[19.997px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container24 />
      <Container25 />
    </div>
  );
}

function ArrowPlaceholder1() {
  return (
    <div className="absolute aspect-[48/48] bg-[#1d1ee3] bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4.01px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function LinkWhite() {
  return (
    <div className="bg-white h-[56px] relative rounded-[50px] shrink-0 w-full" data-name="Link - White">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text1 />
          <ArrowPlaceholder1 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">3 consulting sessions up to 6 hours</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container26 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Small4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies4 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">{`Competitor & market analysis`}</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container28 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Small5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies5 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Customized strategic roadmap</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container30 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Small6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies6 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">{`Email & chat support (1 month)`}</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container32 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group11 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Small7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies7 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Details">
      <Small4 />
      <Small5 />
      <Small6 />
      <Small7 />
    </div>
  );
}

function ButtonAndDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Button and details">
      <LinkWhite />
      <Details1 />
    </div>
  );
}

function Blue() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[12px] shrink-0 w-full" data-name="Blue">
      <div className="content-stretch flex flex-col gap-[28px] items-start pb-[32.01px] pt-[31px] px-[28px] relative w-full">
        <Title1 />
        <Pricing1 />
        <ButtonAndDetails1 />
        <div className="absolute inset-0 rounded-[12px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#eaeaff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Blue />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#03030f] text-[32px] w-full">
        <p className="leading-[38.4px]">Enterprise Plan</p>
      </div>
    </div>
  );
}

function StarterPlan2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Starter Plan">
      <Heading6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Ideal for growing businesses ready to scale `}</p>
        <p>with a clear strategy.</p>
      </div>
    </div>
  );
}

function IdealForGrowingBusinessesReadyToScaleWithAClearStrategy2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Ideal for growing businesses ready to scale with a clear strategy.">
      <Container35 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Title">
      <StarterPlan2 />
      <IdealForGrowingBusinessesReadyToScaleWithAClearStrategy2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[52px] whitespace-nowrap">
        <p className="leading-[62px]">$260</p>
      </div>
    </div>
  );
}

function Component80Month2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[124px]" data-name="$80/month">
      <Heading3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">/month</p>
      </div>
    </div>
  );
}

function Duration6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[50px]" data-name="Duration">
      <Container36 />
    </div>
  );
}

function Duration5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pb-[10px] relative shrink-0" data-name="Duration">
      <Duration6 />
    </div>
  );
}

function Pricing2() {
  return (
    <div className="content-stretch flex gap-[2px] items-end overflow-clip relative shrink-0 w-full" data-name="Pricing">
      <Component80Month2 />
      <Duration5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.87px)] top-0 w-[82px]" data-name="View Details">
      <Container37 />
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails4 />
      <ViewDetails5 />
    </div>
  );
}

function Group12() {
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

function Svg12() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group12 />
    </div>
  );
}

function Container38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Group13() {
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

function Svg13() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group13 />
    </div>
  );
}

function Container39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-0 top-1/2 w-[19.997px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container38 />
      <Container39 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.45px] pr-[8.437px] py-[8px] right-[4.01px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow2 />
        </div>
      </div>
    </div>
  );
}

function LinkBlue1() {
  return (
    <div className="bg-[#1d1ee3] h-[56px] relative rounded-[50px] shrink-0 w-full" data-name="Link - Blue">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text2 />
          <ArrowPlaceholder2 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">{`Full business audit & KPI assessment`}</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container40 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group14 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Small8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies8 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">Weekly consulting sessions (1 month)</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container42 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group15 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Small9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies9 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">In-depth strategy development</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container44 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group16 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Small10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies10 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">{`Dedicated consultant & support team`}</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container46 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3438 14.3438">
          <path d={svgPaths.pd1458b0} fill="var(--fill-0, #5858F7)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group17 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Small11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies11 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Details">
      <Small8 />
      <Small9 />
      <Small10 />
      <Small11 />
    </div>
  );
}

function ButtonAndDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="Button and details">
      <LinkBlue1 />
      <Details2 />
    </div>
  );
}

function White1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="White">
      <div className="content-stretch flex flex-col gap-[28px] items-start pb-[32.01px] pt-[31px] px-[28px] relative w-full">
        <Title2 />
        <Pricing2 />
        <ButtonAndDetails2 />
        <div className="absolute inset-0 rounded-[12px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#eaeaff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <White1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container20 />
      <Container34 />
    </div>
  );
}

function DesktopMonthly() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Desktop - Monthly">
      <Duration />
      <Container5 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1200px] min-w-[1200px] pb-[120px] pt-[220px] px-[30px] relative shrink-0 w-[1200px]" data-name="Section - Container">
      <HeaderButton />
      <DesktopMonthly />
    </div>
  );
}

export default function SectionHero() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex items-center justify-center px-[120px] relative size-full" data-name="Section - Hero">
      <SectionContainer />
    </div>
  );
}