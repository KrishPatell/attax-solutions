import svgPaths from "./svg-wegnawrwn2";
import img9Vr9UaNNgG118NLXzoGzkN3BuJpg from "figma:asset/90e3ed70d39398911573f698fd529c5036421152.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">[Why Choose Us]</p>
      </div>
    </div>
  );
}

function ChooseToUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[124px]" data-name="[Choose to Us]">
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full">
        <p className="leading-[62px]">The Advantage of</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-medium h-[66px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[62px] justify-center left-0 top-[33.5px] w-[219.11px]">
        <p className="leading-[62px]">Choosing</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[62px] italic justify-center left-[232.05px] top-[30.75px] w-[216.888px]">
        <p className="leading-[62px]">Our Firm</p>
      </div>
    </div>
  );
}

function TheAdvantageOfChoosingOurFirm() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="The Advantage of Choosing Our Firm">
      <Heading />
      <Heading1 />
    </div>
  );
}

function Container3() {
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.89px)] top-[-0.75px] w-[82px]" data-name="View Details">
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
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[174px]" data-name="Container">
      <LinkBlue />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex items-end justify-between relative rounded-[12px] shrink-0 w-full" data-name="Header & button">
      <TheAdvantageOfChoosingOurFirm />
      <Container2 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-end relative shrink-0 w-full" data-name="Header">
      <ChooseToUs />
      <HeaderButton />
    </div>
  );
}

function Component9Vr9UaNNgG118NLXzoGzkN3BuJpg() {
  return (
    <div className="absolute inset-0 rounded-[8px]" data-name="9VR9uaNNgG118nLXzoGzkN3BU.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[106.32%] left-0 max-w-none top-[-3.16%] w-full" src={img9Vr9UaNNgG118NLXzoGzkN3BuJpg} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="flex-[1_0_0] h-[452px] min-h-px min-w-px relative rounded-[8px]" data-name="Image">
      <Component9Vr9UaNNgG118NLXzoGzkN3BuJpg />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Deep Collaboration</p>
      </div>
    </div>
  );
}

function DeepCollaboration1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[152px]" data-name="Deep Collaboration">
      <Container7 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Header">
      <div className="bg-[#1d1ee3] rounded-[100px] shrink-0 size-[10px]" data-name="Circle" />
      <DeepCollaboration1 />
    </div>
  );
}

function Plus() {
  return (
    <div className="bg-[#eaeaff] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
      <div className="absolute bg-[#1d1ee3] h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
      <div className="absolute flex h-[2px] items-center justify-center left-[8px] top-[13px] w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#1d1ee3] h-[12px] opacity-62 rounded-[10px] w-[2px]" />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Header1 />
      <Plus />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">We work as an extension of your team—</p>
        <p className="mb-0">{`immersing ourselves in your goals, challenges, `}</p>
        <p className="mb-0">{`and vision to ensure aligned outcomes. We `}</p>
        <p className="mb-0">{`believe great results come from working `}</p>
        <p>closely together.</p>
      </div>
    </div>
  );
}

function WeWorkAsAnExtensionOfYourTeamImmersingOurselvesInYourGoalsChallengesAndVisionToEnsureAlignedOutcomesWeBelieveGreatResultsComeFromWorkingCloselyTogether() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[500px] relative shrink-0 w-full" data-name="We work as an extension of your team—immersing ourselves in your goals, challenges, and vision to ensure aligned outcomes. We believe great results come from working closely together.">
      <Container8 />
    </div>
  );
}

function Open() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start py-[20px] relative shrink-0 w-full" data-name="Open">
      <Container6 />
      <WeWorkAsAnExtensionOfYourTeamImmersingOurselvesInYourGoalsChallengesAndVisionToEnsureAlignedOutcomesWeBelieveGreatResultsComeFromWorkingCloselyTogether />
    </div>
  );
}

function HorizontalDivider() {
  return <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" data-name="Horizontal Divider" />;
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">Expertise</p>
      </div>
    </div>
  );
}

function HeaderDeepCollaboration() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[73px]" data-name="Header → Deep Collaboration">
      <Container10 />
    </div>
  );
}

function Plus1() {
  return (
    <div className="bg-[#1d1ee3] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
      <div className="absolute bg-white h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
      <div className="absolute bg-white h-[12px] left-[13px] opacity-62 rounded-[10px] top-[8px] w-[2px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <HeaderDeepCollaboration />
      <Plus1 />
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Close">
      <Container9 />
    </div>
  );
}

function HorizontalDivider1() {
  return <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" data-name="Horizontal Divider" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">Tailored Solutions</p>
      </div>
    </div>
  );
}

function HeaderDeepCollaboration1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[136px]" data-name="Header → Deep Collaboration">
      <Container12 />
    </div>
  );
}

function Plus2() {
  return (
    <div className="bg-[#1d1ee3] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
      <div className="absolute bg-white h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
      <div className="absolute bg-white h-[12px] left-[13px] opacity-62 rounded-[10px] top-[8px] w-[2px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <HeaderDeepCollaboration1 />
      <Plus2 />
    </div>
  );
}

function Close1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Close">
      <Container11 />
    </div>
  );
}

function HorizontalDivider2() {
  return <div className="bg-[rgba(0,0,0,0.07)] h-px shrink-0 w-full" data-name="Horizontal Divider" />;
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">Impact</p>
      </div>
    </div>
  );
}

function HeaderDeepCollaboration2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[54px]" data-name="Header → Deep Collaboration">
      <Container14 />
    </div>
  );
}

function Plus3() {
  return (
    <div className="bg-[#1d1ee3] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
      <div className="absolute bg-white h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
      <div className="absolute bg-white h-[12px] left-[13px] opacity-62 rounded-[10px] top-[8px] w-[2px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <HeaderDeepCollaboration2 />
      <Plus3 />
    </div>
  );
}

function Close2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full" data-name="Close">
      <Container13 />
    </div>
  );
}

function DeepCollaboration() {
  return (
    <div className="bg-[#eaeaff] h-full relative rounded-[12px] shrink-0 w-[380px]" data-name="Deep Collaboration">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[30px] py-[20px] relative size-full">
          <Open />
          <HorizontalDivider />
          <Close />
          <HorizontalDivider1 />
          <Close1 />
          <HorizontalDivider2 />
          <Close2 />
        </div>
      </div>
    </div>
  );
}

function DeepCollaborationAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Deep Collaboration:align-stretch">
      <DeepCollaboration />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Content">
      <Image />
      <div className="flex flex-row items-center self-stretch">
        <DeepCollaborationAlignStretch />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start max-w-[1200px] px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <Header />
      <Content />
    </div>
  );
}

export default function SectionWhyChooseUs() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Section - Why choose us">
      <Container />
    </div>
  );
}