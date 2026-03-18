import svgPaths from "./svg-t7fmzanw1z";
import imgSectionHero from "figma:asset/457c5c685aca58839b427afae4188fc40ffefcea.png";
import imgLogo from "figma:asset/2595bc767e6c53dda8ddd79a59b6a14bcc3549a0.png";
import imgLogo1 from "figma:asset/322e732e9b7d9a777a63e69be6f7fe579c728936.png";
import imgLogo2 from "figma:asset/eb0b14126e05f98028fdc2edbc8ffdfd7ca85864.png";
import imgLogo3 from "figma:asset/f3f7de3be9b9abc09a49a6866e9a7aa01d8763f1.png";
import imgImageContainerImage3V5U62YNBaC1Dhi2JmT0DvFGwh0Jpg from "figma:asset/c5d95e24f92efaec2adf928c440bb7efc96cf21d.png";
import img1SemzU7CnReJdqJgUeaSbLhkOqJpg from "figma:asset/96a118d2c4996e175c855f18b6f32df4d1f5c5ee.png";
import imgImagePSrPszKdCkSte4SeUr86Mn01C0Jpg from "figma:asset/e7fd341ed65c545b0fae5c0179a3ff8787193b3c.png";
import imgImage9Vr9UaNNgG118NLXzoGzkN3BuJpg from "figma:asset/90e3ed70d39398911573f698fd529c5036421152.png";
import imgMediumShotPeopleWorkingTogetherIracZ5SjW5GbB4K7Vpo1KzGh04SPng from "figma:asset/949ef842ec4eb160e58016d024e6b27bc7b91bba.png";
import imgImage from "figma:asset/451d5d4a71c6738f259f5383908e377669212f88.png";
import imgStaffAvatar from "figma:asset/8bb7b6f102fcb7a35d57429d860c067541e9a562.png";
import imgImage1 from "figma:asset/04ae057b352f2e1c4d2f3aa615af85ae11e80dfd.png";
import imgImage2 from "figma:asset/afa36224e38e9e7fb232df764780938a9cb9d361.png";
import imgStaffAvatar1 from "figma:asset/82a4dd6d07f48dec7af80cdd45cab92284604235.png";
import imgImage3 from "figma:asset/54eb0fce67fdb9f52800f90543d3290b573a90e9.png";
import imgImage4 from "figma:asset/593663dca6da7b7ec234dc70e3a379cc5460b897.png";
import { imgBottom, imgSection } from "./svg-4xevr";

function Backdrop() {
  return <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />;
}

function Image() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
        <g id="image">
          <path d={svgPaths.p5ca1b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center overflow-clip relative shrink-0 w-[12px]" data-name="image fill">
      <Image />
    </div>
  );
}

function LogoMask() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[12px]" data-name="Logo:mask">
      <ImageFill />
    </div>
  );
}

function LogoMaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-1/2 top-[-2px] w-[12px]" data-name="Logo:mask-group">
      <LogoMask />
      <div className="-translate-x-1/2 absolute bg-black h-[20px] left-1/2 top-0 w-[12px]" data-name="Logo" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Container">
      <LogoMaskGroup />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 10">
        <g clipPath="url(#clip0_1_1830)" id="image">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1830">
            <rect fill="white" height="10" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-center justify-center overflow-clip relative shrink-0 w-[97px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function TextMask() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[97px]" data-name="Text:mask">
      <ImageFill1 />
    </div>
  );
}

function TextMaskGroup() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Text:mask-group">
      <TextMask />
      <div className="-translate-y-1/2 absolute bg-black h-[10px] left-0 top-1/2 w-[97px]" data-name="Text" />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex gap-[10px] inset-[28.95%_7.5%] items-center" data-name="Content">
      <Container1 />
      <TextMaskGroup />
    </div>
  );
}

function LinkLight() {
  return (
    <div className="h-[38px] relative shrink-0 w-[140px]" data-name="Link - Light">
      <Backdrop />
      <Content />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] opacity-6 rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-4 rounded-[11px]" data-name="Border">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-[9966.29px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[0px] text-center uppercase whitespace-nowrap">
        <p className="leading-[36px] text-[28px]">Optimo</p>
      </div>
    </div>
  );
}

function TopLinkLogoOptimo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[111px]" data-name="Top → Link - Logo → Optimo">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Home1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[42px]" data-name="Home">
      <Container5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[32.8%_14.05%_26.55%_14.05%]" data-name="Group">
      <div className="absolute inset-[32.8%_14.05%_26.55%_14.05%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.62789 4.87783">
          <path d={svgPaths.p3ea1e500} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[12px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Home">
      <Home1 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px] text-[16px]">About Us</p>
      </div>
    </div>
  );
}

function LinkDesktopAboutUs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]" data-name="Link - Desktop → About Us">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0" data-name="Container">
      <LinkDesktopAboutUs />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Blog</p>
      </div>
    </div>
  );
}

function LinkDesktopAboutUs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[31px]" data-name="Link - Desktop → About Us">
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0" data-name="Container">
      <LinkDesktopAboutUs1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function LinkDesktopAboutUs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Link - Desktop → About Us">
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0" data-name="Container">
      <LinkDesktopAboutUs2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function LinkDesktopAboutUs3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[47px]" data-name="Link - Desktop → About Us">
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative shrink-0" data-name="Container">
      <LinkDesktopAboutUs3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Pages</p>
      </div>
    </div>
  );
}

function Pages1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[43px]" data-name="Pages">
      <Container15 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[32.8%_14.05%_26.55%_14.05%]" data-name="Group">
      <div className="absolute inset-[32.8%_14.05%_26.55%_14.05%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.62789 4.87783">
          <path d={svgPaths.p3ea1e500} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[12px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Pages() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Pages">
      <Pages1 />
      <Container16 />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Menu">
      <Home />
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Pages />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Contact Us</p>
      </div>
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-0.75px] w-[80px]" data-name="View Details">
      <Container18 />
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.4px] w-[46.95px]" data-name="View Details">
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

function Group2() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5036 10.5044">
          <path d={svgPaths.p2b915500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.009px] items-start justify-center right-[26px] top-1/2 w-[16.002px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4981 10.4998">
          <path d={svgPaths.p90fc00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="h-[15.995px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[0.01px] size-[15.995px] top-1/2" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container19 />
      <Container20 />
    </div>
  );
}

function ArrowPlaceholder() {
  return (
    <div className="absolute aspect-[39/39] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip p-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function LinkTransparent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Link - Transparent">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[38px] relative size-full">
          <Text />
          <ArrowPlaceholder />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start justify-center relative shrink-0 w-[133px]" data-name="Container">
      <LinkTransparent />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex gap-[20px] items-center justify-center max-w-[1140px] overflow-clip px-[28px] py-[16px] relative rounded-[20px] shrink-0 w-[1140px]" data-name="Container">
      <TopLinkLogoOptimo />
      <Menu />
      <Container17 />
    </div>
  );
}

function NavDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav - Desktop">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pt-[20px] px-[30px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <NavDesktop />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1777)" id="image">
          <path d={svgPaths.p36329e00} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1777">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[11px]" data-name="image fill">
      <Image2 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[11px]" data-name="SVG">
      <ImageFill2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute aspect-[17/17] bg-white bottom-[26.39%] content-stretch flex items-center justify-center right-[11px] rounded-[50px] top-[26.39%]" data-name="Icon">
      <Svg4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.7px] whitespace-nowrap">
        <p className="leading-[14px]">Buy for $79</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[-16px] w-[61.32px]" data-name="Container">
      <div className="h-[14px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function LinkDesktop() {
  return (
    <div className="bg-[#0a0a0a] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] shadow-[0px_0.602px_0.602px_-1.25px_rgba(0,0,0,0.26),0px_2.289px_2.289px_-2.5px_rgba(0,0,0,0.23),0px_10px_10px_-3.75px_rgba(0,0,0,0.09)] w-full" data-name="Link - Desktop">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[13px] pr-[8px] py-[8px] relative size-full">
          <Icon />
          <Container22 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bottom-[10029.29px] content-stretch flex flex-col h-[36px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <LinkDesktop />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">[About Us]</p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[76px]" data-name="[About Us]">
      <Container26 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[178.3px] leading-[0] relative shrink-0 text-[72px] text-white w-full" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold h-[87px] justify-center left-0 top-[42.75px] w-[553.498px]">
        <p className="leading-[86.4px]">{`Intelligence That `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold h-[87px] justify-center left-0 top-[133.15px] w-[217.879px]">
        <p className="leading-[86.4px]">Inspire</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[87px] justify-center left-[217.51px] top-[134.9px] tracking-[-1.44px] w-[52.71px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[86.4px]">{`s `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold h-[87px] italic justify-center left-[269.86px] top-[129.4px] tracking-[-1.44px] w-[228.205px]">
        <p className="leading-[86.4px]">Growth</p>
      </div>
    </div>
  );
}

function IntelligenceThatInspiresGrowth() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[600px] relative shrink-0 w-[600px]" data-name="Intelligence That Inspires Growth">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
      <AboutUs />
      <IntelligenceThatInspiresGrowth />
    </div>
  );
}

