import svgPaths from "./svg-ix7ual4fsz";
import imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng from "figma:asset/e82db81198b2304297ed883d9a3eb6c48b756fa4.png";
import imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png from "figma:asset/f1e8b462dab4906b6acf1acaba0b0e886c26a681.png";
import imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng from "figma:asset/337c312991b50c5e0c66d715307b26ab129a28f4.png";
import imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng from "figma:asset/e4462a2f0c2f4c6d408fd3baf51ac28561f57c9d.png";
import imgHeroImage from "figma:asset/638b11cd6ed56ff750f40755e53285b0ad327e7f.png";
import imgContainer from "figma:asset/6e79a5465bb3925a6bf131575938691b1eec750e.png";
import imgContainer1 from "figma:asset/099c64ae2547a90a6f28c98cd0db08df37bad413.png";
import imgContainer2 from "figma:asset/2187d2d57b943841bd5621c969e45d02b9dad171.png";
import imgContainer3 from "figma:asset/e195beac4f39659f88df73d4b71ab8724c7da54e.png";
import imgContainer4 from "figma:asset/2bc68bd6346ce892fc1a2ccd88b58eaf20042d74.png";
import imgImage from "figma:asset/e3fe97b9ef553a51f9d20fe70529e64bd45eec23.png";
import { imgBottom } from "./svg-0u358";

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
    <div className="absolute bottom-[4023.66px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
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
    <div className="absolute bottom-[4086.66px] content-stretch flex flex-col h-[36px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
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
    <div className="absolute content-stretch flex flex-col inset-[-260px_0_-520px_0] items-center justify-center" data-name="List">
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
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Section">
      <Container27 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Container">
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
    <div className="absolute bottom-[4127.66px] content-stretch flex flex-col h-[60px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <Variant />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">[Our Services]</p>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[101px]" data-name="[About Us]">
      <Container28 />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-semibold h-[176.81px] leading-[0] relative shrink-0 text-[#03030f] text-center w-full" data-name="Heading 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[87px] justify-center left-[calc(50%+7.69px)] not-italic text-[67.9px] top-[42.5px] w-[666.76px]">
        <p className="leading-[86.4px]">{`Innovative Solutions `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[87px] justify-center left-[calc(50%-115.08px)] not-italic text-[0px] top-[132.9px] w-[350px]">
        <p className="text-[69.8px]">
          <span className="leading-[86.4px]">That Drive</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[86.4px] not-italic">{` `}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] h-[87px] italic justify-center left-[calc(50%+175.71px)] text-[72px] top-[129.4px] tracking-[-1.44px] w-[231.973px]">
        <p className="leading-[86.4px]">Success</p>
      </div>
    </div>
  );
}

function NavigateBusinessWithConfidence() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[800px] relative shrink-0 w-[800px]" data-name="Navigate Business with Confidence">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[1083px]" data-name="Header">
      <AboutUs />
      <NavigateBusinessWithConfidence />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="aspect-[1140/630] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Hero image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.79%] left-0 max-w-none top-[-0.89%] w-full" src={imgHeroImage} />
      </div>
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1200px] min-w-[1200px] pt-[220px] px-[30px] relative shrink-0" data-name="Section - Container">
      <Header />
      <HeroImage />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-0" data-name="Section - Hero">
      <SectionContainer />
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-medium h-[190.22px] leading-[0] relative shrink-0 text-center w-full" data-name="Heading 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[63px] justify-center left-[calc(50%-137.29px)] not-italic text-[0px] text-[rgba(3,3,15,0.7)] top-[33.5px] w-[405.95px]">
        <p className="text-[48.9px]">
          <span className="leading-[62.4px]">{`With a `}</span>
          <span className="leading-[62.4px] text-[#03030f]">{`98% client `}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[calc(50%+209.63px)] text-[#03030f] text-[52px] top-[30.5px] w-[288.292px]">
        <p className="leading-[62.4px]">{`satisfaction, `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[63px] justify-center left-[calc(50%+5.88px)] not-italic text-[0px] text-[rgba(3,3,15,0.7)] top-[95.91px] w-[586.2px]">
        <p className="text-[48.2px]">
          <span className="leading-[62.4px]">our strategies have led to</span>
          <span className="leading-[62.4px] text-[#03030f]">{` `}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[63px] justify-center left-[calc(50%+0.1px)] not-italic text-[#03030f] text-[0px] top-[158.31px] w-[428.8px]">
        <p className="text-[49.2px]">
          <span className="leading-[62.4px]">$50M+</span>
          <span className="leading-[62.4px] text-[rgba(3,3,15,0.7)]">{` in revenue `}</span>
        </p>
      </div>
    </div>
  );
}

function WithA98ClientSatisfactionOurStrategiesHaveLedTo50MInRevenue() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="With a 98% client satisfaction, our strategies have led to $50M+ in revenue">
      <Heading1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['Inter:Regular',sans-serif] font-normal h-[50.41px] leading-[0] not-italic relative shrink-0 text-[rgba(3,3,15,0.7)] text-center w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[calc(50%+2.21px)] text-[16.3px] top-[12.5px] w-[481.48px]">
        <p className="leading-[25.2px]">{`Our strategic approach is designed to align with your business `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[calc(50%+0.1px)] text-[16.2px] top-[37.7px] w-[231.92px]">
        <p className="leading-[25.2px]">goals, helping you scale faster</p>
      </div>
    </div>
  );
}

