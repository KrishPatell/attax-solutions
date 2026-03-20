import svgPaths from "./svg-imcphax3ut";
import imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng from "figma:asset/e82db81198b2304297ed883d9a3eb6c48b756fa4.png";
import imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png from "figma:asset/f1e8b462dab4906b6acf1acaba0b0e886c26a681.png";
import imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng from "figma:asset/337c312991b50c5e0c66d715307b26ab129a28f4.png";
import imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng from "figma:asset/e4462a2f0c2f4c6d408fd3baf51ac28561f57c9d.png";
import imgM7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng from "figma:asset/dcd7a2d59386ac22bbf6091d28ff6d91526ac58d.png";
import imgM1DgmyL7T3EYqchbDWnkQNgJw5OPng from "figma:asset/435a0845292b6246b32459ea56ab67aeea6283b8.png";
import imgW5PVxNsR3H7FuGOgpM2Cl9C3LUPng from "figma:asset/99fb9b569cfb601e1282f994a554b08e287c5fe9.png";
import imgImage from "figma:asset/e3fe97b9ef553a51f9d20fe70529e64bd45eec23.png";
import { imgBottom } from "./svg-g02lu";

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
        <g clipPath="url(#clip0_19_1314)" id="image">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_19_1314">
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
    <div className="absolute bottom-[2581.61px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
      <LinkLight />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[27.1px] text-center uppercase whitespace-nowrap">
        <p className="leading-[36px]">Optimo</p>
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.9px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
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
    <div className="content-stretch flex gap-[5.99px] items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Home">
      <Home1 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">About Us</p>
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function LinkDesktopAboutUs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59px]" data-name="Link - Desktop → About Us">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">Contact Us</p>
      </div>
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[79px]" data-name="View Details">
      <Container18 />
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.41px] w-[46.97px]" data-name="View Details">
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
    <div className="absolute bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip p-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
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
        <g clipPath="url(#clip0_19_1326)" id="image">
          <path d={svgPaths.p36329e00} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_19_1326">
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
    <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[-16px] w-[61.31px]" data-name="Container">
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
    <div className="absolute bottom-[2644.61px] content-stretch flex flex-col h-[36px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <LinkDesktop />
    </div>
  );
}

function ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Cover → voui19yhvlTrMW30lyYkvKkP2U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_1 → Te26rQp4D0RlgnQKdAe90TZYd0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png} />
      </div>
    </div>
  );
}

function ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_2 → 2uHrE7dNBKBOPd52Y9tOXJKt8U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_3 → a3WP6yjGjkY8y1NygXdc9Rm4Yas.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng} />
      </div>
    </div>
  );
}

function ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Cover → voui19yhvlTrMW30lyYkvKkP2U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_1 → Te26rQp4D0RlgnQKdAe90TZYd0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png} />
      </div>
    </div>
  );
}

function ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_2 → 2uHrE7dNBKBOPd52Y9tOXJKt8U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_3 → a3WP6yjGjkY8y1NygXdc9Rm4Yas.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng} />
      </div>
    </div>
  );
}

function ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Cover → voui19yhvlTrMW30lyYkvKkP2U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_1 → Te26rQp4D0RlgnQKdAe90TZYd0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png} />
      </div>
    </div>
  );
}

function ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_2 → 2uHrE7dNBKBOPd52Y9tOXJKt8U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_3 → a3WP6yjGjkY8y1NygXdc9Rm4Yas.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng} />
      </div>
    </div>
  );
}

function ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Cover → voui19yhvlTrMW30lyYkvKkP2U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_1 → Te26rQp4D0RlgnQKdAe90TZYd0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png} />
      </div>
    </div>
  );
}

function ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_2 → 2uHrE7dNBKBOPd52Y9tOXJKt8U.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng} />
      </div>
    </div>
  );
}

function ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Item → Screenshot_3 → a3WP6yjGjkY8y1NygXdc9Rm4Yas.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[162.12%] left-0 max-w-none top-[-31.06%] w-full" src={imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng} />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-208px_0_-572px_0] items-center justify-center" data-name="List">
      <ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng />
      <ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png />
      <ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng />
      <ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng />
      <ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng1 />
      <ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png1 />
      <ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng1 />
      <ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng1 />
      <ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng2 />
      <ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png2 />
      <ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng2 />
      <ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng2 />
      <ItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng3 />
      <ItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png3 />
      <ItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng3 />
      <ItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[52px] left-0 overflow-clip top-0 w-[132px]" data-name="Container">
      <List />
    </div>
  );
}