function Container25() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] px-[40px] relative w-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[900px] items-center justify-end left-0 pb-[100px] pt-[160px] px-[120px] right-0 top-0" data-name="Section - Hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.68%] left-0 max-w-none top-[-3.34%] w-full" src={imgSectionHero} />
      </div>
      <Container25 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Trusted by nearly 5000+ paying customers</p>
      </div>
    </div>
  );
}

function TrustedByNearly5000PayingCustomers() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Trusted by nearly 5000+ paying customers">
      <Heading5 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[119px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.2%] max-w-none top-0 w-[100.39%]" src={imgLogo} />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Logo1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[119px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.2%] max-w-none top-0 w-[100.39%]" src={imgLogo1} />
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Logo2 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[119px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.2%] max-w-none top-0 w-[100.39%]" src={imgLogo2} />
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Logo3 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[119px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.2%] max-w-none top-0 w-[100.39%]" src={imgLogo3} />
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Logo4 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[119px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.2%] max-w-none top-0 w-[100.39%]" src={imgLogo1} />
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Logo5 />
    </div>
  );
}

function Item5() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item6() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item7() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item8() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item9() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item10() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item11() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item12() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item13() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item14() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item15() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item16() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item17() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item18() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function Item19() {
  return <div className="h-[28px] shrink-0 w-[119px]" data-name="Item" />;
}

function List() {
  return (
    <div className="content-stretch flex gap-[50px] h-full items-center relative shrink-0 w-[3330px]" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
      <Item19 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex inset-[0_-2580.92px_0_-49.08px] items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.47%_0%] mask-size-[21.02%_100%] p-[10px]" data-name="Section" style={{ maskImage: `url('${imgSection}')` }}>
      <List />
    </div>
  );
}

function SectionMaskGroup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section:mask-group">
      <Section />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col h-[65px] items-start justify-center max-w-[700px] relative shrink-0 w-[700px]" data-name="Container">
      <SectionMaskGroup />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Logo">
      <Container28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1200px] min-w-[1200px] pt-[80px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <TrustedByNearly5000PayingCustomers />
      <Logo />
    </div>
  );
}

function SectionLogos() {
  return (
    <div className="absolute bg-[rgba(247,247,247,0.96)] content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[900px]" data-name="Section - Logos">
      <Container27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">[More About Us]</p>
      </div>
    </div>
  );
}

function CoreValue() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[116px]" data-name="[Core Value]">
      <Container30 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-medium h-[134.3px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[31px] w-[610.129px]">
        <p className="leading-[62.4px]">{`We Believe In Results With `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[95.9px] w-[139.438px]">
        <p className="leading-[62.4px]">Smart</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[152.45px] top-[93.15px] w-[245.651px]">
        <p className="leading-[62.4px]">Consulting</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Newsreader:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[397.7px] top-[102.9px] w-[12.439px]">
        <p className="leading-[62.4px]">.</p>
      </div>
    </div>
  );
}

function WeBelieveInResultsWithSmartConsulting() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[600px] relative shrink-0 w-[600px]" data-name="We Believe In Results With Smart Consulting.">
      <Heading1 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Header">
      <CoreValue />
      <WeBelieveInResultsWithSmartConsulting />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">See All Service</p>
      </div>
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.92px)] top-[-0.75px] w-[105px]" data-name="View Details">
      <Container32 />
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.5px)] top-[27.39px] w-[46.95px]" data-name="View Details">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
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

function Group4() {
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

function Svg5() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Group5() {
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

function Svg6() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container33 />
      <Container34 />
    </div>
  );
}

function ArrowPlaceholder1() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow1 />
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
          <Text1 />
          <ArrowPlaceholder1 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[210px]" data-name="Container">
      <LinkBlue />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex h-[168.7px] items-end justify-between relative shrink-0 w-full" data-name="Header">
      <Header2 />
      <Container31 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[36px] relative shrink-0 text-[#03030f] text-[28px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`At Optimo, we believe that real business growth is `}</p>
        <p className="mb-0">rooted in strategy, insight, and execution. As a results-</p>
        <p>driven consulting firm for you.</p>
      </div>
    </div>
  );
}

function AtOptimoWeBelieveThatRealBusinessGrowthIsRootedInStrategyInsightAndExecutionAsAResultsDrivenConsultingFirmForYou() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="At Optimo, we believe that real business growth is rooted in strategy, insight, and execution. As a results-driven consulting firm for you.">
      <Heading4 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our approach blends deep industry insight, extensive experience, and `}</p>
        <p className="mb-0">{`strategic thinking to solve complex challenges, innovation, and deliver `}</p>
        <p>measurable, lasting business value</p>
      </div>
    </div>
  );
}

function OurApproachBlendsDeepIndustryInsightExtensiveExperienceAndStrategicThinkingToSolveComplexChallengesInnovationAndDeliverMeasurableLastingBusinessValue() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[500px] relative shrink-0 w-[500px]" data-name="Our approach blends deep industry insight, extensive experience, and strategic thinking to solve complex challenges, innovation, and deliver measurable, lasting business value">
      <Container36 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
      <AtOptimoWeBelieveThatRealBusinessGrowthIsRootedInStrategyInsightAndExecutionAsAResultsDrivenConsultingFirmForYou />
      <OurApproachBlendsDeepIndustryInsightExtensiveExperienceAndStrategicThinkingToSolveComplexChallengesInnovationAndDeliverMeasurableLastingBusinessValue />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="image">
          <path d={svgPaths.p160cb200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[27px]" data-name="image fill">
      <Image3 />
    </div>
  );
}

function Mask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[27px]" data-name="Mask">
      <ImageFill3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Mask Group">
      <Mask />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[27px] top-1/2" data-name="Background" />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[60px]" data-name="Icon container">
      <MaskGroup />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Strategic Planning</p>
      </div>
    </div>
  );
}

function StrategicPlanning() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Heading6 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Define clear goals and `}</p>
        <p>chart the path.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container37 />
    </div>
  );
}

function Statistic() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <StrategicPlanning />
      <Over300ClientsCompleteHighImpactProjects />
    </div>
  );
}

function Medium() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative rounded-[12px] shrink-0 w-[216.33px]" data-name="Medium">
      <IconContainer />
      <Statistic />
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g clipPath="url(#clip0_1_2994)" id="image">
          <path d={svgPaths.p26c1b700} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2994">
            <rect fill="white" height="27" width="27" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[27px]" data-name="image fill">
      <Image4 />
    </div>
  );
}

function Mask1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[27px]" data-name="Mask">
      <ImageFill4 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Mask Group">
      <Mask1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[27px] top-1/2" data-name="Background" />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[60px]" data-name="Icon container">
      <MaskGroup1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Operational Growth</p>
      </div>
    </div>
  );
}

function StrategicPlanning1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Heading7 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Streamline processes to `}</p>
        <p>scale efficiently.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container38 />
    </div>
  );
}

function Statistic1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <StrategicPlanning1 />
      <Over300ClientsCompleteHighImpactProjects1 />
    </div>
  );
}

function Medium1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative rounded-[12px] shrink-0 w-[216.34px]" data-name="Medium">
      <IconContainer1 />
      <Statistic1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0_-0.01%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p3b132f80} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p16a1a000} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pb5ca880} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p256a3880} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p3dd97f00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p21fc7970} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.pea87500} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Image5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27px]" data-name="image">
      <Group6 />
    </div>
  );
}

function ImageFill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[27px]" data-name="image fill">
      <Image5 />
    </div>
  );
}

function Mask2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[27px]" data-name="Mask">
      <ImageFill5 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Mask Group">
      <Mask2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[27px] top-1/2" data-name="Background" />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[60px]" data-name="Icon container">
      <MaskGroup2 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[20px] w-full">
        <p className="leading-[28px]">Digital Evolution</p>
      </div>
    </div>
  );
}

function StrategicPlanning2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Heading8 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Leverage technology to `}</p>
        <p>transform.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container39 />
    </div>
  );
}

