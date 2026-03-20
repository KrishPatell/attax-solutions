import svgPaths from "./svg-9bjgfwrnnq";
import imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng from "figma:asset/e82db81198b2304297ed883d9a3eb6c48b756fa4.png";
import imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png from "figma:asset/f1e8b462dab4906b6acf1acaba0b0e886c26a681.png";
import imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng from "figma:asset/337c312991b50c5e0c66d715307b26ab129a28f4.png";
import imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng from "figma:asset/e4462a2f0c2f4c6d408fd3baf51ac28561f57c9d.png";
import imgImageContainer from "figma:asset/616727a0892581660feb6a1f4f2288fa5f7b4df6.png";
import imgOzBgN5Ii9ETq0BSFjAbNpEcN5Z0Png from "figma:asset/3635ec7fbd64f0c1285ea6b29837f1f30d899b1c.png";
import imgGreenFern from "figma:asset/e4e948213e9001c5cfad34548434de8ff965abf6.png";
import imgGreenFern1 from "figma:asset/7bc8d6b7538c79b21dbe42ed9af3decfbb1cfa34.png";
import imgGreenFern2 from "figma:asset/ce953279f894ce1bbe36ca514fe05adad69c46a6.png";
import imgGreenFern3 from "figma:asset/63cdccd411232aacd09b084be998f6964253a6f5.png";
import imgGreenFern4 from "figma:asset/255452bdbf94fa8425514547655c3d82878b99dc.png";
import imgImage from "figma:asset/e3fe97b9ef553a51f9d20fe70529e64bd45eec23.png";
import { imgBottom } from "./svg-mt5bb";

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
    <div className="absolute bottom-[2949.81px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1440px]" data-name="Container">
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
    <div className="absolute bottom-[3012.81px] content-stretch flex flex-col h-[36px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
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
    <div className="absolute bottom-[3053.81px] content-stretch flex flex-col h-[60px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <Variant />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[14.5px] text-center whitespace-nowrap">
        <p className="leading-[22.4px]">[Blog]</p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[780px]" data-name="[Blog]">
      <Container28 />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-semibold h-[178.81px] leading-[0] relative shrink-0 text-[#03030f] text-center w-full" data-name="Heading 1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[87px] justify-center left-[calc(50%+7.69px)] not-italic text-[68.6px] top-[42.5px] w-[651.61px]">
        <p className="leading-[86.4px]">{`The Optimo Growth `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[87px] justify-center left-[calc(50%-75.23px)] not-italic text-[66.5px] top-[132.9px] w-[256.2px]">
        <p className="leading-[86.4px]">Insights</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] h-[87px] italic justify-center left-[calc(50%+137.21px)] text-[72px] top-[129.4px] tracking-[-1.44px] w-[135.083px]">
        <p className="leading-[86.4px]">Blog</p>
      </div>
    </div>
  );
}

function TheOptimoGrowthInsightsBlog() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[780px]" data-name="The Optimo Growth Insights Blog">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[780px] relative shrink-0" data-name="Header">
      <Blog />
      <TheOptimoGrowthInsightsBlog />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="flex-[1_0_0] h-[400px] min-h-px min-w-px overflow-clip relative rounded-[12px]" data-name="Image container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.41%] left-0 max-w-none top-0 w-full" src={imgImageContainer} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[33.6px] not-italic relative shrink-0 text-[#03030f] text-[21.9px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`“At the heart of every great company lies a `}</p>
        <p className="mb-0">{`commitment to continuous improvement. We `}</p>
        <p className="mb-0">{`don’t just grow for the sake of growth   we grow `}</p>
        <p className="mb-0">{`to create value, simplify complexity, and solve real `}</p>
        <p className="mb-0">{`problems for real people. Thanks for being part of `}</p>
        <p>the journey.”</p>
      </div>
    </div>
  );
}