function Section() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Section">
      <Container27 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px overflow-clip relative rounded-[5px] w-full" data-name="Container">
      <Section />
    </div>
  );
}

function Variant() {
  return (
    <div className="bg-[#121212] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] w-full" data-name="Variant 1">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative size-full">
          <Container26 />
          <div className="absolute inset-0 rounded-[8px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bottom-[2685.61px] content-stretch flex flex-col h-[60px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <Variant />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[14.1px] w-full">
        <p className="leading-[24px]">[Visit Us]</p>
      </div>
    </div>
  );
}

function VisitUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Visit Us]">
      <Container28 />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-semibold h-[90.41px] leading-[0] relative shrink-0 text-[#03030f] w-full" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[87px] justify-center left-0 not-italic text-[71.7px] top-[46.5px] w-[212.48px]">
        <p className="leading-[86.4px]">{`Office `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] h-[87px] italic justify-center left-[212.28px] text-[72px] top-[43px] tracking-[-1.44px] w-[269.91px]">
        <p className="leading-[86.4px]">Location</p>
      </div>
    </div>
  );
}

function OfficeLocation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Office Location">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Header">
      <VisitUs />
      <OfficeLocation />
    </div>
  );
}

function OurOfficeIsConvenientlyLocatedInTheHeartOfThesesCitiesProvidingEasyAccessForClientsAndPartners() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Our office is conveniently located in the heart of theses cities, providing easy access for clients and partners.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.2px] not-italic relative shrink-0 text-[16.2px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our office is conveniently located in the heart of theses cities, `}</p>
        <p>providing easy access for clients and partners.</p>
      </div>
    </div>
  );
}

function HeaderDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header & Desc">
      <Header />
      <OurOfficeIsConvenientlyLocatedInTheHeartOfThesesCitiesProvidingEasyAccessForClientsAndPartners />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="image">
          <path d={svgPaths.p323423e0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[17px]" data-name="image fill">
      <Image3 />
    </div>
  );
}

function IconMask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[17px]" data-name="Icon:mask">
      <ImageFill3 />
    </div>
  );
}

function IconMaskGroup() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Icon:mask-group">
      <IconMask />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[17px] top-1/2" data-name="Icon" />
    </div>
  );
}

function Map() {
  return (
    <div className="aspect-[44/44] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[13.5px] relative rounded-[100px] shrink-0" data-name="Map">
      <IconMaskGroup />
    </div>
  );
}

function UsaHeadquaterHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="USA Headquater → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.1px] w-full">
        <p className="leading-[33.6px]">USA Headquater</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.2px] not-italic relative shrink-0 text-[16.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Los Angeles, CA 90017 `}</p>
        <p>United States</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Los Angeles, CA 90017 United States">
      <Container30 />
    </div>
  );
}

function HeaderDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[10.01px] items-start relative shrink-0 w-full" data-name="Header & Desc">
      <UsaHeadquaterHeading />
      <LosAngelesCa90017UnitedStates />
    </div>
  );
}

function Variant1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Variant 1">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[20px] relative w-full">
          <Map />
          <HeaderDesc1 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[262px]" data-name="Container">
      <Variant1 />
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="image">
          <path d={svgPaths.p323423e0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[17px]" data-name="image fill">
      <Image4 />
    </div>
  );
}

function IconMask1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[17px]" data-name="Icon:mask">
      <ImageFill4 />
    </div>
  );
}

function IconMaskGroup1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Icon:mask-group">
      <IconMask1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[17px] top-1/2" data-name="Icon" />
    </div>
  );
}

function Map1() {
  return (
    <div className="aspect-[44/44] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[13.5px] relative rounded-[100px] shrink-0" data-name="Map">
      <IconMaskGroup1 />
    </div>
  );
}