function Statistic2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <StrategicPlanning2 />
      <Over300ClientsCompleteHighImpactProjects2 />
    </div>
  );
}

function Medium2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative rounded-[12px] shrink-0 w-[216.34px]" data-name="Medium">
      <IconContainer2 />
      <Statistic2 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Features">
      <Medium />
      <Medium1 />
      <Medium2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="Content">
      <Header3 />
      <Features />
    </div>
  );
}

function ImageContainerImage3V5U62YNBaC1Dhi2JmT0DvFGwh0Jpg() {
  return (
    <div className="h-full relative rounded-[12px] shrink-0 w-[399px]" data-name="Image container → Image → 3v5u62yNBaC1Dhi2JmT0dvFGwh0.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-full left-[-8.65%] max-w-none top-0 w-[117.29%]" src={imgImageContainerImage3V5U62YNBaC1Dhi2JmT0DvFGwh0Jpg} />
      </div>
    </div>
  );
}

function ImageContainerImage3V5U62YNBaC1Dhi2JmT0DvFGwh0JpgAlignStretch() {
  return (
    <div className="content-stretch flex items-start justify-center relative self-stretch shrink-0" data-name="Image container → Image → 3v5u62yNBaC1Dhi2JmT0dvFGwh0.jpg:align-stretch">
      <ImageContainerImage3V5U62YNBaC1Dhi2JmT0DvFGwh0Jpg />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Content1 />
      <ImageContainerImage3V5U62YNBaC1Dhi2JmT0DvFGwh0JpgAlignStretch />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start max-w-[1200px] px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <Header1 />
      <Container35 />
    </div>
  );
}

function SectionMoreAboutUs() {
  return (
    <div className="absolute bg-[rgba(247,247,247,0.96)] content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[1113px]" data-name="Section - More about us">
      <Container29 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]">[Our Process]</p>
      </div>
    </div>
  );
}

function OurProcess() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Our Process]">
      <Container41 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[0.65px] items-center leading-[0] pb-[2.65px] relative shrink-0 text-[#03030f] text-[52px] text-center w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center relative shrink-0">
        <p className="leading-[62.4px]">Optimo Your Strategic Growth</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] italic justify-center relative shrink-0">
        <p className="leading-[62.4px]">Partner</p>
      </div>
    </div>
  );
}

function OptimoYourStrategicGrowthPartner() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Optimo Your Strategic Growth Partner">
      <Heading2 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[19.99px] items-center max-w-[750px] relative shrink-0 w-[750px]" data-name="Header">
      <OurProcess />
      <OptimoYourStrategicGrowthPartner />
    </div>
  );
}

function Component1SemzU7CnReJdqJgUeaSbLhkOqJpg() {
  return (
    <div className="absolute inset-0 rounded-[12px]" data-name="1semzU7CNReJDQJgUeaSbLhkOQ.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[122.18%] left-0 max-w-none top-[-11.09%] w-full" src={img1SemzU7CnReJdqJgUeaSbLhkOqJpg} />
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1839)" id="svg-2068614595_1466">
          <path d={svgPaths.pae02c00} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1839">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Pin() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="pin">
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[24px]">Strategic Planning</p>
      </div>
    </div>
  );
}

function StrategicPlanning3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[24px]">Operational Excellence</p>
      </div>
    </div>
  );
}

function OperationalExcellence() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Operational Excellence">
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[24px]">Market Expansion</p>
      </div>
    </div>
  );
}

function MarketExpansion() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Market Expansion">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[24px]">Risk Management</p>
      </div>
    </div>
  );
}

function RiskManagement() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Management">
      <Container47 />
    </div>
  );
}

function Features1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Features">
      <StrategicPlanning3 />
      <OperationalExcellence />
      <MarketExpansion />
      <RiskManagement />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start max-w-[220px] px-[20px] py-[24px] relative rounded-[12px] shrink-0 w-[220px]" data-name="Container">
      <Pin />
      <Features1 />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[650px] relative rounded-[12px] shrink-0 w-full" data-name="Image container">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[40px] relative size-full">
          <Component1SemzU7CnReJdqJgUeaSbLhkOqJpg />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[55.99px] items-center max-w-[1200px] min-w-[1200px] pb-[0.01px] pt-[119.25px] px-[30px] relative shrink-0" data-name="Container">
      <Header4 />
      <ImageContainer />
    </div>
  );
}

function SectionOurProcess() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[2045.7px]" data-name="Section - Our process">
      <Container40 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">[Our Mission]</p>
      </div>
    </div>
  );
}

function CoreValue1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[94px]" data-name="[Core Value]">
      <Container50 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="font-medium h-[127.3px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[31px] w-[407.749px]">
        <p className="leading-[62.4px]">{`Built to Drive Real `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[95.9px] w-[217.389px]">
        <p className="leading-[62.4px]">{`Business `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[217.02px] top-[93.15px] w-[167.4px]">
        <p className="leading-[62.4px]">Growth</p>
      </div>
    </div>
  );
}

function BuiltToDriveRealBusinessGrowth() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Built to Drive Real Business Growth">
      <Heading3 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Header">
      <CoreValue1 />
      <BuiltToDriveRealBusinessGrowth />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`At Optimo, our mission is to empower businesses with strategic solutions that `}</p>
        <p>drive growth, efficiency, and transformation.</p>
      </div>
    </div>
  );
}

function AtOptimoOurMissionIsToEmpowerBusinessesWithStrategicSolutionsThatDriveGrowthEfficiencyAndTransformation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="At Optimo, our mission is to empower businesses with strategic solutions that drive growth, efficiency, and transformation.">
      <Container51 />
    </div>
  );
}

function HeaderDesc() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[15.99px] items-start left-0 right-0 top-[calc(50%-63.06px)]" data-name="Header & desc">
      <Header5 />
      <AtOptimoOurMissionIsToEmpowerBusinessesWithStrategicSolutionsThatDriveGrowthEfficiencyAndTransformation />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[22.4px]">Deliver results-driven strategies aligned with your goals</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container52 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group7 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[16px] top-[3.75px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Medium3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Medium">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[22.4px]">Empower organizations to grow and lead in a changing market</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container54 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[16px] top-[3.75px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Medium4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Medium">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[22.4px]">Foster partnerships built on trust and measurable impact</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container56 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[16px] top-[3.75px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Medium5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Medium">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Features2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[13.3px] items-start left-0 right-0 top-[calc(50%+127.29px)]" data-name="Features">
      <Medium3 />
      <Medium4 />
      <Medium5 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[350.89px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <HeaderDesc />
      <Features2 />
    </div>
  );
}

function Container59() {
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
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.89px)] top-[-0.75px] w-[82px]" data-name="View Details">
      <Container59 />
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.5px)] top-[27.39px] w-[46.95px]" data-name="View Details">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
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

function Group10() {
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

function Svg11() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container60() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Group11() {
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

function Svg12() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group11 />
    </div>
  );
}

function Container61() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container60 />
      <Container61 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow2 />
        </div>
      </div>
    </div>
  );
}

function LinkBlue1() {
  return (
    <div className="bg-[#1d1ee3] flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Link - Blue">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text2 />
          <ArrowPlaceholder2 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[174px]" data-name="Container">
      <LinkBlue1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[564px]" data-name="Content">
      <Container49 />
      <Container58 />
    </div>
  );
}

function ImagePSrPszKdCkSte4SeUr86Mn01C0Jpg() {
  return (
    <div className="absolute inset-0 rounded-[12px]" data-name="Image → pSrPszKdCkSte4SeUR86MN01C0.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-full left-[-40.07%] max-w-none top-0 w-[180.14%]" src={imgImagePSrPszKdCkSte4SeUr86Mn01C0Jpg} />
      </div>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="h-[620px] max-w-[516px] overflow-clip relative rounded-[12px] shrink-0 w-[516px]" data-name="Image container">
      <ImagePSrPszKdCkSte4SeUr86Mn01C0Jpg />
    </div>
  );
}