function OurStrategicApproachIsDesignedToAlignWithYourBusinessGoalsHelpingYouScaleFaster() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[504px] relative shrink-0 w-[504px]" data-name="Our strategic approach is designed to align with your business goals, helping you scale faster">
      <Paragraph />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[750px] relative shrink-0 w-[750px]" data-name="Header">
      <WithA98ClientSatisfactionOurStrategiesHaveLedTo50MInRevenue />
      <OurStrategicApproachIsDesignedToAlignWithYourBusinessGoalsHelpingYouScaleFaster />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="image">
          <path d={svgPaths.p1049ff00} fill="var(--fill-0, black)" id="Vector" />
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

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[158px] opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">150+</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">150+</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.5px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="mb-0">Over 300+ clients complete high-</p>
        <p>impact projects.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container34 />
    </div>
  );
}

function Statistic() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <Container31 />
      <Over300ClientsCompleteHighImpactProjects />
    </div>
  );
}

function Counter() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Counter">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer />
        <Statistic />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273px]" data-name="Container">
      <Counter />
    </div>
  );
}

function Image4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p147a8f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p23508500} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p3c9ce4f2} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1f2d6ec0} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p283c0080} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p356d2580} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[139.83999633789062px] opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">98%</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">98%</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Trusted by hundreds of clients `}</p>
        <p>who rate our work highly.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container39 />
    </div>
  );
}

function Statistic1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <Container36 />
      <Over300ClientsCompleteHighImpactProjects1 />
    </div>
  );
}

function Counter1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Counter">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer1 />
        <Statistic1 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273px]" data-name="Container">
      <Counter1 />
    </div>
  );
}

function Image5() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="image">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="image">
          <path d={svgPaths.p13cda80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p38c32200} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p37f64ef0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p145004f0} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
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

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">50+</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">50+</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.5px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our ability to adapt and deliver `}</p>
        <p>impactful solutions across</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container44 />
    </div>
  );
}

function Statistic2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <Container41 />
      <Over300ClientsCompleteHighImpactProjects2 />
    </div>
  );
}

function Counter2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Counter">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer2 />
        <Statistic2 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273px]" data-name="Container">
      <Counter2 />
    </div>
  );
}