function UsaHeadquaterHeading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="USA Headquater → Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.1px] w-full">
        <p className="leading-[33.6px]">Europe Headquarter</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.2px] not-italic relative shrink-0 text-[16.5px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Ireland , County Dublin D02 `}</p>
        <p>ABC1</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Los Angeles, CA 90017 United States">
      <Container32 />
    </div>
  );
}

function HeaderDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[10.01px] items-start relative shrink-0 w-full" data-name="Header & Desc">
      <UsaHeadquaterHeading1 />
      <LosAngelesCa90017UnitedStates1 />
    </div>
  );
}

function Variant2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Variant 1">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[20px] relative w-full">
          <Map1 />
          <HeaderDesc2 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[262px]" data-name="Container">
      <Variant2 />
    </div>
  );
}

function Locations() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Locations">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-start min-h-px min-w-px relative" data-name="Right">
      <HeaderDesc />
      <Locations />
    </div>
  );
}

function M7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="m7Ky2jQMrJLdoBZb3FH8ks16q5k.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[122.77%] left-0 max-w-none top-[-11.38%] w-full" src={imgM7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[15.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">{`Dublin `}</p>
      </div>
    </div>
  );
}

function Dublin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[53px]" data-name="Dublin">
      <Container33 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <Dublin />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_278px_230.01px_0] items-start p-[10px] rounded-[16px]" data-name="Image">
      <M7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng />
      <Tag />
    </div>
  );
}

function M1DgmyL7T3EYqchbDWnkQNgJw5OPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="M1dgmyL7T3eYqchbDWnkQNgJw5o.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[122.77%] left-0 max-w-none top-[-11.38%] w-full" src={imgM1DgmyL7T3EYqchbDWnkQNgJw5OPng} />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Los Angeles</p>
      </div>
    </div>
  );
}

function Dublin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[86px]" data-name="Dublin">
      <Container34 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(3,3,15,0.7)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <Dublin1 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_230.01px_278px] items-start p-[10px] rounded-[16px]" data-name="Image">
      <M1DgmyL7T3EYqchbDWnkQNgJw5OPng />
      <Tag1 />
    </div>
  );
}

function W5PVxNsR3H7FuGOgpM2Cl9C3LUPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="w5PVxNsR3H7fuGOgpM2cl9C3lU.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[168.77%] left-0 max-w-none top-[-34.39%] w-full" src={imgW5PVxNsR3H7FuGOgpM2Cl9C3LUPng} />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.9px] whitespace-nowrap">
        <p className="leading-[22.4px]">Remote</p>
      </div>
    </div>
  );
}

function Dublin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[55px]" data-name="Dublin">
      <Container35 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[12px] shrink-0" data-name="Tag">
      <Dublin2 />
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[229.41px_0_0.6px_0] items-start p-[10px] rounded-[16px]" data-name="Image">
      <W5PVxNsR3H7FuGOgpM2Cl9C3LUPng />
      <Tag2 />
    </div>
  );
}

function Left() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[540px]" data-name="Left">
      <Image5 />
      <Image6 />
      <Image7 />
    </div>
  );
}

function LeftAlignStretch() {
  return (
    <div className="content-stretch flex items-start justify-center relative self-stretch shrink-0" data-name="Left:align-stretch">
      <Left />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Section - Container">
      <div className="flex flex-row justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[60px] items-start justify-center max-w-[inherit] pb-[120px] pt-[220px] px-[30px] relative w-full">
          <Right />
          <LeftAlignStretch />
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex flex-col items-center justify-center left-0 overflow-clip px-[120px] right-0 top-0" data-name="Section - Hero">
      <SectionContainer />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">[Contact]</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[67px]" data-name="[Contact]">
      <Container36 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-medium h-[68.41px] leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] h-[63px] justify-center left-0 top-[31px] w-[249.734px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[62.4px]">{`Drop Us a `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Newsreader:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[249.34px] top-[37px] w-[179.319px]">
        <p className="leading-[62.4px]">Message</p>
      </div>
    </div>
  );
}

function DropUsAMessage() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Drop Us a Message">
      <Heading1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Header">
      <Contact />
      <DropUsAMessage />
    </div>
  );
}

function WereAlwaysHappyToHearFromYouAndWillGetBackToYouAsSoonAsPossible() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We’re always happy to hear from you and will get back to you as soon as possible.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[25.2px] not-italic relative shrink-0 text-[16.3px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We’re always happy to hear from you and will get back to you as `}</p>
        <p>soon as possible.</p>
      </div>
    </div>
  );
}

function HeaderDesc3() {
  return (
    <div className="content-stretch flex flex-col gap-[16.01px] items-center relative shrink-0 w-full" data-name="Header & Desc">
      <Header1 />
      <WereAlwaysHappyToHearFromYouAndWillGetBackToYouAsSoonAsPossible />
    </div>
  );
}