function FromStrugglingToScalingHowBusinessConsultingTransformsOperationsClarifiesVisionAndDrivesMeasurableSuccessAcrossIndustries() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'From Struggling to Scaling: How Business Consulting Transforms Operations, Clarifies Vision, and Drives Measurable Success Across Industries'">
      <Heading3 />
    </div>
  );
}

function OzBgN5Ii9ETq0BSFjAbNpEcN5Z0Png() {
  return (
    <div className="absolute inset-0 rounded-[48px]" data-name="OzBgN5ii9eTQ0bSFjABNpEcN5Z0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOzBgN5Ii9ETq0BSFjAbNpEcN5Z0Png} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[48px] shrink-0 size-[48px]" data-name="Avatar">
      <OzBgN5Ii9ETq0BSFjAbNpEcN5Z0Png />
      <div className="absolute border border-[#1d1ee3] border-solid inset-0 rounded-[48px]" data-name="Border" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.6px] w-full">
        <p className="leading-[25.2px]">Mark Henderson</p>
      </div>
    </div>
  );
}

function ZayanDaniel() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Zayan Daniel">
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.8px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[21px]">{`CEO & Founder`}</p>
      </div>
    </div>
  );
}

function HeadOfBusinessConsultancy() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Head of Business Consultancy">
      <Container31 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Name">
      <ZayanDaniel />
      <HeadOfBusinessConsultancy />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Profile">
      <Avatar />
      <Name />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[22.4px]">Read more</p>
      </div>
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[76px]" data-name="View Details">
      <Container33 />
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
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5036 10.5044">
          <path d={svgPaths.p2b915500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.009px] items-start justify-center right-[26px] top-1/2 w-[16.002px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Group5() {
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

function Svg6() {
  return (
    <div className="h-[15.995px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container35() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[0.01px] size-[15.995px] top-1/2" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container34 />
      <Container35 />
    </div>
  );
}

function ArrowPlaceholder1() {
  return (
    <div className="absolute aspect-[39/39] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip p-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function LinkTransparent1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[50px] w-full" data-name="Link - Transparent">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pr-[38px] relative size-full">
          <Text1 />
          <ArrowPlaceholder1 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start justify-center relative shrink-0 w-[131px]" data-name="Container">
      <LinkTransparent1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Profile />
      <Container32 />
    </div>
  );
}

function Content1() {
  return (
    <div className="h-full relative shrink-0 w-[610px]" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] pt-[39.485px] px-[40px] relative size-full">
          <FromStrugglingToScalingHowBusinessConsultingTransformsOperationsClarifiesVisionAndDrivesMeasurableSuccessAcrossIndustries />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function ContentAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Content:align-stretch">
      <Content1 />
    </div>
  );
}

function BlogCard() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Blog card">
      <ImageContainer />
      <div className="flex flex-row items-center self-stretch">
        <ContentAlignStretch />
      </div>
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1200px] min-w-[1200px] pb-[120px] pt-[220px] px-[30px] relative shrink-0" data-name="Section - Container">
      <Header />
      <BlogCard />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-0" data-name="Section - Hero">
      <SectionContainer />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[14.5px] w-full">
        <p className="leading-[22.4px]">[Blogs]</p>
      </div>
    </div>
  );
}

function Blog1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Blog]">
      <Container37 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-medium h-[65px] leading-[0] relative shrink-0 text-[#03030f] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[62px] justify-center left-0 not-italic text-[51px] top-[33.5px] w-[186.23px]">
        <p className="leading-[62px]">{`Popular `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[62px] italic justify-center left-[186.03px] text-[52px] top-[30.5px] w-[119.264px]">
        <p className="leading-[62px]">Blogs</p>
      </div>
    </div>
  );
}

function StrategicInsightsThatDriveBusinessSuccess() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[549px] relative shrink-0 w-[549px]" data-name="Strategic Insights That Drive Business Success">
      <Heading1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
      <Blog1 />
      <StrategicInsightsThatDriveBusinessSuccess />
    </div>
  );
}