function Image6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[27px]" data-name="image">
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

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[118.5px] opacity-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">10+</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[64px] text-center tracking-[-2px] whitespace-nowrap">
        <p className="leading-[64px]">10+</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Building on years of experience, `}</p>
        <p>we provide trusted guidance.</p>
      </div>
    </div>
  );
}

function Over300ClientsCompleteHighImpactProjects3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Over 300+ clients complete high-impact projects.">
      <Container49 />
    </div>
  );
}

function Statistic3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Statistic">
      <Container46 />
      <Over300ClientsCompleteHighImpactProjects3 />
    </div>
  );
}

function Counter3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Counter">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[20px] py-[24px] relative w-full">
        <IconContainer3 />
        <Statistic3 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[273px]" data-name="Container">
      <Counter3 />
    </div>
  );
}

function Statistics() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Statistics">
      <Container30 />
      <Container35 />
      <Container40 />
      <Container45 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[55.99px] items-center max-w-[1200px] px-[30px] py-[120px] relative shrink-0" data-name="Container">
      <Header1 />
      <Statistics />
    </div>
  );
}

function SectionStatistics() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[1101.22px]" data-name="Section - Statistics">
      <Container29 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">[Core Services]</p>
      </div>
    </div>
  );
}

function AboutUs1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[109px]" data-name="[About Us]">
      <Container52 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="font-medium h-[65.41px] leading-[0] relative shrink-0 text-[#03030f] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[63px] justify-center left-0 not-italic text-[0px] top-[33.5px] w-[311.9px]">
        <p className="text-[49.5px]">
          <span className="leading-[62.4px]">Explore More</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[62.4px] not-italic">{` `}</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[63px] italic justify-center left-[311.7px] text-[52px] top-[30.5px] w-[185.734px]">
        <p className="leading-[62.4px]">Services</p>
      </div>
    </div>
  );
}

function DrivingGrowthThroughStrategicExcellence() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[660px] relative shrink-0 w-full" data-name="Driving Growth Through Strategic Excellence">
      <Heading2 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center max-w-[660px] overflow-clip relative shrink-0 w-[660px]" data-name="Container">
      <AboutUs1 />
      <DrivingGrowthThroughStrategicExcellence />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Header">
      <Container51 />
    </div>
  );
}

function Container54() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer} />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[29.6px] w-full">
        <p className="leading-[38.4px]">{`Wealth & Finance`}</p>
      </div>
    </div>
  );
}

function RiskAssessment() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading4 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Strategy Consulting service empowers `}</p>
        <p className="mb-0">{`businesses to define a clear path forward, `}</p>
        <p>refine their focus.</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[77px]" data-name="View Details">
      <Container56 />
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.41px] w-[46.97px]" data-name="View Details">
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

function Group4() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032">
          <path d={svgPaths.p3719d200} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container57 />
    </div>
  );
}

function ArrowPlaceholder1() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-[0.99px]" data-name="Arrow Placeholder">
      <Arrow1 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[39.99px] items-center justify-center overflow-clip pr-[38px] pt-[0.99px] relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text1 />
      <ArrowPlaceholder1 />
    </div>
  );
}

function LinkCard() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative rounded-[12px] w-full" data-name="Link - Card">
      <Container54 />
      <Container55 />
      <Button />
    </div>
  );
}

function Container58() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer1} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[29.8px] w-full">
        <p className="leading-[38.4px]">Risk Assessment</p>
      </div>
    </div>
  );
}

function RiskAssessment1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading5 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Risk Assessment service empowers `}</p>
        <p className="mb-0">{`organizations to uncover hidden risks, and `}</p>
        <p>strengthen resilience.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment1 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[77px]" data-name="View Details">
      <Container60 />
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.41px] w-[46.97px]" data-name="View Details">
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

function Group5() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032">
          <path d={svgPaths.p3719d200} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container61 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-[0.99px]" data-name="Arrow Placeholder">
      <Arrow2 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[39.99px] items-center justify-center overflow-clip pr-[38px] pt-[0.99px] relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text2 />
      <ArrowPlaceholder2 />
    </div>
  );
}

function LinkCard1() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative rounded-[12px] w-full" data-name="Link - Card">
      <Container58 />
      <Container59 />
      <Button1 />
    </div>
  );
}

function Container62() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer2} />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[29.6px] w-full">
        <p className="leading-[38.4px]">Talent Strategy</p>
      </div>
    </div>
  );
}

function RiskAssessment2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading6 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.5px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Talent Strategy service empowers `}</p>
        <p className="mb-0">{`organizations to optimize their people, and `}</p>
        <p>foster engagement.</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment2 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[77px]" data-name="View Details">
      <Container64 />
    </div>
  );
}

function ViewDetails7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
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