function Image8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="image">
          <path d={svgPaths.p142a7700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="image fill">
      <Image8 />
    </div>
  );
}

function Mask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Mask">
      <ImageFill5 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Mask Group">
      <Mask />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[20px] top-1/2" data-name="Background" />
    </div>
  );
}

function Message() {
  return (
    <div className="aspect-[48/48] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[100px] shrink-0" data-name="Message">
      <MaskGroup />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.6px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[25.2px]">Email</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Email">
      <Container37 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.3px] w-full">
        <p className="leading-[33.6px]">contactinfo@gmail.com</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="contactinfo@gmail.com">
      <Heading4 />
    </div>
  );
}

function LinkEmail() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Link - Email">
      <ContactinfoGmailCom />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Details">
      <Email1 />
      <LinkEmail />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Email">
      <Message />
      <Details />
    </div>
  );
}

function Image9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image">
          <path d={svgPaths.p334b2600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="image fill">
      <Image9 />
    </div>
  );
}

function Mask1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[18px]" data-name="Mask">
      <ImageFill6 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Mask Group">
      <Mask1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[18px] top-1/2" data-name="Background" />
    </div>
  );
}

function Phone() {
  return (
    <div className="aspect-[48/48] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[15px] relative rounded-[100px] shrink-0" data-name="Phone">
      <MaskGroup1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[25.2px]">Call</p>
      </div>
    </div>
  );
}

function Email2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Email">
      <Container38 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.1px] w-full">
        <p className="leading-[33.6px]">+99 1234 5478</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="contactinfo@gmail.com">
      <Heading5 />
    </div>
  );
}

function LinkNumber() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Link - Number">
      <ContactinfoGmailCom1 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Details">
      <Email2 />
      <LinkNumber />
    </div>
  );
}

function Call() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Call">
      <Phone />
      <Details1 />
    </div>
  );
}

function Image10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="image">
          <path d={svgPaths.p9662800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="image fill">
      <Image10 />
    </div>
  );
}

function IconMask2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <ImageFill7 />
    </div>
  );
}

function IconMaskGroup2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1ee3] left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function Map2() {
  return (
    <div className="aspect-[48/48] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[100px] shrink-0" data-name="Map">
      <IconMaskGroup2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[25.2px]">Visit Us</p>
      </div>
    </div>
  );
}

function Email3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Email">
      <Container39 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.3px] w-full">
        <p className="leading-[33.6px]">See on Google Map</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="contactinfo@gmail.com">
      <Heading6 />
    </div>
  );
}

function LinkAddress() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Link - Address">
      <ContactinfoGmailCom2 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Details">
      <Email3 />
      <LinkAddress />
    </div>
  );
}

function VisitUs1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Visit Us">
      <Map2 />
      <Details2 />
    </div>
  );
}

function Contact1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Contact">
      <Email />
      <Call />
      <VisitUs1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] h-full items-start relative shrink-0 w-[508px]" data-name="Left">
      <HeaderDesc3 />
      <Contact1 />
    </div>
  );
}