function GreenFern() {
  return (
    <div className="absolute inset-[0_0_0.36px_0]" data-name="Green Fern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.89%] max-w-none top-0 w-[139.79%]" src={imgGreenFern} />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute aspect-[421.6600036621094/445.5299987792969] left-[-27px] right-[-27.32px] top-[-29px]" data-name="Image">
      <GreenFern />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="Image container">
      <Image3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[28px] not-italic relative shrink-0 text-[#03030f] text-[18.6px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Growth Blueprint   Strategies and `}</p>
        <p>Solutions Hub for You</p>
      </div>
    </div>
  );
}

function TheGrowthPlanAPlaybookToolkitForFuture() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The growth plan a playbook toolkit for future">
      <Heading4 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12.6px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[21px]">Focused on turning ambition into measurable outcomes.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container40 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] w-full">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container41 />
    </div>
  );
}

function Group6() {
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

function Svg7() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container42() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[26px] size-[16.002px] top-[calc(50%-0.01px)]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Group7() {
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

function Svg8() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group7 />
    </div>
  );
}

function Container43() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container42 />
      <Container43 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.19px] pr-[5.183px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow2 />
        </div>
      </div>
    </div>
  );
}

function Variant1() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails4 />
      <ArrowPlaceholder2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Header2 />
      <Variant1 />
    </div>
  );
}

function LinkV() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Link - V1">
      <ImageContainer1 />
      <Content2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <LinkV />
    </div>
  );
}

function GreenFern1() {
  return (
    <div className="absolute inset-[0_0_0.38px_0]" data-name="Green Fern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.72%] max-w-none top-0 w-[139.43%]" src={imgGreenFern1} />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute aspect-[421.6700134277344/445.55999755859375] left-[-27px] right-[-27.34px] top-[-29px]" data-name="Image">
      <GreenFern1 />
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="Image container">
      <Image4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.1px] w-full">
        <p className="leading-[28px]">Your Hub for Forward-Thinking Strategies</p>
      </div>
    </div>
  );
}

function TheGrowthPlanAPlaybookToolkitForFuture1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The growth plan a playbook toolkit for future">
      <Heading5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[12.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`A guide to navigating disruption and sparking creativity, `}</p>
        <p>offering leaders evidence.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container45 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture1 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] w-full">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container46 />
    </div>
  );
}

function Group8() {
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

function Svg9() {
  return (
    <div className="h-[15.995px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[26px] size-[15.995px] top-1/2" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5091 10.5091">
          <path d={svgPaths.p60bc200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[16.009px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container48() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.002px] items-start justify-center right-[-0.01px] top-1/2 w-[16.009px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container47 />
      <Container48 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.18px] pr-[5.193px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow3 />
        </div>
      </div>
    </div>
  );
}

function Variant2() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails5 />
      <ArrowPlaceholder3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Header3 />
      <Variant2 />
    </div>
  );
}

function LinkV1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Link - V1">
      <ImageContainer2 />
      <Content3 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <LinkV1 />
    </div>
  );
}

function GreenFern2() {
  return (
    <div className="absolute inset-[0_0_0.36px_0]" data-name="Green Fern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.89%] max-w-none top-0 w-[139.79%]" src={imgGreenFern2} />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute aspect-[421.6600036621094/445.5299987792969] left-[-27px] right-[-27.32px] top-[-29px]" data-name="Image">
      <GreenFern2 />
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="Image container">
      <Image5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[28px] not-italic relative shrink-0 text-[#03030f] text-[18.6px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Leadership Forum   Insights and `}</p>
        <p>Guidance Hub for You</p>
      </div>
    </div>
  );
}

function TheGrowthPlanAPlaybookToolkitForFuture2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The growth plan a playbook toolkit for future">
      <Heading6 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[12.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`A resource for executives and decision-makers, highlighting `}</p>
        <p>leadership principles</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container50 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture2 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour2 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] w-full">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container51 />
    </div>
  );
}