function Group6() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032">
          <path d={svgPaths.p3719d200} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container65 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-[0.99px]" data-name="Arrow Placeholder">
      <Arrow3 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[39.99px] items-center justify-center overflow-clip pr-[38px] pt-[0.99px] relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text3 />
      <ArrowPlaceholder3 />
    </div>
  );
}

function LinkCard2() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative rounded-[12px] w-full" data-name="Link - Card">
      <Container62 />
      <Container63 />
      <Button2 />
    </div>
  );
}

function Container66() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer3} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[29.8px] w-full">
        <p className="leading-[38.4px]">Growth Planning</p>
      </div>
    </div>
  );
}

function RiskAssessment3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading7 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Growth Planning service empowers `}</p>
        <p className="mb-0">{`organizations to unlock new opportunities, and `}</p>
        <p>scale effectively.</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment3 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth3 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[77px]" data-name="View Details">
      <Container68 />
    </div>
  );
}

function ViewDetails9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
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

function Group7() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032">
          <path d={svgPaths.p3719d200} fill="var(--fill-0, #03030F)" id="Vector" />
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

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container69 />
    </div>
  );
}

function ArrowPlaceholder4() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-px" data-name="Arrow Placeholder">
      <Arrow4 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip pr-[38px] pt-px relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text4 />
      <ArrowPlaceholder4 />
    </div>
  );
}

function LinkCard3() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative rounded-[12px] w-full" data-name="Link - Card">
      <Container66 />
      <Container67 />
      <Button3 />
    </div>
  );
}

function Container70() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer4} />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[29.8px] w-full">
        <p className="leading-[38.4px]">Performance Optimize</p>
      </div>
    </div>
  );
}

function RiskAssessment4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading8 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Performance Optimization service `}</p>
        <p className="mb-0">{`empowers organizations to streamline `}</p>
        <p>processes.</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment4 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth4 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[77px]" data-name="View Details">
      <Container72 />
    </div>
  );
}

function ViewDetails11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails10 />
      <ViewDetails11 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032">
          <path d={svgPaths.p3719d200} fill="var(--fill-0, #03030F)" id="Vector" />
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

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Arrow5() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container73 />
    </div>
  );
}

function ArrowPlaceholder5() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-px" data-name="Arrow Placeholder">
      <Arrow5 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip pr-[38px] pt-px relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text5 />
      <ArrowPlaceholder5 />
    </div>
  );
}

function LinkCard4() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative rounded-[12px] w-full" data-name="Link - Card">
      <Container70 />
      <Container71 />
      <Button4 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[646.81px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex items-center justify-center left-[-113.34px] right-[660px] top-0">
        <div className="-scale-y-100 flex-none h-[312.98px] rotate-180 w-[593.34px]">
          <LinkCard />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[273.33px] right-[273.34px] top-0">
        <div className="-scale-y-100 flex-none h-[312.98px] rotate-180 w-[593.33px]">
          <LinkCard1 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[659.99px] right-[-113.33px] top-0">
        <div className="-scale-y-100 flex-none h-[312.98px] rotate-180 w-[593.34px]">
          <LinkCard2 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-113.34px] right-[660px] top-[333.4px]">
        <div className="-scale-y-100 flex-none h-[313px] rotate-180 w-[593.34px]">
          <LinkCard3 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[273.33px] right-[273.34px] top-[333.4px]">
        <div className="-scale-y-100 flex-none h-[313px] rotate-180 w-[593.33px]">
          <LinkCard4 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[56.01px] items-start max-w-[1200px] min-w-[1200px] px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <Header2 />
      <Container53 />
    </div>
  );
}

function SectionServices() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[1917.84px]" data-name="Section - Services">
      <Container50 />
    </div>
  );
}

function Heading3() {
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
      <Heading3 />
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

function Container75() {
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
      <Container75 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <StillHaveAQuestionHeading />
      <OurTeamIsReadyToAssistYouWithAnythingYouNeed />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Make A Call</p>
      </div>
    </div>
  );
}

function ViewDetails12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.7px)] top-0 w-[83px]" data-name="View Details">
      <Container77 />
    </div>
  );
}