function LeftAlignStretch1() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Left:align-stretch">
      <Left1 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.6px] whitespace-nowrap">
        <p className="leading-[25.2px]">Full Name</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[16px] w-full">
        <p className="leading-[normal]">Enter your name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start py-[2px] relative size-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <Input />
          <div className="absolute inset-0 rounded-[10px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col gap-[10.01px] items-start relative shrink-0 w-full" data-name="Label">
      <Container40 />
      <Background />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.5px] whitespace-nowrap">
        <p className="leading-[25.2px]">Email Address</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[16px] w-full">
        <p className="leading-[normal]">Enter email address</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-[14px] relative size-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[48px] items-start justify-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <Input1 />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Label">
      <Container43 />
      <Background1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.6px] whitespace-nowrap">
        <p className="leading-[25.2px]">Write Your Message</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[159px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bottom-[68.8px] content-stretch flex flex-col items-start left-[12px] pr-[330.48px] top-[11px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">I want to collaborate</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[100px] min-h-[100px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Textarea">
      <Container48 />
      <div className="absolute bottom-[68.81px] left-[12px] top-[12px] w-[484px]" data-name="Rectangle" />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start min-h-[100px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Background">
      <Textarea />
      <div className="absolute inset-0 rounded-[10px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Label">
      <Container46 />
      <Background2 />
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="View Details">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Send Message</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[428px]" data-name="Text">
      <ViewDetails2 />
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

function Container50() {
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

function Container51() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.011px] items-start justify-center right-[-0.01px] top-1/2 w-[20.004px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container50 />
      <Container51 />
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

function LinkContainer() {
  return (
    <div className="bg-[#1d1ee3] content-stretch flex h-[56px] items-center justify-center overflow-clip pl-[30px] pr-[50px] py-[4px] relative rounded-[50px] shrink-0" data-name="Link - Container">
      <Text1 />
      <ArrowPlaceholder1 />
    </div>
  );
}

function ButtonDefault() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-full" data-name="Button - Default">
      <LinkContainer />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ButtonDefault />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[24px] items-start min-w-[572px] overflow-clip px-[32px] py-[40px] relative rounded-[24px] shrink-0 w-[572px]" data-name="Form">
      <Label />
      <Label1 />
      <Label2 />
      <Container49 />
    </div>
  );
}

function PricingDetails() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center max-w-[1200px] pt-[120px] px-[30px] relative shrink-0" data-name="Pricing details">
      <div className="flex flex-row items-center self-stretch">
        <LeftAlignStretch1 />
      </div>
      <Form />
    </div>
  );
}

function SectionDetails() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex items-center justify-center left-1/2 overflow-clip px-[120px] top-[782.81px]" data-name="Section - Details">
      <PricingDetails />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start leading-[0] pb-[3.99px] relative shrink-0 text-[#03030f] w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center mb-[-0.59px] not-italic relative shrink-0 text-[50.7px]">
        <p className="leading-[62.4px] whitespace-pre">{`Friendly Asked  `}</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] italic justify-center mb-[-0.59px] relative shrink-0 text-[52px]">
        <p className="leading-[62.4px]">Questions.</p>
      </div>
    </div>
  );
}

function FriendlyAskedQuestions() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Friendly Asked Questions.">
      <Heading2 />
    </div>
  );
}

function StillHaveAQuestionHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Still have a question? → Heading 6">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[21.9px] w-full">
        <p className="leading-[33.6px]">Still have a question?</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.5px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our team is ready to assist you with anything you `}</p>
        <p>need.</p>
      </div>
    </div>
  );
}

function OurTeamIsReadyToAssistYouWithAnythingYouNeed() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Our team is ready to assist you with anything you need.">
      <Container53 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <StillHaveAQuestionHeading />
      <OurTeamIsReadyToAssistYouWithAnythingYouNeed />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Make A Call</p>
      </div>
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.7px)] top-0 w-[83px]" data-name="View Details">
      <Container55 />
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.51px)] top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails3 />
      <ViewDetails4 />
    </div>
  );
}

function Group6() {
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

function Svg7() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container56() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Group7() {
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

function Svg8() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group7 />
    </div>
  );
}

function Container57() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.011px] items-start justify-center right-[-0.01px] top-1/2 w-[20.004px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container56 />
      <Container57 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow2 />
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
          <Text2 />
          <ArrowPlaceholder2 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[172px]" data-name="Container">
      <LinkBlue />
    </div>
  );
}

function Question() {
  return (
    <div className="bg-[#f7f7f4] relative rounded-[12px] shrink-0 w-full" data-name="Question">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
        <Header2 />
        <Container54 />
      </div>
    </div>
  );
}

function HeaderCta() {
  return (
    <div className="h-full max-w-[409px] min-w-[409px] relative shrink-0 w-[409px]" data-name="Header & CTA">
      <div className="content-stretch flex flex-col items-start justify-between max-w-[inherit] min-w-[inherit] relative size-full">
        <FriendlyAskedQuestions />
        <Question />
      </div>
    </div>
  );
}

function HeaderCtaAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Header & CTA:align-stretch">
      <HeaderCta />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.3px] w-full">
        <p className="leading-[28px]">What industries does Optimo serve?</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading7 />
    </div>
  );
}

function Plus() {
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
      <CanITrainTheAiWithMyOwnContent />
      <Plus />
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

function Divider() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.1px] w-full">
        <p className="leading-[28px]">How do I know which service is right for my business?</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading8 />
    </div>
  );
}

function Plus1() {
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

function Question2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Question">
      <CanITrainTheAiWithMyOwnContent1 />
      <Plus1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.4px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`It starts with a conversation. During an initial consultation, we’ll learn about `}</p>
        <p className="mb-0">your goals, challenges, and opportunities, then recommend services </p>
        <p className="mb-0">whether that’s growth planning, talent strategy, or performance optimization</p>
        <p> best aligned to your needs.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
      <Container60 />
    </div>
  );
}

function Answer() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex flex-col items-start pr-[20px] relative w-full">
        <Container59 />
      </div>
    </div>
  );
}

function OpenV() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start overflow-clip py-[20px] relative rounded-[8px] shrink-0 w-full" data-name="Open v1">
      <Question2 />
      <Answer />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.1px] w-full">
        <p className="leading-[28px]">Do you offer customized solutions or standard frameworks?</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading9 />
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

function Question3() {
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
      <Question3 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.3px] w-full">
        <p className="leading-[28px]">How do you measure success with clients?</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading10 />
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

function Question4() {
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
      <Question4 />
    </div>
  );
}

function Divider3() {
  return <div className="bg-[rgba(0,0,0,0.06)] h-px shrink-0 w-full" data-name="Divider" />;
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.3px] w-full">
        <p className="leading-[28px]">How can I get started with Optimo?</p>
      </div>
    </div>
  );
}

function CanITrainTheAiWithMyOwnContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px min-w-px relative" data-name="Can I train the AI with my own content?">
      <Heading11 />
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

function Question5() {
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
      <Question5 />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Testimonial">
      <ClosedV />
      <Divider />
      <OpenV />
      <Divider1 />
      <ClosedV1 />
      <Divider2 />
      <ClosedV2 />
      <Divider3 />
      <ClosedV3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[671px]" data-name="Container">
      <Testimonial />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[60px] items-end justify-center max-w-[1200px] overflow-clip pt-[119px] px-[30px] relative shrink-0" data-name="Container">
      <div className="flex flex-row items-end self-stretch">
        <HeaderCtaAlignStretch />
      </div>
      <Container58 />
    </div>
  );
}

function SectionFaq() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[1396.42px]" data-name="Section - FAQ">
      <Container52 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">[CTA]</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41px]" data-name="[CTA]">
      <Container62 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col font-medium items-start pb-[3.5px] relative shrink-0 text-[#eaeaff] w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[62px] not-italic relative shrink-0 text-[48.8px] whitespace-pre">
        <p className="mb-0">{`Work with Experts to `}</p>
        <p>{`Grow Faster & Run `}</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[52px]">
        <p className="leading-[62px]">Smarter</p>
      </div>
    </div>
  );
}

function WorkWithExpertsToGrowFasterRunSmarter() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Work with Experts to Grow Faster & Run Smarter">
      <Heading3 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
      <Cta />
      <WorkWithExpertsToGrowFasterRunSmarter />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.88px)] top-0 w-[82px]" data-name="View Details">
      <Container64 />
    </div>
  );
}

function ViewDetails6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.51px)] top-[27.4px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails5 />
      <ViewDetails6 />
    </div>
  );
}

function Group8() {
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

function Svg9() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container65() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[30px] top-1/2 w-[19.997px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6309 13.1317">
          <path d={svgPaths.p3f7e580} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container66() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container65 />
      <Container66 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[48/48] bg-[#1d1ee3] bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow3 />
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
          <Text3 />
          <ArrowPlaceholder3 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[167px]" data-name="Container">
      <LinkWhite />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header & button">
      <Header3 />
      <Container63 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Schedule a Free Consultation</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-w-[467.0299987792969px] relative shrink-0 w-[467.03px]" data-name="Future-Ready Strategies">
      <Container67 />
    </div>
  );
}

function Group10() {
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

function Svg11() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Discover Custom Solutions</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-w-[467.0299987792969px] relative shrink-0 w-[467.03px]" data-name="Future-Ready Strategies">
      <Container69 />
    </div>
  );
}

function Group11() {
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

function Svg12() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group11 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Start Building Your Competitive Advantage</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-w-[467.0299987792969px] relative shrink-0 w-[467.03px]" data-name="Future-Ready Strategies">
      <Container71 />
    </div>
  );
}

function Group12() {
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

function Svg13() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group12 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[491.03px]" data-name="Features">
      <Small />
      <Small1 />
      <Small2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[568px]" data-name="Left">
      <HeaderButton />
      <Features />
    </div>
  );
}

function Image11() {
  return (
    <div className="absolute h-[501.98px] left-0 top-0 w-[544px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="h-[502px] overflow-clip relative rounded-[12px] shrink-0 w-[528px]" data-name="Right">
      <Image11 />
    </div>
  );
}

function BlueContainer() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[16px] shrink-0 w-full" data-name="Blue container">
      <div className="content-stretch flex gap-[20px] items-start p-[12px] relative w-full">
        <Left2 />
        <Right1 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[1200px] overflow-clip px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <BlueContainer />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex items-center justify-center left-1/2 overflow-clip px-[120px] top-[2050.42px]" data-name="Section - CTA">
      <Container61 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[21.9px] whitespace-nowrap">
        <p className="leading-[33.6px]">Newsletter</p>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[115px]" data-name="Newsletter">
      <Heading12 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[16px] w-full">
        <p className="leading-[normal]">Enter your email address</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[10px] relative size-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[40px] items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[100px]" data-name="Label">
      <Input2 />
      <div className="absolute inset-0 rounded-[100px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Subscribe</p>
      </div>
    </div>
  );
}

function ViewDetails7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="View Details">
      <Container76 />
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[23px] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[5px] relative size-full">
          <ViewDetails7 />
        </div>
      </div>
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

function Svg14() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group13 />
    </div>
  );
}

function Container77() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Group14() {
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

function Svg15() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group14 />
    </div>
  );
}

function Container78() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container77 />
      <Container78 />
    </div>
  );
}

function ArrowPlaceholder4() {
  return (
    <div className="absolute aspect-[32/32] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[0.44px] pr-[0.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow4 />
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
          <Text4 />
          <ArrowPlaceholder4 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-[145px]" data-name="Container">
      <ButtonDefaultLinkVariant />
    </div>
  );
}

function Form1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 w-full" data-name="Form">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-start p-[6px] relative w-full">
          <Label3 />
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12.01px] items-start max-w-[473px] relative shrink-0 w-[473px]" data-name="Form & Header">
      <Newsletter />
      <Form1 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">Let’s transform your vision into results.</p>
      </div>
    </div>
  );
}

function LetsTransformYourVisionIntoResults() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Let’s transform your vision into results.">
      <Container79 />
    </div>
  );
}

function Subscribe() {
  return (
    <div className="content-stretch flex flex-col gap-[16.01px] items-start relative shrink-0 w-[535px]" data-name="Subscribe">
      <FormHeader />
      <LetsTransformYourVisionIntoResults />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.1px] w-full">
        <p className="leading-[33.6px]">Main Pages</p>
      </div>
    </div>
  );
}

function MainPages1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Main Pages">
      <Heading13 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.9px] whitespace-nowrap">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Home2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[42px]" data-name="Home">
      <Container80 />
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

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[24px]">Case Study</p>
      </div>
    </div>
  );
}

function Home4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[80px]" data-name="Home">
      <Container81 />
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

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.4px] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function Home6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[47px]" data-name="Home">
      <Container82 />
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

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[24px]">Blog</p>
      </div>
    </div>
  );
}

function Home8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[31px]" data-name="Home">
      <Container83 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.01px] items-start min-h-px min-w-px relative" data-name="Main pages">
      <MainPages1 />
      <Links1 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[22.5px] w-full">
        <p className="leading-[33.6px]">Company</p>
      </div>
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Company">
      <Heading14 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Home10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[55px]" data-name="Home">
      <Container84 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.5px] whitespace-nowrap">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function Home12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[59px]" data-name="Home">
      <Container85 />
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

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[24px]">About Us</p>
      </div>
    </div>
  );
}

function Home14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[64px]" data-name="Home">
      <Container86 />
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

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.4px] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function Home16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[47px]" data-name="Home">
      <Container87 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.01px] items-start min-h-px min-w-px relative" data-name="Company">
      <Company1 />
      <Links2 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[23.4px] w-full">
        <p className="leading-[33.6px]">{`Template `}</p>
      </div>
    </div>
  );
}

function Template1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Template">
      <Heading15 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.4px] whitespace-nowrap">
        <p className="leading-[24px]">Service Details</p>
      </div>
    </div>
  );
}

function Home18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[102px]" data-name="Home">
      <Container88 />
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

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.4px] whitespace-nowrap">
        <p className="leading-[24px]">Case Study Details</p>
      </div>
    </div>
  );
}

function Home20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[129px]" data-name="Home">
      <Container89 />
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

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[24px]">Changelog</p>
      </div>
    </div>
  );
}

function Home22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[75px]" data-name="Home">
      <Container90 />
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

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.9px] whitespace-nowrap">
        <p className="leading-[24px]">404</p>
      </div>
    </div>
  );
}

function Home24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[29px]" data-name="Home">
      <Container91 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.01px] items-start min-h-px min-w-px relative" data-name="Template">
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

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.7px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Email</p>
      </div>
    </div>
  );
}

function Email5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Email">
      <Container92 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.4px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">contactinfo@gmail.com</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[209px]" data-name="contactinfo@gmail.com">
      <Heading16 />
    </div>
  );
}

function Email4() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Email">
      <Email5 />
      <ContactinfoGmailCom3 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.5px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Visit Us</p>
      </div>
    </div>
  );
}

function VisitUs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[45px]" data-name="Visit Us">
      <Container93 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">Los Angeles, CA 90017 United States</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[323px]" data-name="Los Angeles, CA 90017 United States">
      <Heading17 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Address">
      <VisitUs2 />
      <LosAngelesCa90017UnitedStates2 />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.7px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Call us Now</p>
      </div>
    </div>
  );
}

function CallUsNow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="Call us Now">
      <Container94 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.3px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">+99 1234 5478</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[134px]" data-name="+99 1234 5478">
      <Heading18 />
    </div>
  );
}

function Call1() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0" data-name="Call">
      <CallUsNow />
      <Component />
    </div>
  );
}

function Contact2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact">
      <div className="content-stretch flex items-start justify-between pr-[0.01px] relative w-full">
        <Email4 />
        <Address />
        <Call1 />
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[70.01px] items-start relative shrink-0 w-full" data-name="Top">
      <Frame />
      <Contact2 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaff] text-[31px] text-center uppercase whitespace-nowrap">
        <p className="leading-[41.6px]">Optimo</p>
      </div>
    </div>
  );
}

function Optimo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[127px]" data-name="Optimo">
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Changelog</p>
      </div>
    </div>
  );
}

function Home26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[75px]" data-name="Home">
      <Container97 />
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

function Link12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[75px]" data-name="Link">
      <Title12 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Terms</p>
      </div>
    </div>
  );
}

function Home28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[43px]" data-name="Home">
      <Container99 />
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

function Link13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title13 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[46px]" data-name="Container">
      <Link13 />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Privacy policy">
      <Container96 />
      <div className="bg-white rounded-[6px] shrink-0 size-[6px]" data-name="Circle" />
      <Container98 />
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

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Twitter</p>
      </div>
    </div>
  );
}

function Home30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[48px]" data-name="Home">
      <Container101 />
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

function Link14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title14 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[50px]" data-name="Container">
      <Link14 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-white whitespace-nowrap">
        <p className="leading-[24px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Home32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[58px]" data-name="Home">
      <Container103 />
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

function Link15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title15 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[57px]" data-name="Container">
      <Link15 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function Home34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[68px]" data-name="Home">
      <Container105 />
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

function Link16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title16 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Home36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[69px]" data-name="Home">
      <Container107 />
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

function Link17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Link">
      <Title17 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link17 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-[470px]" data-name="Socials">
      <Container100 />
      <Container102 />
      <Container104 />
      <Container106 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.5px] text-white whitespace-nowrap">
        <p className="leading-[21px]">© 2025. All rights reserved.</p>
      </div>
    </div>
  );
}

function Component2025AllRightsReserved() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[163px]" data-name="© 2025 .All rights reserved.">
      <Container108 />
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
      <div className="content-stretch flex flex-col gap-[42px] items-start pb-[24px] pt-[23px] px-[20px] relative w-full">
        <LogoPrivacy />
        <SocialsCopyright />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[60.01px] items-center max-w-[1200px] pb-[20px] pt-[80px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Top />
      <Bottom />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[2816.42px]" data-name="Footer - Desktop">
      <Container73 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[3481.61px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <Container2 />
      <Container21 />
      <Container25 />
      <SectionHero />
      <SectionDetails />
      <SectionFaq />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[2816.42px]" data-name="Rectangle" />
      <FooterDesktop />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1440w light">
      <Container />
      <EndOfBodyStart />
    </div>
  );
}