function Group10() {
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

function Svg11() {
  return (
    <div className="h-[15.995px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container52() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[26px] size-[15.995px] top-1/2" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5091 10.5091">
          <path d={svgPaths.p60bc200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="h-[16.009px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group11 />
    </div>
  );
}

function Container53() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.002px] items-start justify-center right-[-0.01px] top-1/2 w-[16.009px]" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container52 />
      <Container53 />
    </div>
  );
}

function ArrowPlaceholder4() {
  return (
    <div className="absolute bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.18px] pr-[5.193px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow4 />
        </div>
      </div>
    </div>
  );
}

function Variant3() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails6 />
      <ArrowPlaceholder4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Header4 />
      <Variant3 />
    </div>
  );
}

function LinkV2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Link - V1">
      <ImageContainer3 />
      <Content4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <LinkV2 />
    </div>
  );
}

function GreenFern3() {
  return (
    <div className="absolute inset-[0_0_0.36px_0]" data-name="Green Fern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.89%] max-w-none top-0 w-[139.79%]" src={imgGreenFern3} />
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute aspect-[421.6600036621094/445.5299987792969] left-[-27px] right-[-27.32px] top-[-29px]" data-name="Image">
      <GreenFern3 />
    </div>
  );
}

function ImageContainer4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="Image container">
      <Image6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[28px] not-italic relative shrink-0 text-[#03030f] text-[18.6px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Strategy Hub   Guidance and `}</p>
        <p>Insights for Modern Leaders</p>
      </div>
    </div>
  );
}

function TheGrowthPlanAPlaybookToolkitForFuture3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The growth plan a playbook toolkit for future">
      <Heading7 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[12.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Built to accelerate progress, this blog breaks down market `}</p>
        <p>dynamics.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container55 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture3 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour3 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] w-full">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container56 />
    </div>
  );
}

function Group12() {
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

function Svg13() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group12 />
    </div>
  );
}

function Container57() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[26px] size-[16.002px] top-[calc(50%-0.01px)]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Group13() {
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

function Svg14() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group13 />
    </div>
  );
}

function Container58() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Arrow5() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container57 />
      <Container58 />
    </div>
  );
}

function ArrowPlaceholder5() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.19px] pr-[5.183px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow5 />
        </div>
      </div>
    </div>
  );
}

function Variant4() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails7 />
      <ArrowPlaceholder5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Header5 />
      <Variant4 />
    </div>
  );
}

function LinkV3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Link - V1">
      <ImageContainer4 />
      <Content5 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <LinkV3 />
    </div>
  );
}

function GreenFern4() {
  return (
    <div className="absolute inset-[0_0_0.38px_0]" data-name="Green Fern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.72%] max-w-none top-0 w-[139.43%]" src={imgGreenFern4} />
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute aspect-[421.6700134277344/445.55999755859375] left-[-27px] right-[-27.34px] top-[-29px]" data-name="Image">
      <GreenFern4 />
    </div>
  );
}

function ImageContainer5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[12px] w-full" data-name="Image container">
      <Image7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[28px] not-italic relative shrink-0 text-[#03030f] text-[18.6px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Transformation Guide   Insights and `}</p>
        <p>Solutions Hub for You</p>
      </div>
    </div>
  );
}