function Mission() {
  return (
    <div className="bg-white content-stretch flex gap-[60px] items-center relative shrink-0 w-full" data-name="Mission">
      <Content2 />
      <ImageContainer1 />
    </div>
  );
}

function Image9Vr9UaNNgG118NLXzoGzkN3BuJpg() {
  return (
    <div className="absolute inset-0 rounded-[20px]" data-name="Image → 9VR9uaNNgG118nLXzoGzkN3BU.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[-40.01%] max-w-none top-0 w-[180.01%]" src={imgImage9Vr9UaNNgG118NLXzoGzkN3BuJpg} />
      </div>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="h-[620px] max-w-[516px] overflow-clip relative rounded-[12px] shrink-0 w-[516px]" data-name="Image container">
      <Image9Vr9UaNNgG118NLXzoGzkN3BuJpg />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">[Our Vision]</p>
      </div>
    </div>
  );
}

function OurVision() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[83px]" data-name="[Our Vision]">
      <Container62 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="font-medium h-[127.3px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[31px] w-[515.33px]">
        <p className="leading-[62.4px]">{`Shaping The Future of `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[95.9px] w-[217.389px]">
        <p className="leading-[62.4px]">{`Business `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[217.02px] top-[93.15px] w-[169.712px]">
        <p className="leading-[62.4px]">Success</p>
      </div>
    </div>
  );
}

function ShapingTheFutureOfBusinessSuccess() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Shaping The Future of Business Success">
      <Heading9 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Header">
      <OurVision />
      <ShapingTheFutureOfBusinessSuccess />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`At Optimo, our mission is to empower businesses with strategic solutions that `}</p>
        <p>drive growth, efficiency, and transformation.</p>
      </div>
    </div>
  );
}

function AtOptimoOurMissionIsToEmpowerBusinessesWithStrategicSolutionsThatDriveGrowthEfficiencyAndTransformation1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="At Optimo, our mission is to empower businesses with strategic solutions that drive growth, efficiency, and transformation.">
      <Container63 />
    </div>
  );
}

function HeaderDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] items-start relative shrink-0 w-full" data-name="Header & desc">
      <Header6 />
      <AtOptimoOurMissionIsToEmpowerBusinessesWithStrategicSolutionsThatDriveGrowthEfficiencyAndTransformation1 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[22.4px]">Innovate continuously to stay ahead in a changing market</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container64 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group12 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[16px] top-[3.75px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Medium6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Medium">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies3 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[22.4px]">Empower businesses to lead with confidence and clarity</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container66 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group13 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[16px] top-[3.75px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Medium7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Medium">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies4 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] w-full">
        <p className="leading-[22.4px]">Build sustainable growth through forward-thinking strategies</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container68 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Group">
      <div className="absolute inset-[23.43%_7.8%_17.18%_10.93%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0039 9.50189">
          <path d={svgPaths.p2a4e8a80} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group14 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[16px] top-[3.75px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Medium8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Medium">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies5 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Features3() {
  return (
    <div className="content-stretch flex flex-col gap-[13.2px] items-start relative shrink-0 w-full" data-name="Features">
      <Medium6 />
      <Medium7 />
      <Medium8 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.89px)] top-[-0.75px] w-[82px]" data-name="View Details">
      <Container71 />
    </div>
  );
}

function ViewDetails7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.5px)] top-[27.39px] w-[46.95px]" data-name="View Details">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails6 />
      <ViewDetails7 />
    </div>
  );
}

function Group15() {
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

function Svg16() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group15 />
    </div>
  );
}

function Container72() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Group16() {
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

function Svg17() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group16 />
    </div>
  );
}

function Container73() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container72 />
      <Container73 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow3 />
        </div>
      </div>
    </div>
  );
}

function LinkBlue2() {
  return (
    <div className="bg-[#1d1ee3] flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Link - Blue">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text3 />
          <ArrowPlaceholder3 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col h-[56.8px] items-start justify-center pt-[0.8px] relative shrink-0 w-[174px]" data-name="Container">
      <LinkBlue2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[39.2px] items-start relative shrink-0 w-[564px]" data-name="Content">
      <HeaderDesc1 />
      <Features3 />
      <Container70 />
    </div>
  );
}

function Vision() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-full" data-name="Vision">
      <ImageContainer2 />
      <Content3 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start max-w-[1200px] px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <Mission />
      <Vision />
    </div>
  );
}

function SectionOurMissionVision() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[3042.89px]" data-name="Section - Our mission & vision">
      <Container48 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">[Our Expertise]</p>
      </div>
    </div>
  );
}

function OurExpertise() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[106px]" data-name="[Our Expertise]">
      <Container75 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full whitespace-nowrap">
        <p className="leading-[62.4px]">The Core Principles</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="font-medium h-[64.9px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-0 top-[33.5px] w-[103.46px]">
        <p className="leading-[62.4px]">{`that `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[103.1px] top-[30.75px] w-[204.349px]">
        <p className="leading-[62.4px]">Guide Us</p>
      </div>
    </div>
  );
}

function TheCorePrinciplesThatGuideUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[444px] relative shrink-0 w-[444px]" data-name="The Core Principles that Guide Us">
      <Heading10 />
      <Heading11 />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[684px]" data-name="Header">
      <OurExpertise />
      <TheCorePrinciplesThatGuideUs />
    </div>
  );
}

function AtOptimoOurMissionIsToEmpowerBusinessesWithStrategicSolutionsThatDriveGrowthEfficiencyAndTransformation2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[456px]" data-name="At Optimo, our mission is to empower businesses with strategic solutions that drive growth, efficiency, and transformation.">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[25.2px] relative shrink-0 text-[18px] text-[rgba(3,3,15,0.7)] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`At Optimo, our mission is to empower businesses with `}</p>
        <p className="mb-0">{`strategic solutions that drive growth, efficiency, and `}</p>
        <p>transformation.</p>
      </div>
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex h-[161.7px] items-end justify-between relative shrink-0 w-full" data-name="Header & button">
      <Header7 />
      <AtOptimoOurMissionIsToEmpowerBusinessesWithStrategicSolutionsThatDriveGrowthEfficiencyAndTransformation2 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[28px] w-full">
        <p className="leading-[36px]">[01] Client-Centered Thinking</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading12 />
    </div>
  );
}