function ViewDetails13() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.51px)] top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails12 />
      <ViewDetails13 />
    </div>
  );
}

function Group9() {
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

function Svg10() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container78() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[30px] top-1/2 w-[19.997px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Group10() {
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

function Svg11() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container79() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Arrow6() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container78 />
      <Container79 />
    </div>
  );
}

function ArrowPlaceholder6() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow6 />
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
          <Text6 />
          <ArrowPlaceholder6 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
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
        <Header3 />
        <Container76 />
      </div>
    </div>
  );
}

function HeaderCta() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between max-w-[409px] min-w-[409px] relative shrink-0 w-[409px]" data-name="Header & CTA">
      <FriendlyAskedQuestions />
      <Question />
    </div>
  );
}

function HeaderCtaAlignStretch() {
  return (
    <div className="content-stretch flex h-[535px] items-start justify-center relative shrink-0" data-name="Header & CTA:align-stretch">
      <HeaderCta />
    </div>
  );
}

function Heading9() {
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
      <Heading9 />
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

function Heading10() {
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
      <Heading10 />
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

function Container82() {
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

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[530px] relative shrink-0 w-[530px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Answer() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex flex-col items-start pr-[20px] relative w-full">
        <Container81 />
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

function Heading11() {
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
      <Heading11 />
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

function Heading12() {
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
      <Heading12 />
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

function Heading13() {
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
      <Heading13 />
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

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[671px]" data-name="Container">
      <Testimonial />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[60px] h-[534px] items-end justify-center max-w-[1200px] overflow-clip px-[30px] relative shrink-0" data-name="Container">
      <HeaderCtaAlignStretch />
      <Container80 />
    </div>
  );
}

function SectionFaq() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[2958.47px]" data-name="Section - FAQ">
      <Container74 />
    </div>
  );
}

function Container84() {
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
      <Container84 />
    </div>
  );
}

function Heading14() {
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
      <Heading14 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
      <Cta />
      <WorkWithExpertsToGrowFasterRunSmarter />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails14() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.88px)] top-0 w-[82px]" data-name="View Details">
      <Container86 />
    </div>
  );
}

function ViewDetails15() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.51px)] top-[27.4px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails14 />
      <ViewDetails15 />
    </div>
  );
}

function Group11() {
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

function Svg12() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group11 />
    </div>
  );
}

function Container87() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Group12() {
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

function Svg13() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group12 />
    </div>
  );
}

function Container88() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Arrow7() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container87 />
      <Container88 />
    </div>
  );
}

function ArrowPlaceholder7() {
  return (
    <div className="absolute aspect-[48/48] bg-[#1d1ee3] bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow7 />
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
          <Text7 />
          <ArrowPlaceholder7 />
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[167px]" data-name="Container">
      <LinkWhite />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header & button">
      <Header4 />
      <Container85 />
    </div>
  );
}

function Container89() {
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
      <Container89 />
    </div>
  );
}

function Group13() {
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

function Svg14() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group13 />
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
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
      <Container91 />
    </div>
  );
}

function Group14() {
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

function Svg15() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group14 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Container93() {
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
      <Container93 />
    </div>
  );
}

function Group15() {
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

function Svg16() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group15 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container94 />
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

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[568px]" data-name="Left">
      <HeaderButton />
      <Features />
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute h-[501.98px] left-0 top-0 w-[544px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage} />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="h-[502px] overflow-clip relative rounded-[12px] shrink-0 w-[528px]" data-name="Right">
      <Image7 />
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

function Container83() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[1200px] overflow-clip px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <BlueContainer />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[3492.47px]" data-name="Section - CTA">
      <Container83 />
    </div>
  );
}

function Heading15() {
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
      <Heading15 />
    </div>
  );
}

function Container96() {
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
        <div className="content-stretch flex items-start justify-center px-[16px] py-[10px] relative size-full">
          <Container96 />
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

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Subscribe</p>
      </div>
    </div>
  );
}

function ViewDetails16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="View Details">
      <Container98 />
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[23px] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[5px] relative size-full">
          <ViewDetails16 />
        </div>
      </div>
    </div>
  );
}