function TheGrowthPlanAPlaybookToolkitForFuture4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The growth plan a playbook toolkit for future">
      <Heading8 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[21px] not-italic relative shrink-0 text-[12.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Dedicated to guiding organizations through change, it `}</p>
        <p>provides insights.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container60 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture4 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour4 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] w-full">
        <p className="leading-[22.4px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container61 />
    </div>
  );
}

function Group14() {
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

function Svg15() {
  return (
    <div className="h-[15.995px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group14 />
    </div>
  );
}

function Container62() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[26px] size-[15.995px] top-1/2" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Group">
      <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5091 10.5091">
          <path d={svgPaths.p60bc200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[16.009px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group15 />
    </div>
  );
}

function Container63() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.002px] items-start justify-center right-[-0.01px] top-1/2 w-[16.009px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Arrow6() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container62 />
      <Container63 />
    </div>
  );
}

function ArrowPlaceholder6() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.18px] pr-[5.193px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow6 />
        </div>
      </div>
    </div>
  );
}

function Variant5() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails8 />
      <ArrowPlaceholder6 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Header6 />
      <Variant5 />
    </div>
  );
}

function LinkV4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Link - V1">
      <ImageContainer5 />
      <Content6 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <LinkV4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[1150px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute flex h-[555px] items-center justify-center left-[-224.34px] right-[549px] top-0">
        <div className="-scale-y-100 flex-none h-[555px] rotate-180 w-[815.34px]">
          <Container39 />
        </div>
      </div>
      <div className="absolute flex h-[555px] items-center justify-center left-[162.33px] right-[162.34px] top-0">
        <div className="-scale-y-100 flex-none h-[555px] rotate-180 w-[815.33px]">
          <Container44 />
        </div>
      </div>
      <div className="absolute flex h-[555px] items-center justify-center left-[548.99px] right-[-224.33px] top-0">
        <div className="-scale-y-100 flex-none h-[555px] rotate-180 w-[815.34px]">
          <Container49 />
        </div>
      </div>
      <div className="absolute flex h-[555px] items-center justify-center left-[-224.34px] right-[549px] top-[595px]">
        <div className="-scale-y-100 flex-none h-[555px] rotate-180 w-[815.34px]">
          <Container54 />
        </div>
      </div>
      <div className="absolute flex h-[555px] items-center justify-center left-[162.33px] right-[162.34px] top-[595px]">
        <div className="-scale-y-100 flex-none h-[555px] rotate-180 w-[815.33px]">
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start max-w-[1200px] min-w-[1200px] pt-[120px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Header1 />
      <Container38 />
    </div>
  );
}

function SectionBlog() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[993.22px]" data-name="Section - Blog">
      <Container36 />
    </div>
  );
}

function Container65() {
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
      <Container65 />
    </div>
  );
}

function Heading2() {
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
      <Heading2 />
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] items-start relative shrink-0 w-full" data-name="Header">
      <Cta />
      <WorkWithExpertsToGrowFasterRunSmarter />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.6px] whitespace-nowrap">
        <p className="leading-[22.4px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.88px)] top-0 w-[82px]" data-name="View Details">
      <Container67 />
    </div>
  );
}

function ViewDetails10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.51px)] top-[27.41px] w-[46.97px]" data-name="View Details">
      <div className="h-[22.41px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails9 />
      <ViewDetails10 />
    </div>
  );
}

function Group16() {
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

function Svg17() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group16 />
    </div>
  );
}

function Container68() {
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
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6309 13.1317">
          <path d={svgPaths.p3f7e580} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group17 />
    </div>
  );
}

function Container69() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.011px] items-start justify-center right-[-0.01px] top-1/2 w-[20.004px]" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Arrow7() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container68 />
      <Container69 />
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
          <Text2 />
          <ArrowPlaceholder7 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[167px]" data-name="Container">
      <LinkWhite />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Header & button">
      <Header7 />
      <Container66 />
    </div>
  );
}

function Container70() {
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
      <Container70 />
    </div>
  );
}

function Group18() {
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

function Svg19() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group18 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
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
      <Container72 />
    </div>
  );
}

function Group19() {
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

function Svg20() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group19 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg20 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
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
      <Container74 />
    </div>
  );
}

function Group20() {
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

function Svg21() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group20 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg21 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container75 />
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
    <div className="content-stretch flex flex-col gap-[59.99px] items-start justify-center overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-[568px]" data-name="Left">
      <HeaderButton />
      <Features />
    </div>
  );
}

function Image8() {
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
      <Image8 />
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

function Container64() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[1200px] overflow-clip px-[30px] py-[120px] relative shrink-0 w-[1200px]" data-name="Container">
      <BlueContainer />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip px-[120px] right-0 top-[2418.63px]" data-name="Section - CTA">
      <Container64 />
    </div>
  );
}

function Heading9() {
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
      <Heading9 />
    </div>
  );
}

function Container77() {
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
          <Container77 />
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

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white whitespace-nowrap">
        <p className="leading-[22.4px]">Subscribe</p>
      </div>
    </div>
  );
}

function ViewDetails11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="View Details">
      <Container79 />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[23px] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[5px] relative size-full">
          <ViewDetails11 />
        </div>
      </div>
    </div>
  );
}

function Group21() {
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

function Svg22() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group21 />
    </div>
  );
}

function Container80() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[30px] top-1/2 w-[19.997px]" data-name="Container">
      <Svg22 />
    </div>
  );
}

function Group22() {
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

function Svg23() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group22 />
    </div>
  );
}

function Container81() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg23 />
    </div>
  );
}

function Arrow8() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container80 />
      <Container81 />
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
          <Text3 />
          <ArrowPlaceholder8 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
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
          <Container78 />
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

function Container82() {
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
      <Container82 />
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

function Heading10() {
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
      <Heading10 />
    </div>
  );
}

function Container83() {
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
      <Container83 />
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

function Container84() {
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
      <Container84 />
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

function Container85() {
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
      <Container85 />
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

function Container86() {
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
      <Container86 />
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

function Heading11() {
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
      <Heading11 />
    </div>
  );
}

function Container87() {
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
      <Container87 />
    </div>
  );
}

function Home11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Home">
      <div className="h-[24px] shrink-0 w-[54.95px]" data-name="Rectangle" />
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

function Container88() {
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
      <Container88 />
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

function Container89() {
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
      <Container89 />
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

function Container90() {
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
      <Container90 />
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

function Heading12() {
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
      <Heading12 />
    </div>
  );
}

function Container91() {
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
      <Container91 />
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

function Container92() {
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
      <Container92 />
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

function Container93() {
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
      <Container93 />
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

function Container94() {
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
      <Container94 />
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

function Container95() {
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
      <Container95 />
    </div>
  );
}

function Heading13() {
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
      <Heading13 />
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

function Container96() {
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
      <Container96 />
    </div>
  );
}

function Heading14() {
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
      <Heading14 />
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

function Container97() {
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
      <Container97 />
    </div>
  );
}

function Heading15() {
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
      <Heading15 />
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

function Container98() {
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
      <Container98 />
    </div>
  );
}

function Container100() {
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
      <Container100 />
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

function Container99() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Container102() {
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
      <Container102 />
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

function Container101() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[46px]" data-name="Container">
      <Link13 />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Privacy policy">
      <Container99 />
      <div className="bg-white rounded-[6px] shrink-0 size-[6px]" data-name="Circle" />
      <Container101 />
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

function Container104() {
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
      <Container104 />
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

function Container103() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[50px]" data-name="Container">
      <Link14 />
    </div>
  );
}

function Container106() {
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
      <Container106 />
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

function Container105() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[57px]" data-name="Container">
      <Link15 />
    </div>
  );
}

function Container108() {
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
      <Container108 />
    </div>
  );
}

function Home35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Home">
      <div className="h-[24px] shrink-0 w-[68.22px]" data-name="Rectangle" />
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

function Container107() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container110() {
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
      <Container110 />
    </div>
  );
}

function Home37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Home">
      <div className="h-[24px] shrink-0 w-[68.7px]" data-name="Rectangle" />
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

function Container109() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link17 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-[470px]" data-name="Socials">
      <Container103 />
      <Container105 />
      <Container107 />
      <Container109 />
    </div>
  );
}

function Container111() {
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
      <Container111 />
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

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center max-w-[1200px] pb-[20px] pt-[80px] px-[30px] relative shrink-0 w-[1200px]" data-name="Container">
      <Top />
      <Bottom />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[3184.63px]" data-name="Footer - Desktop">
      <Container76 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[3849.81px] min-h-[900px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <Container2 />
      <Container21 />
      <Container25 />
      <SectionHero />
      <SectionBlog />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[3184.63px]" data-name="Rectangle" />
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