function Plus() {
  return (
    <div className="bg-[#dddeff] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
      <div className="absolute flex h-[2px] items-center justify-center left-[8px] top-[13px] w-[12px]">
        <div className="flex-none rotate-180">
          <div className="bg-[#1d1ee3] h-[2px] rounded-[10px] w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[2px] items-center justify-center left-[8px] top-[13px] w-[12px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#1d1ee3] h-[12px] rounded-[10px] w-[2px]" />
        </div>
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Question">
      <CanITrainTheAiWithMyOwnContent />
      <Plus />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We put our clients first—understanding their goals, challenges, and customers to `}</p>
        <p>deliver tailored solutions that create real value.</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[600px] relative shrink-0 w-full" data-name="Container">
      <Container79 />
    </div>
  );
}

function Answer() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex flex-col items-start pr-[20px] relative w-full">
        <Container78 />
      </div>
    </div>
  );
}

function OpenV() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip py-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Open v1">
      <Question />
      <Answer />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <OpenV />
    </div>
  );
}

function Divider() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[28px] w-full">
        <p className="leading-[36px]">[02] Creative with Purpose</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading13 />
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

function Question1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Question">
      <CanITrainTheAiWithMyOwnContent1 />
      <Plus1 />
    </div>
  );
}

function ClosedV() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Closed v1">
      <Question1 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ClosedV />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[28px] w-full">
        <p className="leading-[36px]">[03] Data-Driven Decisions</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading14 />
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

function Question2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Question">
      <CanITrainTheAiWithMyOwnContent2 />
      <Plus2 />
    </div>
  );
}

function ClosedV1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Closed v1">
      <Question2 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ClosedV1 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[28px] w-full">
        <p className="leading-[36px]">[04] Collaboration Over Ego</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading15 />
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

function Question3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Question">
      <CanITrainTheAiWithMyOwnContent3 />
      <Plus3 />
    </div>
  );
}

function ClosedV2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Closed v1">
      <Question3 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ClosedV2 />
    </div>
  );
}

function Divider3() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[28px] w-full">
        <p className="leading-[36px]">[05] Always Evolving</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading16 />
    </div>
  );
}

function Plus4() {
  return (
    <div className="bg-[#1d1ee3] overflow-clip relative rounded-[28px] shrink-0 size-[28px]" data-name="Plus">
      <div className="absolute bg-white h-[2px] left-[8px] opacity-62 rounded-[10px] top-[13px] w-[12px]" />
      <div className="absolute bg-white h-[12px] left-[13px] opacity-62 rounded-[10px] top-[8px] w-[2px]" />
    </div>
  );
}

function Question4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Question">
      <CanITrainTheAiWithMyOwnContent4 />
      <Plus4 />
    </div>
  );
}

function ClosedV3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Closed v1">
      <Question4 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ClosedV3 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container77 />
      <Divider />
      <Container80 />
      <Divider1 />
      <Container81 />
      <Divider2 />
      <Container82 />
      <Divider3 />
      <Container83 />
    </div>
  );
}

function MediumShotPeopleWorkingTogetherIracZ5SjW5GbB4K7Vpo1KzGh04SPng() {
  return (
    <div className="h-full relative rounded-[12px] shrink-0 w-[455px]" data-name="medium-shot-people-working-together → IracZ5SjW5gbB4K7Vpo1kzGh04s.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute h-[102.17%] left-0 max-w-none top-[-1.08%] w-full" src={imgMediumShotPeopleWorkingTogetherIracZ5SjW5GbB4K7Vpo1KzGh04SPng} />
      </div>
    </div>
  );
}

function MediumShotPeopleWorkingTogetherIracZ5SjW5GbB4K7Vpo1KzGh04SPngAlignStretch() {
  return (
    <div className="content-stretch flex items-start justify-center relative self-stretch shrink-0" data-name="medium-shot-people-working-together → IracZ5SjW5gbB4K7Vpo1kzGh04s.png:align-stretch">
      <MediumShotPeopleWorkingTogetherIracZ5SjW5GbB4K7Vpo1KzGh04SPng />
    </div>
  );
}

function Principle() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Principle 1">
      <Container76 />
      <MediumShotPeopleWorkingTogetherIracZ5SjW5GbB4K7Vpo1KzGh04SPngAlignStretch />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start max-w-[1200px] pt-[120px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <HeaderButton />
      <Principle />
    </div>
  );
}

function SectionOurExpertise() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[4642.89px]" data-name="Section - Our expertise">
      <Container74 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] w-full">
        <p className="leading-[22.4px]">[Our Process]</p>
      </div>
    </div>
  );
}

function OurProcess1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Our Process]">
      <Container85 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[0] pb-[3.5px] relative shrink-0 text-[#03030f] text-[52px] w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center mb-[-0.85px] relative shrink-0">
        <p className="leading-[62.4px]">{`Step-by-Step to `}</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] italic justify-center mb-[-0.85px] relative shrink-0">
        <p className="leading-[62.4px]">Business Growth</p>
      </div>
    </div>
  );
}

function StepByStepToBusinessGrowth() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Step-by-Step to Business Growth">
      <Heading17 />
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Header">
      <OurProcess1 />
      <StepByStepToBusinessGrowth />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] w-full">
        <p className="leading-[25.2px]">How We Turn Strategy Into Measurable Success</p>
      </div>
    </div>
  );
}

function HowWeTurnStrategyIntoMeasurableSuccess() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="How We Turn Strategy Into Measurable Success">
      <Container86 />
    </div>
  );
}

function HeaderDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] items-start pointer-events-auto sticky top-0 w-[542px]" data-name="Header & desc">
      <Header8 />
      <HowWeTurnStrategyIntoMeasurableSuccess />
    </div>
  );
}

function Line1() {
  return <div className="absolute bg-[#1d1ee3] h-[528.8px] left-0 right-0 top-0" data-name="Line" />;
}

function Line() {
  return (
    <div className="absolute bg-[#eaeaff] bottom-[110px] left-[24px] overflow-clip top-[110px] w-px" data-name="Line">
      <Line1 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#090ce3] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">01</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[17px]" data-name="Container">
      <Container91 />
    </div>
  );
}

function Inactive() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[48px] w-full" data-name="Inactive">
      <Container90 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[48px]" data-name="Container">
      <Inactive />
    </div>
  );
}

function Image6() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="image">
          <path d={svgPaths.p361ba800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[27px]" data-name="image fill">
      <Image6 />
    </div>
  );
}

function Mask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[27px]" data-name="Mask">
      <ImageFill6 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Mask Group">
      <Mask3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[27px] top-1/2" data-name="Background" />
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[60px]" data-name="Icon container">
      <MaskGroup3 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">{`Discover & Diagnose`}</p>
      </div>
    </div>
  );
}

function StrategicPlanning4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Heading18 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We begin by deeply understanding your organization’s `}</p>
        <p>unique challenges, opportunities, and goals</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container93 />
    </div>
  );
}

function Statistic3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <StrategicPlanning4 />
      <Over300ClientsCompleteHighImpactProjects3 />
    </div>
  );
}

function Large() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Large">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer3 />
        <Statistic3 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-0 relative" data-name="Container">
      <Large />
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="Step 1">
      <Container89 />
      <Container92 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1011e3] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">02</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[21px]" data-name="Container">
      <Container96 />
    </div>
  );
}

function Inactive1() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[48px] w-full" data-name="Inactive">
      <Container95 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[48px]" data-name="Container">
      <Inactive1 />
    </div>
  );
}

function Image7() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="image">
          <path d={svgPaths.p160cb200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[27px]" data-name="image fill">
      <Image7 />
    </div>
  );
}

function Mask4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[27px]" data-name="Mask">
      <ImageFill7 />
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Mask Group">
      <Mask4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[27px] top-1/2" data-name="Background" />
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[60px]" data-name="Icon container">
      <MaskGroup4 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">{`Strategize & Plan`}</p>
      </div>
    </div>
  );
}

function StrategicPlanning5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Heading19 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`With insights in hand, we co-create a tailored strategy that `}</p>
        <p>aligns with your business objectives.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container98 />
    </div>
  );
}

function Statistic4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <StrategicPlanning5 />
      <Over300ClientsCompleteHighImpactProjects4 />
    </div>
  );
}

function Large1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Large">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer4 />
        <Statistic4 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-0 relative" data-name="Container">
      <Large1 />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="Step 2">
      <Container94 />
      <Container97 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1011e3] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">03</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[22px]" data-name="Container">
      <Container101 />
    </div>
  );
}

function Inactive2() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[48px] w-full" data-name="Inactive">
      <Container100 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[48px]" data-name="Container">
      <Inactive2 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[6.72%_6.67%_3.28%_3.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3005 24.3">
        <g id="Group">
          <path d={svgPaths.p27db2200} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p16621500} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Image8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27px]" data-name="image">
      <Group17 />
    </div>
  );
}

function ImageFill8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[27px]" data-name="image fill">
      <Image8 />
    </div>
  );
}

function Mask5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[27px]" data-name="Mask">
      <ImageFill8 />
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="Mask Group">
      <Mask5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[27px] top-1/2" data-name="Background" />
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="bg-[#eaeaff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[60px]" data-name="Icon container">
      <MaskGroup5 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">{`Implement & Optimize`}</p>
      </div>
    </div>
  );
}