function Group16() {
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

function Svg17() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group16 />
    </div>
  );
}

function Container99() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6364 13.1363">
          <path d={svgPaths.p345e5300} fill="var(--fill-0, #1D1EE3)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="h-[20.011px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group17 />
    </div>
  );
}

function Container100() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[-0.01px] top-[calc(50%+0.01px)] w-[20.011px]" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Arrow8() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container99 />
      <Container100 />
    </div>
  );
}

function ArrowPlaceholder8() {
  return (
    <div className="absolute aspect-[32/32] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[0.44px] pr-[0.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow8 />
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
          <Text8 />
          <ArrowPlaceholder8 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
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
          <Container97 />
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

function Container101() {
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
      <Container101 />
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

function Heading16() {
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
      <Heading16 />
    </div>
  );
}

function Container102() {
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
      <Container102 />
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

function Container103() {
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
      <Container103 />
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

function Container104() {
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
      <Container104 />
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

function Container105() {
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
      <Container105 />
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

function Heading17() {
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
      <Heading17 />
    </div>
  );
}

function Container106() {
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
      <Container106 />
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

function Container107() {
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
      <Container107 />
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

function Container108() {
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
      <Container108 />
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

function Container109() {
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
      <Container109 />
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

function Heading18() {
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
      <Heading18 />
    </div>
  );
}

function Container110() {
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
      <Container110 />
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

function Container111() {
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
      <Container111 />
    </div>
  );
}

function Home21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Home">
      <div className="h-[24px] shrink-0 w-[129.34px]" data-name="Rectangle" />
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

function Container112() {
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
      <Container112 />
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

function Container113() {
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
      <Container113 />
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

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.7px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Email</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Email">
      <Container114 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.4px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">contactinfo@gmail.com</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[209px]" data-name="contactinfo@gmail.com">
      <Heading19 />
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

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.5px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Visit Us</p>
      </div>
    </div>
  );
}

function VisitUs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[45px]" data-name="Visit Us">
      <Container115 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18.1px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[28px]">Los Angeles, CA 90017 United States</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[323px]" data-name="Los Angeles, CA 90017 United States">
      <Heading20 />
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

function Container116() {
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
      <Container116 />
    </div>
  );
}

function Heading21() {
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
      <Heading21 />
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
    <div className="relative shrink-0 w-full" data-name="Contact">
      <div className="content-stretch flex items-start justify-between pr-[0.01px] relative w-full">
        <Email />
        <Address />
        <Call />
      </div>
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

function Container117() {
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
      <Container117 />
    </div>
  );
}

function Container119() {
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
      <Container119 />
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

function Container118() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Container121() {
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
      <Container121 />
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

function Container120() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[46px]" data-name="Container">
      <Link13 />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Privacy policy">
      <Container118 />
      <div className="bg-white rounded-[6px] shrink-0 size-[6px]" data-name="Circle" />
      <Container120 />
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

function Container123() {
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
      <Container123 />
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

function Container122() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[50px]" data-name="Container">
      <Link14 />
    </div>
  );
}

function Container125() {
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
      <Container125 />
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

function Container124() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[57px]" data-name="Container">
      <Link15 />
    </div>
  );
}

function Container127() {
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
      <Container127 />
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

function Container126() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container129() {
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
      <Container129 />
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

function Container128() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link17 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-[470px]" data-name="Socials">
      <Container122 />
      <Container124 />
      <Container126 />
      <Container128 />
    </div>
  );
}

function Container130() {
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
      <Container130 />
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
      <div className="content-stretch flex flex-col gap-[42.01px] items-start pb-[23.99px] pt-[23px] px-[20px] relative w-full">
        <LogoPrivacy />
        <SocialsCopyright />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center max-w-[1200px] pb-[20px] pt-[80px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Top />
      <Bottom />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[4258.47px]" data-name="Footer - Desktop">
      <Container95 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[4923.66px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <Container2 />
      <Container21 />
      <Container25 />
      <SectionHero />
      <SectionStatistics />
      <SectionServices />
      <SectionFaq />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[4258.47px]" data-name="Rectangle" />
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