function StrategicPlanning6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Strategic Planning">
      <Heading20 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We translate strategy into action by deploying solutions, `}</p>
        <p>streamlining processes, and enabling teams.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container103 />
    </div>
  );
}

function Statistic5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <StrategicPlanning6 />
      <Over300ClientsCompleteHighImpactProjects5 />
    </div>
  );
}

function Large2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Large">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer5 />
        <Statistic5 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-0 relative" data-name="Container">
      <Large2 />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="Step">
      <Container99 />
      <Container102 />
    </div>
  );
}

function Variant() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start justify-center relative shrink-0 w-full" data-name="Variant 1">
      <Line />
      <Step1 />
      <Step2 />
      <Step />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-full" data-name="Container">
      <Variant />
    </div>
  );
}

function Container104() {
  return <div className="h-[802px] shrink-0 w-full" data-name="Container" />;
}

function Container105() {
  return <div className="h-[802px] shrink-0 w-full" data-name="Container" />;
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[628px] top-[120px] w-[542px]" data-name="Container">
      <Container88 />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[2612.8px] max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <div className="absolute bottom-0 h-[2493.550048828125px] left-[30px] pointer-events-none top-[119.25px]">
        <HeaderDesc2 />
      </div>
      <Container87 />
    </div>
  );
}

function SectionProcess() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex items-center justify-center left-0 px-[120px] right-0 top-[5506.59px]" data-name="Section - Process">
      <Container84 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1ee3] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]">[Team Members]</p>
      </div>
    </div>
  );
}

function TeamMember() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Team Member]">
      <Container107 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="font-medium h-[127.3px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] text-center w-full" data-name="Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-[calc(50%+5.94px)] top-[31px] w-[557.119px]">
        <p className="leading-[62.4px]">{`Meet the Beautiful team `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter_Tight:Medium',sans-serif] h-[63px] justify-center left-[calc(50%-85.21px)] top-[95.9px] w-[168.681px]">
        <p className="leading-[62.4px]">{`behind `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[calc(50%+84.35px)] top-[93.15px] w-[171.093px]">
        <p className="leading-[62.4px]">Optimo</p>
      </div>
    </div>
  );
}

function MeetTheBeautifulTeamBehindOptimo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[634px] relative shrink-0 w-[634px]" data-name="Meet the Beautiful team behind Optimo">
      <Heading21 />
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <TeamMember />
      <MeetTheBeautifulTeamBehindOptimo />
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute inset-[-5.47%_-20.34px_-5.47%_-20px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.03%] max-w-none top-0 w-[100.07%]" src={imgImage} />
      </div>
    </div>
  );
}

function DavidChenHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="David Chen → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">David Chen</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[25.2px]">Consultant</p>
      </div>
    </div>
  );
}

function Consultant() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Consultant">
      <Container109 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <DavidChenHeading />
      <Consultant />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[10.94%_14.06%_10.9%_14.02%]" data-name="Group">
      <div className="absolute inset-[10.94%_14.06%_10.9%_14.02%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3821 15.6333">
          <path d={svgPaths.p399d0300} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group18 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg18 />
    </div>
  );
}

function LinkSocial() {
  return (
    <div className="backdrop-blur-[0.75px] bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0" data-name="Link - Social">
      <Container110 />
    </div>
  );
}

function Container108() {
  return (
    <div className="backdrop-blur-[0.75px] bg-[rgba(3,3,15,0.7)] content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[337px]" data-name="Container">
      <Name />
      <LinkSocial />
    </div>
  );
}

function Staff1() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[460px] items-center justify-end overflow-clip p-[20px] relative rounded-[12px] row-1 shrink-0 w-[342px]" data-name="Staff">
      <Image9 />
      <Container108 />
    </div>
  );
}

function StaffAvatar() {
  return (
    <div className="absolute inset-[0_0.01px_0_0]" data-name="staff avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.04%] max-w-none top-0 w-[100.07%]" src={imgStaffAvatar} />
      </div>
    </div>
  );
}

function Image10() {
  return (
    <div className="absolute inset-[-5.47%_-20.34px_-5.47%_-20px]" data-name="Image">
      <StaffAvatar />
    </div>
  );
}

function DavidChenHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="David Chen → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">David Chen</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[25.2px]">Consultant</p>
      </div>
    </div>
  );
}

function Consultant1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Consultant">
      <Container112 />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <DavidChenHeading1 />
      <Consultant1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.875 16.875">
          <path d={svgPaths.pfb76600} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group19 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg19 />
    </div>
  );
}

function LinkSocial1() {
  return (
    <div className="backdrop-blur-[0.75px] bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0" data-name="Link - Social">
      <Container113 />
    </div>
  );
}

function Container111() {
  return (
    <div className="backdrop-blur-[0.75px] bg-[rgba(3,3,15,0.7)] content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[337px]" data-name="Container">
      <Name1 />
      <LinkSocial1 />
    </div>
  );
}

function Staff2() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[460px] items-center justify-end overflow-clip p-[20px] relative rounded-[12px] row-1 shrink-0 w-[342px]" data-name="Staff">
      <Image10 />
      <Container111 />
    </div>
  );
}

function Image11() {
  return (
    <div className="absolute inset-[-5.47%_-20.33px_-5.46%_-20px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.58%] max-w-none top-0 w-[115.16%]" src={imgImage1} />
      </div>
    </div>
  );
}

function DavidChenHeading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="David Chen → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">David Chen</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[25.2px]">Consultant</p>
      </div>
    </div>
  );
}

function Consultant2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Consultant">
      <Container115 />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <DavidChenHeading2 />
      <Consultant2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[10.94%_14.06%_10.9%_14.02%]" data-name="Group">
      <div className="absolute inset-[10.94%_14.06%_10.9%_14.02%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3821 15.6333">
          <path d={svgPaths.p399d0300} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group20 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg20 />
    </div>
  );
}

function LinkSocial2() {
  return (
    <div className="backdrop-blur-[0.75px] bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0" data-name="Link - Social">
      <Container116 />
    </div>
  );
}

function Container114() {
  return (
    <div className="backdrop-blur-[0.75px] bg-[rgba(3,3,15,0.7)] content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[337px]" data-name="Container">
      <Name2 />
      <LinkSocial2 />
    </div>
  );
}

function Staff3() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[460px] items-center justify-end overflow-clip p-[20px] relative rounded-[12px] row-1 shrink-0 w-[343px]" data-name="Staff">
      <Image11 />
      <Container114 />
    </div>
  );
}

function Image12() {
  return (
    <div className="absolute inset-[-5.47%_-20.34px_-5.47%_-20px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.03%] max-w-none top-0 w-[100.07%]" src={imgImage2} />
      </div>
    </div>
  );
}

function DavidChenHeading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="David Chen → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">David Chen</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[25.2px]">Consultant</p>
      </div>
    </div>
  );
}

function Consultant3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Consultant">
      <Container119 />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <DavidChenHeading3 />
      <Consultant3 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.875 16.875">
          <path d={svgPaths.pfb76600} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group21 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg21 />
    </div>
  );
}

function LinkSocial3() {
  return (
    <div className="backdrop-blur-[0.75px] bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0" data-name="Link - Social">
      <Container120 />
    </div>
  );
}

function Container118() {
  return (
    <div className="backdrop-blur-[0.75px] bg-[rgba(3,3,15,0.7)] content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[337px]" data-name="Container">
      <Name3 />
      <LinkSocial3 />
    </div>
  );
}

function Staff4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Staff">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end p-[20px] relative size-full">
          <Image12 />
          <Container118 />
        </div>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[460px] items-start justify-center relative row-2 shrink-0 w-[342px]" data-name="Container">
      <Staff4 />
    </div>
  );
}

function StaffAvatar1() {
  return (
    <div className="absolute inset-[0_0.01px_0_0]" data-name="staff avatar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.04%] max-w-none top-0 w-[100.07%]" src={imgStaffAvatar1} />
      </div>
    </div>
  );
}

function Image13() {
  return (
    <div className="absolute inset-[-5.47%_-20.34px_-5.47%_-20px]" data-name="Image">
      <StaffAvatar1 />
    </div>
  );
}

function DavidChenHeading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="David Chen → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">David Chen</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[25.2px]">Consultant</p>
      </div>
    </div>
  );
}

function Consultant4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Consultant">
      <Container122 />
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <DavidChenHeading4 />
      <Consultant4 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[10.94%_14.06%_10.9%_14.02%]" data-name="Group">
      <div className="absolute inset-[10.94%_14.06%_10.9%_14.02%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3821 15.6333">
          <path d={svgPaths.p399d0300} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group22 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg22 />
    </div>
  );
}

function LinkSocial4() {
  return (
    <div className="backdrop-blur-[0.75px] bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0" data-name="Link - Social">
      <Container123 />
    </div>
  );
}

function Container121() {
  return (
    <div className="backdrop-blur-[0.75px] bg-[rgba(3,3,15,0.7)] content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[337px]" data-name="Container">
      <Name4 />
      <LinkSocial4 />
    </div>
  );
}

function Staff5() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[460px] items-center justify-end overflow-clip p-[20px] relative rounded-[12px] row-2 shrink-0 w-[342px]" data-name="Staff">
      <Image13 />
      <Container121 />
    </div>
  );
}

function Image14() {
  return (
    <div className="absolute inset-[-5.47%_-20.33px_-5.46%_-20px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.03%] max-w-none top-0 w-[100.07%]" src={imgImage3} />
      </div>
    </div>
  );
}

function DavidChenHeading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="David Chen → Heading 6">
      <div className="flex flex-col font-['Inter_Tight:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">David Chen</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[25.2px]">Consultant</p>
      </div>
    </div>
  );
}

function Consultant5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Consultant">
      <Container125 />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <DavidChenHeading5 />
      <Consultant5 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[7.81%]" data-name="Group">
      <div className="absolute inset-[7.81%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.875 16.875">
          <path d={svgPaths.pfb76600} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group23 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[20px]" data-name="Container">
      <Svg23 />
    </div>
  );
}

function LinkSocial5() {
  return (
    <div className="backdrop-blur-[0.75px] bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[12px] shrink-0" data-name="Link - Social">
      <Container126 />
    </div>
  );
}

function Container124() {
  return (
    <div className="backdrop-blur-[0.75px] bg-[rgba(3,3,15,0.7)] content-stretch flex gap-[10px] items-start overflow-clip p-[16px] relative rounded-[8px] shrink-0 w-[337px]" data-name="Container">
      <Name5 />
      <LinkSocial5 />
    </div>
  );
}

function Staff6() {
  return (
    <div className="col-3 content-stretch flex flex-col h-[460px] items-center justify-end overflow-clip p-[20px] relative rounded-[12px] row-2 shrink-0 w-[343px]" data-name="Staff">
      <Image14 />
      <Container124 />
    </div>
  );
}

function Staff() {
  return (
    <div className="relative shrink-0 w-full" data-name="Staff">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="gap-y-[60px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] px-[16px] relative w-full">
          <Staff1 />
          <Staff2 />
          <Staff3 />
          <Container117 />
          <Staff5 />
          <Staff6 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center justify-center max-w-[1200px] min-w-[1200px] overflow-clip pt-[119.25px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Header9 />
      <Staff />
    </div>
  );
}

function SectionTeam() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[8119.39px]" data-name="Section - Team">
      <Container106 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">[CTA]</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41px]" data-name="[CTA]">
      <Container128 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start pb-[3px] relative shrink-0 text-[#eaeaff] text-[52px] w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center leading-[62px] mb-[-0.25px] relative shrink-0 whitespace-pre">
        <p className="mb-0">{`Work with Experts to `}</p>
        <p>{`Grow Faster & Run `}</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] italic justify-center leading-[0] mb-[-0.25px] relative shrink-0">
        <p className="leading-[62px]">Smarter</p>
      </div>
    </div>
  );
}

function WorkWithExpertsToGrowFasterRunSmarter() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Work with Experts to Grow Faster & Run Smarter">
      <Heading22 />
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Header">
      <Cta />
      <WorkWithExpertsToGrowFasterRunSmarter />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.89px)] top-[-0.75px] w-[82px]" data-name="View Details">
      <Container130 />
    </div>
  );
}

function ViewDetails9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.5px)] top-[27.4px] w-[46.95px]" data-name="View Details">
      <div className="h-[22.4px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails8 />
      <ViewDetails9 />
    </div>
  );
}

function Group24() {
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

function Svg24() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group24 />
    </div>
  );
}

function Container131() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg24 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6364 13.1363">
          <path d={svgPaths.p345e5300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="h-[20.011px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group25 />
    </div>
  );
}

function Container132() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[-0.01px] top-[calc(50%+0.01px)] w-[20.011px]" data-name="Container">
      <Svg25 />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container131 />
      <Container132 />
    </div>
  );
}

function ArrowPlaceholder4() {
  return (
    <div className="absolute aspect-[48/48] bg-[#1d1ee3] bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow4 />
        </div>
      </div>
    </div>
  );
}

function LinkWhite() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Link - White">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text4 />
          <ArrowPlaceholder4 />
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[167px]" data-name="Container">
      <LinkWhite />
    </div>
  );
}

function HeaderButton1() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Header & button">
      <Header10 />
      <Container129 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Schedule a Free Consultation</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container133 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Group">
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8125 13.8125">
          <path d={svgPaths.p33c5f180} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group26 />
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg26 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies6 />
          <Container134 />
        </div>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Discover Custom Solutions</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container135 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Group">
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8125 13.8125">
          <path d={svgPaths.p33c5f180} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group27 />
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg27 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies7 />
          <Container136 />
        </div>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Start Building Your Competitive Advantage</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Future-Ready Strategies">
      <Container137 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Group">
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8125 13.8125">
          <path d={svgPaths.p33c5f180} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group28 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg28 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies8 />
          <Container138 />
        </div>
      </div>
    </div>
  );
}

function Features4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[491.04px]" data-name="Features">
      <Small />
      <Small1 />
      <Small2 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[59.99px] items-start justify-center overflow-clip pb-[20.01px] pt-[19.25px] px-[20px] relative rounded-[12px] shrink-0 w-[568px]" data-name="Left">
      <HeaderButton1 />
      <Features4 />
    </div>
  );
}

function Image15() {
  return (
    <div className="absolute h-[502px] left-0 top-0 w-[544px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="h-[502px] overflow-clip relative rounded-[12px] shrink-0 w-[528px]" data-name="Right">
      <Image15 />
    </div>
  );
}

function BlueContainer() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[16px] shrink-0 w-full" data-name="Blue container">
      <div className="content-stretch flex gap-[20px] items-start p-[12px] relative w-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[1200px] overflow-clip px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <BlueContainer />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[9435.09px]" data-name="Section - CTA">
      <Container127 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] whitespace-nowrap">
        <p className="leading-[33.6px]">Newsletter</p>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[116px]" data-name="Newsletter">
      <Heading23 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[16px] w-full">
        <p className="leading-[normal]">Enter your email address</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[10.25px] relative size-full">
          <Container140 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Label">
      <Input />
      <div className="absolute inset-0 rounded-[100px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Subscribe</p>
      </div>
    </div>
  );
}

function ViewDetails10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.68px)] top-[-0.75px] w-[71px]" data-name="View Details">
      <Container142 />
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[23px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails10 />
    </div>
  );
}

function Group29() {
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

function Svg29() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group29 />
    </div>
  );
}

function Container143() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[30px] top-1/2 w-[19.997px]" data-name="Container">
      <Svg29 />
    </div>
  );
}

function Group30() {
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

function Svg30() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group30 />
    </div>
  );
}

function Container144() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg30 />
    </div>
  );
}

function Arrow5() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container143 />
      <Container144 />
    </div>
  );
}

function ArrowPlaceholder5() {
  return (
    <div className="absolute aspect-[32/32] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[0.44px] pr-[0.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow5 />
        </div>
      </div>
    </div>
  );
}

function ButtonDefaultLinkVariant() {
  return (
    <div className="bg-[#1d1ee3] flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Button - Default → Link - Variant 2">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[50px] py-[4px] relative size-full">
          <Text5 />
          <ArrowPlaceholder5 />
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[145px]" data-name="Container">
      <ButtonDefaultLinkVariant />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="Form">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-start p-[6px] relative w-full">
          <Label />
          <Container141 />
        </div>
      </div>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[473px] relative shrink-0 w-[473px]" data-name="Form & Header">
      <Newsletter />
      <Form />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">Let’s transform your vision into results.</p>
      </div>
    </div>
  );
}

function LetsTransformYourVisionIntoResults() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Let’s transform your vision into results.">
      <Container145 />
    </div>
  );
}

function Subscribe() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[535px]" data-name="Subscribe">
      <FormHeader />
      <LetsTransformYourVisionIntoResults />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">Main Pages</p>
      </div>
    </div>
  );
}

function MainPages1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Main Pages">
      <Heading24 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[0px] whitespace-nowrap">
        <p className="leading-[24px] text-[16px]">Home</p>
      </div>
    </div>
  );
}

function Home2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[42px]" data-name="Home">
      <Container146 />
    </div>
  );
}

function Home3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41.58px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home2 />
      <Home3 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Case Study</p>
      </div>
    </div>
  );
}

function Home4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[80px]" data-name="Home">
      <Container147 />
    </div>
  );
}

function Home5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[79.27px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home4 />
      <Home5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title1 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function Home6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[47px]" data-name="Home">
      <Container148 />
    </div>
  );
}

function Home7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[46.56px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home6 />
      <Home7 />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title2 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Blog</p>
      </div>
    </div>
  );
}

function Home8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[31px]" data-name="Home">
      <Container149 />
    </div>
  );
}

function Home9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[30.5px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home8 />
      <Home9 />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title3 />
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function MainPages() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-h-px min-w-px relative" data-name="Main pages">
      <MainPages1 />
      <Links1 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">Company</p>
      </div>
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Company">
      <Heading25 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Home10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[55px]" data-name="Home">
      <Container150 />
    </div>
  );
}

function Home11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[54.95px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home10 />
      <Home11 />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title4 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function Home12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[60px]" data-name="Home">
      <Container151 />
    </div>
  );
}

function Home13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[59.03px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home12 />
      <Home13 />
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title5 />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[0px] whitespace-nowrap">
        <p className="leading-[24px] text-[16px]">About Us</p>
      </div>
    </div>
  );
}

function Home14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[64px]" data-name="Home">
      <Container152 />
    </div>
  );
}

function Home15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[63.92px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home14 />
      <Home15 />
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title6 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function Home16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[47px]" data-name="Home">
      <Container153 />
    </div>
  );
}

function Home17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[46.56px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home16 />
      <Home17 />
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title7 />
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Links">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-h-px min-w-px relative" data-name="Company">
      <Company1 />
      <Links2 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[24px] w-full">
        <p className="leading-[33.6px]">{`Template `}</p>
      </div>
    </div>
  );
}

function Template1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Template">
      <Heading26 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Service Details</p>
      </div>
    </div>
  );
}

function Home18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[102px]" data-name="Home">
      <Container154 />
    </div>
  );
}

function Home19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[101.5px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home18 />
      <Home19 />
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title8 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Case Study Details</p>
      </div>
    </div>
  );
}

function Home20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[130px]" data-name="Home">
      <Container155 />
    </div>
  );
}

function Home21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[129.34px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home20 />
      <Home21 />
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title9 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Changelog</p>
      </div>
    </div>
  );
}

function Home22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[75px]" data-name="Home">
      <Container156 />
    </div>
  );
}

function Home23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[74.89px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home22 />
      <Home23 />
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title10 />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">404</p>
      </div>
    </div>
  );
}

function Home24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[29px]" data-name="Home">
      <Container157 />
    </div>
  );
}

function Home25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[28.28px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home24 />
      <Home25 />
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <Title11 />
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Links">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Template() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22px] items-start min-h-px min-w-px relative" data-name="Template">
      <Template1 />
      <Links3 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[40px] items-start max-w-[485px] relative shrink-0 w-[485px]" data-name="Links">
      <MainPages />
      <Company />
      <Template />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[120px] items-start relative shrink-0 w-full">
      <Subscribe />
      <Links />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Email</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Email">
      <Container158 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">contactinfo@gmail.com</p>
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <Link12 />
    </div>
  );
}

function ContactinfoGmailCom() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[210px]" data-name="contactinfo@gmail.com">
      <Heading27 />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Email">
      <Email1 />
      <ContactinfoGmailCom />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Visit Us</p>
      </div>
    </div>
  );
}

function VisitUs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[45px]" data-name="Visit Us">
      <Container159 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">Los Angeles, CA 90017 United States</p>
      </div>
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <Link13 />
    </div>
  );
}

function LosAngelesCa90017UnitedStates() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[326px]" data-name="Los Angeles, CA 90017 United States">
      <Heading28 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Address">
      <VisitUs />
      <LosAngelesCa90017UnitedStates />
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Call us Now</p>
      </div>
    </div>
  );
}

function CallUsNow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="Call us Now">
      <Container160 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">+99 1234 5478</p>
      </div>
    </div>
  );
}

function Heading29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <Link14 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[134px]" data-name="+99 1234 5478">
      <Heading29 />
    </div>
  );
}

function Call() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Call">
      <CallUsNow />
      <Component />
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Contact">
      <Email />
      <Address />
      <Call />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-start relative shrink-0 w-full" data-name="Top">
      <Frame />
      <Contact />
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaff] text-[32px] text-center uppercase whitespace-nowrap">
        <p className="leading-[41.6px]">Optimo</p>
      </div>
    </div>
  );
}

function Optimo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[127px]" data-name="Optimo">
      <Container161 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Changelog</p>
      </div>
    </div>
  );
}

function Home26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[75px]" data-name="Home">
      <Container163 />
    </div>
  );
}

function Home27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[74.89px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home26 />
      <Home27 />
    </div>
  );
}

function Link15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[75px]" data-name="Link">
      <Title12 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <Link15 />
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Terms</p>
      </div>
    </div>
  );
}

function Home28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[43px]" data-name="Home">
      <Container165 />
    </div>
  );
}

function Home29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[42.78px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home28 />
      <Home29 />
    </div>
  );
}

function Link16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title13 />
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[46px]" data-name="Container">
      <Link16 />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Privacy policy">
      <Container162 />
      <div className="bg-white rounded-[6px] shrink-0 size-[6px]" data-name="Circle" />
      <Container164 />
    </div>
  );
}

function LogoPrivacy() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Logo & privacy">
      <Optimo />
      <PrivacyPolicy />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Twitter</p>
      </div>
    </div>
  );
}

function Home30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[48px]" data-name="Home">
      <Container167 />
    </div>
  );
}

function Home31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[47.59px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home30 />
      <Home31 />
    </div>
  );
}

function Link17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title14 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[50px]" data-name="Container">
      <Link17 />
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Home32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[58px]" data-name="Home">
      <Container169 />
    </div>
  );
}

function Home33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[57.13px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home32 />
      <Home33 />
    </div>
  );
}

function Link18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title15 />
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[57px]" data-name="Container">
      <Link18 />
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function Home34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[69px]" data-name="Home">
      <Container171 />
    </div>
  );
}

function Home35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[68.22px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home34 />
      <Home35 />
    </div>
  );
}

function Link19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title16 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link19 />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Home36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[69px]" data-name="Home">
      <Container173 />
    </div>
  );
}

function Home37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[68.7px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home36 />
      <Home37 />
    </div>
  );
}

function Link20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title17 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link20 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-[470px]" data-name="Socials">
      <Container166 />
      <Container168 />
      <Container170 />
      <Container172 />
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[21px]">© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}

function Component2025AllRightsReserved() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164px]" data-name="© 2025 .All rights reserved.">
      <Container174 />
    </div>
  );
}

function SocialsCopyright() {
  return (
    <div className="content-stretch flex gap-[465px] items-start pt-[12px] relative shrink-0 w-full" data-name="Socials & Copyright">
      <Socials />
      <Component2025AllRightsReserved />
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.6)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[8px] shrink-0 w-full" data-name="Bottom">
      <div className="content-stretch flex flex-col gap-[42px] items-start px-[20px] py-[24px] relative w-full">
        <LogoPrivacy />
        <SocialsCopyright />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center max-w-[1200px] pb-[20px] pt-[80px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Top />
      <Bottom />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute bg-[#eaeaff] content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[10201.09px]" data-name="Footer - Desktop">
      <Container139 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[10866.29px] min-h-[900px] relative shrink-0 w-full" data-name="End of bodyStart">
      <Container2 />
      <Container21 />
      <SectionHero />
      <SectionLogos />
      <SectionMoreAboutUs />
      <SectionOurProcess />
      <SectionOurMissionVision />
      <SectionOurExpertise />
      <SectionProcess />
      <SectionTeam />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[10201.09px]" data-name="Rectangle" />
      <FooterDesktop />
    </div>
  );
}

export default function Component1440WDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1440w default">
      <Container />
      <EndOfBodyStart />
    </div>
  );
}