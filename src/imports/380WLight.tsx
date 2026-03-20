import svgPaths from "./svg-spnj7ewrfy";
import imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng from "figma:asset/e82db81198b2304297ed883d9a3eb6c48b756fa4.png";
import imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png from "figma:asset/f1e8b462dab4906b6acf1acaba0b0e886c26a681.png";
import imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng from "figma:asset/337c312991b50c5e0c66d715307b26ab129a28f4.png";
import imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng from "figma:asset/e4462a2f0c2f4c6d408fd3baf51ac28561f57c9d.png";
import imgM7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng from "figma:asset/dcd7a2d59386ac22bbf6091d28ff6d91526ac58d.png";
import imgM1DgmyL7T3EYqchbDWnkQNgJw5OPng from "figma:asset/435a0845292b6246b32459ea56ab67aeea6283b8.png";
import imgW5PVxNsR3H7FuGOgpM2Cl9C3LUPng from "figma:asset/dbb178d078827725b8b780977253071d173a397a.png";
import imgImage from "figma:asset/e3fe97b9ef553a51f9d20fe70529e64bd45eec23.png";
import { imgBottom } from "./svg-yr1el";

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
    <div className="absolute bottom-[5664.16px] content-stretch flex items-start justify-end left-0 p-[20px] w-[380px]" data-name="Container">
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

function Optimo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[111px]" data-name="Optimo">
      <Container4 />
    </div>
  );
}

function LinkLogo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link - Logo">
      <Optimo />
    </div>
  );
}

function Background() {
  return <div className="absolute bg-[#1d1ee3] bottom-[8px] h-[4px] left-0 right-0 rounded-[100px]" data-name="Background" />;
}

function Background1() {
  return <div className="absolute bg-[#1d1ee3] h-[4px] left-0 right-0 rounded-[100px] top-[15.5px]" data-name="Background" />;
}

function Background2() {
  return <div className="absolute bg-[#1d1ee3] h-[4px] left-0 right-0 rounded-[100px] top-[8px]" data-name="Background" />;
}

function Hamburger() {
  return (
    <div className="overflow-clip relative shrink-0 size-[35px]" data-name="Hamburger">
      <Background />
      <Background1 />
      <Background2 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <LinkLogo />
      <Hamburger />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[1140px] min-h-px min-w-px relative rounded-[20px]" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] p-[16px] relative w-full">
          <Top />
        </div>
      </div>
    </div>
  );
}

function NavTablet() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav - Tablet">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pt-[10px] px-[10px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <NavTablet />
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

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[11px]" data-name="SVG">
      <ImageFill2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute aspect-[17/17] bg-white bottom-[26.39%] content-stretch flex items-center justify-center right-[11px] rounded-[50px] top-[26.39%]" data-name="Icon">
      <Svg />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.7px] whitespace-nowrap">
        <p className="leading-[14px]">Buy for $79</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[72px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container8() {
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
          <Container6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[5727.16px] content-stretch flex flex-col h-[36px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
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

function Container11() {
  return (
    <div className="absolute h-[52px] left-0 overflow-clip top-0 w-[132px]" data-name="Container">
      <List />
    </div>
  );
}

function Section() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Section">
      <Container11 />
    </div>
  );
}

function Container10() {
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
          <Container10 />
          <div className="absolute inset-0 rounded-[8px]" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[5768.16px] content-stretch flex flex-col h-[60px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <Variant />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[13.4px] w-full">
        <p className="leading-[24px]">[Visit Us]</p>
      </div>
    </div>
  );
}

function VisitUs() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Visit Us]">
      <Container12 />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-semibold h-[50px] leading-[0] relative shrink-0 text-[#03030f] w-full" data-name="Heading 1">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] h-[48px] justify-center left-0 not-italic text-[39.8px] top-[25.5px] w-[118.14px]">
        <p className="leading-[48px]">{`Office `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] h-[48px] italic justify-center left-[117.94px] text-[40px] top-[23.5px] tracking-[-0.8px] w-[149.979px]">
        <p className="leading-[48px]">Location</p>
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.4px] not-italic relative shrink-0 text-[14.5px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our office is conveniently located in the heart of `}</p>
        <p className="mb-0">{`theses cities, providing easy access for clients `}</p>
        <p>and partners.</p>
      </div>
    </div>
  );
}

function HeaderDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[7.405px] items-start relative shrink-0 w-full" data-name="Header & Desc">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.4px] w-full">
        <p className="leading-[28px]">USA Headquater</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[22.4px]">Los Angeles, CA 90017 United States</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Los Angeles, CA 90017 United States">
      <Container13 />
    </div>
  );
}

function HeaderDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Header & Desc">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.4px] w-full">
        <p className="leading-[28px]">Europe Headquarter</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[22.4px]">Ireland , County Dublin D02 ABC1</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Los Angeles, CA 90017 United States">
      <Container14 />
    </div>
  );
}

function HeaderDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Header & Desc">
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

function Locations() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Locations">
      <Variant1 />
      <Variant2 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Right">
      <HeaderDesc />
      <Locations />
    </div>
  );
}

function M7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="m7Ky2jQMrJLdoBZb3FH8ks16q5k.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[113.71%] left-0 max-w-none top-[-6.86%] w-full" src={imgM7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[14.8px] whitespace-nowrap">
        <p className="leading-[21px]">{`Dublin `}</p>
      </div>
    </div>
  );
}

function Dublin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[49px]" data-name="Dublin">
      <Container15 />
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
    <div className="h-[299px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <M7Ky2JQMrJLdoBZb3Fh8Ks16Q5KPng />
        <Tag />
      </div>
    </div>
  );
}

function M1DgmyL7T3EYqchbDWnkQNgJw5OPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="M1dgmyL7T3eYqchbDWnkQNgJw5o.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[113.71%] left-0 max-w-none top-[-6.86%] w-full" src={imgM1DgmyL7T3EYqchbDWnkQNgJw5OPng} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Los Angeles</p>
      </div>
    </div>
  );
}

function Dublin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[81px]" data-name="Dublin">
      <Container16 />
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
    <div className="h-[299px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <M1DgmyL7T3EYqchbDWnkQNgJw5OPng />
        <Tag1 />
      </div>
    </div>
  );
}

function W5PVxNsR3H7FuGOgpM2Cl9C3LUPng() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="w5PVxNsR3H7fuGOgpM2cl9C3lU.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-16.02%] max-w-none top-0 w-[132.04%]" src={imgW5PVxNsR3H7FuGOgpM2Cl9C3LUPng} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[21px]">Remote</p>
      </div>
    </div>
  );
}

function Dublin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[51px]" data-name="Dublin">
      <Container17 />
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
    <div className="h-[299px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <W5PVxNsR3H7FuGOgpM2Cl9C3LUPng />
        <Tag2 />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[929px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Left">
      <Image5 />
      <Image6 />
      <Image7 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Section - Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start justify-center max-w-[inherit] pb-[60px] pt-[160px] px-[20px] relative w-full">
          <Right />
          <Left />
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex flex-col items-center justify-center left-0 right-0 top-0" data-name="Section - Hero">
      <SectionContainer />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[13.7px] whitespace-nowrap">
        <p className="leading-[21px]">[Contact]</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[63px]" data-name="[Contact]">
      <Container18 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[5.41px] items-start leading-[0] relative shrink-0 text-[#03030f] text-[52px] w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[62.4px]">{`Drop Us a `}</p>
      </div>
      <div className="flex flex-col font-['Newsreader:Medium_Italic',sans-serif] italic justify-center relative shrink-0">
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.4px] not-italic relative shrink-0 text-[14.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We’re always happy to hear from you and will get `}</p>
        <p>back to you as soon as possible.</p>
      </div>
    </div>
  );
}

function HeaderDesc3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Header & Desc">
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

function Container19() {
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
      <Container19 />
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

function Container20() {
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
      <Container20 />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start min-h-px min-w-px relative" data-name="Details">
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

function Container21() {
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
      <Container21 />
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
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[340px]" data-name="Left">
      <HeaderDesc3 />
      <Contact1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.6px] whitespace-nowrap">
        <p className="leading-[25.2px]">Full Name</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[78px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container24() {
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
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
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
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Label">
      <Container22 />
      <Background3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.5px] whitespace-nowrap">
        <p className="leading-[25.2px]">Email Address</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container27() {
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
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
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
      <Container25 />
      <Background4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.6px] whitespace-nowrap">
        <p className="leading-[25.2px]">Write Your Message</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[159px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bottom-[68.8px] content-stretch flex flex-col items-start left-[12px] pr-[98.48px] top-[11px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">I want to collaborate</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="h-[100px] min-h-[100px] overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Textarea">
      <Container30 />
      <div className="absolute bottom-[68.81px] left-[12px] top-[12px] w-[252px]" data-name="Rectangle" />
    </div>
  );
}

function Background5() {
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
    <div className="content-stretch flex flex-col gap-[10.01px] items-start relative shrink-0 w-full" data-name="Label">
      <Container28 />
      <Background5 />
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="View Details">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Send Message</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-[196px]" data-name="Text">
      <ViewDetails />
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

function Svg1() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
    </div>
  );
}

function Container32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg1 />
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

function Svg2() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container32 />
      <Container33 />
    </div>
  );
}

function ArrowPlaceholder() {
  return (
    <div className="absolute aspect-[48/48] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="bg-[#1d1ee3] content-stretch flex h-[56px] items-center justify-center overflow-clip pl-[30px] pr-[50px] py-[4px] relative rounded-[50px] shrink-0" data-name="Link - Container">
      <Text />
      <ArrowPlaceholder />
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <ButtonDefault />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#f7f7f4] content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[32px] py-[40px] relative rounded-[24px] shrink-0 w-[340px]" data-name="Form">
      <Label />
      <Label1 />
      <Label2 />
      <Container31 />
    </div>
  );
}

function PricingDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center max-w-[1200px] pt-[40px] px-[20px] relative shrink-0" data-name="Pricing details">
      <Left1 />
      <Form />
    </div>
  );
}

function SectionDetails() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 overflow-clip right-0 top-[1715.03px]" data-name="Section - Details">
      <PricingDetails />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col font-medium gap-[0.29px] items-start leading-[0] pb-[2.3px] relative shrink-0 text-[#03030f] w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[33.2px]">
        <p className="leading-[40.8px] whitespace-pre">{`Friendly Asked  `}</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] italic justify-center relative shrink-0 text-[34px]">
        <p className="leading-[40.8px]">Questions.</p>
      </div>
    </div>
  );
}

function FriendlyAskedQuestions() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[400px] relative shrink-0 w-full" data-name="Friendly Asked Questions.">
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

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our team is ready to assist you with anything `}</p>
        <p>you need.</p>
      </div>
    </div>
  );
}

function OurTeamIsReadyToAssistYouWithAnythingYouNeed() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Our team is ready to assist you with anything you need.">
      <Container35 />
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Make A Call</p>
      </div>
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.78px)] top-0 w-[78px]" data-name="View Details">
      <Container37 />
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails1 />
      <ViewDetails2 />
    </div>
  );
}

function Group2() {
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

function Svg3() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Group3() {
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

function Svg4() {
  return (
    <div className="h-[20.011px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[-0.01px] top-[calc(50%+0.01px)] w-[20.011px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container38 />
      <Container39 />
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

function Container36() {
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
        <Container36 />
      </div>
    </div>
  );
}

function HeaderCta() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Header & CTA">
      <FriendlyAskedQuestions />
      <Question />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.5px] w-full">
        <p className="leading-[25.2px]">What industries does Optimo serve?</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.6px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How do I know which service is right `}</p>
        <p>for my business?</p>
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

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.9px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`It starts with a conversation. During an initial `}</p>
        <p className="mb-0">{`consultation, we’ll learn about your goals, `}</p>
        <p className="mb-0">{`challenges, and opportunities, then recommend `}</p>
        <p className="mb-0">{`services whether that’s growth planning, talent `}</p>
        <p className="mb-0">{`strategy, or performance optimization best `}</p>
        <p>aligned to your needs.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[530px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Answer() {
  return (
    <div className="opacity-80 relative shrink-0 w-full" data-name="Answer">
      <div className="content-stretch flex flex-col items-start pr-[20px] relative w-full">
        <Container40 />
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.7px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Do you offer customized solutions `}</p>
        <p>or standard frameworks?</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.7px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`How do you measure success with `}</p>
        <p>clients?</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.3px] w-full">
        <p className="leading-[25.2px]">How can I get started with Optimo?</p>
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

function Container34() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[19.99px] items-start justify-center max-w-[inherit] pb-[0.01px] pt-[59px] px-[20px] relative w-full">
          <HeaderCta />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

function SectionFaq() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 overflow-clip right-0 top-[2769.66px]" data-name="Section - FAQ">
      <Container34 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-white whitespace-nowrap">
        <p className="leading-[21px]">[CTA]</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[38px]" data-name="[CTA]">
      <Container43 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="font-medium h-[124.39px] relative shrink-0 text-[#eaeaff] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[82px] justify-center leading-[40.8px] left-0 not-italic text-[32.1px] top-[39.9px] w-[280.39px] whitespace-pre-wrap">
        <p className="mb-0">{`Work with Experts `}</p>
        <p>{`to Grow Faster & `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[41px] justify-center leading-[0] left-0 not-italic text-[34px] top-[103.1px] w-[66px]">
        <p className="leading-[40.8px]">{`Run `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[41px] italic justify-center leading-[0] left-[65.8px] text-[34px] top-[101.6px] w-[122.479px]">
        <p className="leading-[40.8px]">Smarter</p>
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

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.7px] whitespace-nowrap">
        <p className="leading-[21px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.92px)] top-0 w-[77px]" data-name="View Details">
      <Container45 />
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
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

function Group4() {
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

function Svg5() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container46() {
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
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6364 13.1363">
          <path d={svgPaths.p345e5300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[20.011px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[-0.01px] top-[calc(50%+0.01px)] w-[20.011px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container46 />
      <Container47 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute aspect-[48/48] bg-[#1d1ee3] bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow2 />
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
          <ArrowPlaceholder2 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
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
      <Container44 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Schedule a Free Consultation</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-w-[251.27000427246094px] relative shrink-0 w-[251.27px]" data-name="Future-Ready Strategies">
      <Container48 />
    </div>
  );
}

function Group6() {
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

function Svg7() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group6 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Discover Custom Solutions</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-w-[251.27000427246094px] relative shrink-0 w-[251.27px]" data-name="Future-Ready Strategies">
      <Container50 />
    </div>
  );
}

function Group7() {
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

function Svg8() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group7 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.7px] text-white whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Start Building Your Competitive `}</p>
        <p>Advantage</p>
      </div>
    </div>
  );
}

function FutureReadyStrategies2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end min-w-[251.27000427246094px] relative shrink-0 w-[251.27px]" data-name="Future-Ready Strategies">
      <Container52 />
    </div>
  );
}

function Group8() {
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

function Svg9() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[275.27px]" data-name="Features">
      <Small />
      <Small1 />
      <Small2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Left">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start justify-center p-[10px] relative w-full">
          <HeaderButton />
          <Features />
        </div>
      </div>
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
    <div className="h-[473px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Right">
      <Image11 />
    </div>
  );
}

function BlueContainer() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[16px] shrink-0 w-full" data-name="Blue container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
        <Left2 />
        <Right1 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] px-[20px] py-[60px] relative w-full">
          <BlueContainer />
        </div>
      </div>
    </div>
  );
}

function SectionCta() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 overflow-clip right-0 top-[3816.06px]" data-name="Section - CTA">
      <Container42 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.3px] whitespace-nowrap">
        <p className="leading-[28px]">Newsletter</p>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[96px]" data-name="Newsletter">
      <Heading12 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[16px] w-full">
        <p className="leading-[normal]">Enter your email …</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[10px] relative size-full">
          <Container55 />
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

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Subscribe</p>
      </div>
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]" data-name="View Details">
      <Container57 />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[23px] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[5px] relative size-full">
          <ViewDetails5 />
        </div>
      </div>
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

function Container58() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[30px] size-[19.997px] top-1/2" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Group10() {
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

function Svg11() {
  return (
    <div className="h-[20.011px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container59() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[-0.01px] top-[calc(50%+0.01px)] w-[20.011px]" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container58 />
      <Container59 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[32/32] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[0.44px] pr-[0.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow3 />
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
          <ArrowPlaceholder3 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
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
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[473px] relative shrink-0 w-full" data-name="Form & Header">
      <Newsletter />
      <Form1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[24px]">Let’s transform your vision into results.</p>
      </div>
    </div>
  );
}

function LetsTransformYourVisionIntoResults() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Let’s transform your vision into results.">
      <Container60 />
    </div>
  );
}

function Subscribe() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Subscribe">
      <FormHeader />
      <LetsTransformYourVisionIntoResults />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.4px] w-full">
        <p className="leading-[28px]">Main Pages</p>
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

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[39px]" data-name="Home">
      <Container61 />
    </div>
  );
}

function Home1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[38.98px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home />
      <Home1 />
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

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.7px] whitespace-nowrap">
        <p className="leading-[24px]">Case Study</p>
      </div>
    </div>
  );
}

function Home2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[75px]" data-name="Home">
      <Container62 />
    </div>
  );
}

function Home3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[74.31px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home2 />
      <Home3 />
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

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.5px] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function Home4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[44px]" data-name="Home">
      <Container63 />
    </div>
  );
}

function Home5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[43.66px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home4 />
      <Home5 />
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.7px] whitespace-nowrap">
        <p className="leading-[24px]">Blog</p>
      </div>
    </div>
  );
}

function Home6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[29px]" data-name="Home">
      <Container64 />
    </div>
  );
}

function Home7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[28.59px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home6 />
      <Home7 />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function MainPages() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Main pages">
      <MainPages1 />
      <Links1 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[18.6px] w-full">
        <p className="leading-[28px]">Company</p>
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

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.7px] whitespace-nowrap">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Home8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[52px]" data-name="Home">
      <Container65 />
    </div>
  );
}

function Home9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[51.53px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home8 />
      <Home9 />
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.6px] whitespace-nowrap">
        <p className="leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function Home10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[56px]" data-name="Home">
      <Container66 />
    </div>
  );
}

function Home11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[55.34px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home10 />
      <Home11 />
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

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.7px] whitespace-nowrap">
        <p className="leading-[24px]">About Us</p>
      </div>
    </div>
  );
}

function Home12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[61px]" data-name="Home">
      <Container67 />
    </div>
  );
}

function Home13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[59.94px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home12 />
      <Home13 />
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

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.5px] whitespace-nowrap">
        <p className="leading-[24px]">Pricing</p>
      </div>
    </div>
  );
}

function Home14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[44px]" data-name="Home">
      <Container68 />
    </div>
  );
}

function Home15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[43.66px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home14 />
      <Home15 />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Links">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Company">
      <Company1 />
      <Links2 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[19.5px] w-full">
        <p className="leading-[28px]">{`Template `}</p>
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

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.5px] whitespace-nowrap">
        <p className="leading-[24px]">Service Details</p>
      </div>
    </div>
  );
}

function Home16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[96px]" data-name="Home">
      <Container69 />
    </div>
  );
}

function Home17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[95.16px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home16 />
      <Home17 />
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.5px] whitespace-nowrap">
        <p className="leading-[24px]">Case Study Details</p>
      </div>
    </div>
  );
}

function Home18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[121px]" data-name="Home">
      <Container70 />
    </div>
  );
}

function Home19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[121.27px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home18 />
      <Home19 />
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

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.8px] whitespace-nowrap">
        <p className="leading-[24px]">Changelog</p>
      </div>
    </div>
  );
}

function Home20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[71px]" data-name="Home">
      <Container71 />
    </div>
  );
}

function Home21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[70.22px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home20 />
      <Home21 />
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

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[24px]">404</p>
      </div>
    </div>
  );
}

function Home22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[27px]" data-name="Home">
      <Container72 />
    </div>
  );
}

function Home23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[26.52px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home22 />
      <Home23 />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Links">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Template() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Template">
      <Template1 />
      <Links3 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[485px] relative shrink-0 w-full" data-name="Links">
      <MainPages />
      <Company />
      <Template />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Subscribe />
      <Links />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.8px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[19.5px]">Email</p>
      </div>
    </div>
  );
}

function Email5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[30px]" data-name="Email">
      <Container73 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">contactinfo@gmail.com</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[188px]" data-name="contactinfo@gmail.com">
      <Heading16 />
    </div>
  );
}

function Email4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Email">
      <Email5 />
      <ContactinfoGmailCom3 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[19.5px]">Visit Us</p>
      </div>
    </div>
  );
}

function VisitUs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[42px]" data-name="Visit Us">
      <Container74 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">Los Angeles, CA 90017 United States</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[291px]" data-name="Los Angeles, CA 90017 United States">
      <Heading17 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Address">
      <VisitUs2 />
      <LosAngelesCa90017UnitedStates2 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.8px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[19.5px]">Call us Now</p>
      </div>
    </div>
  );
}

function CallUsNow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]" data-name="Call us Now">
      <Container75 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">+99 1234 5478</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[120px]" data-name="+99 1234 5478">
      <Heading18 />
    </div>
  );
}

function Call1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Call">
      <CallUsNow />
      <Component />
    </div>
  );
}

function Contact2() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full" data-name="Contact">
      <Email4 />
      <Address />
      <Call1 />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full" data-name="Top">
      <Frame />
      <Contact2 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#eaeaff] text-[31px] text-center uppercase whitespace-nowrap">
        <p className="leading-[41.6px]">Optimo</p>
      </div>
    </div>
  );
}

function Optimo1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[127px]" data-name="Optimo">
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Changelog</p>
      </div>
    </div>
  );
}

function Home24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[71px]" data-name="Home">
      <Container78 />
    </div>
  );
}

function Home25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[70.22px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home24 />
      <Home25 />
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

function Container77() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Terms</p>
      </div>
    </div>
  );
}

function Home26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41px]" data-name="Home">
      <Container80 />
    </div>
  );
}

function Home27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[40.11px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home26 />
      <Home27 />
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

function Container79() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[46px]" data-name="Container">
      <Link13 />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Privacy policy">
      <Container77 />
      <Container79 />
    </div>
  );
}

function LogoPrivacy() {
  return (
    <div className="content-stretch flex flex-col gap-[20.01px] items-start relative shrink-0 w-full" data-name="Logo & privacy">
      <Optimo1 />
      <PrivacyPolicy />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Twitter</p>
      </div>
    </div>
  );
}

function Home28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[45px]" data-name="Home">
      <Container82 />
    </div>
  );
}

function Home29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[44.63px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home28 />
      <Home29 />
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

function Container81() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[50px]" data-name="Container">
      <Link14 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white whitespace-nowrap">
        <p className="leading-[24px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Home30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[54px]" data-name="Home">
      <Container84 />
    </div>
  );
}

function Home31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[53.56px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home30 />
      <Home31 />
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

function Container83() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[57px]" data-name="Container">
      <Link15 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function Home32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[65px]" data-name="Home">
      <Container86 />
    </div>
  );
}

function Home33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[63.97px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home32 />
      <Home33 />
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

function Container85() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Home34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[65px]" data-name="Home">
      <Container88 />
    </div>
  );
}

function Home35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[64.42px]" data-name="Home">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Title17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start justify-center left-0 right-[20px] top-0" data-name="Title">
      <Home34 />
      <Home35 />
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

function Container87() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link17 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Socials">
      <Container81 />
      <Container83 />
      <Container85 />
      <Container87 />
    </div>
  );
}

function Component2025AllRightsReserved() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.06px]" data-name="© 2025 .All rights reserved.">
      <div className="h-[19.5px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function SocialsCopyright() {
  return (
    <div className="content-stretch flex gap-[465px] items-start pt-[20px] relative shrink-0 w-[618.06px]" data-name="Socials & Copyright">
      <Socials />
      <Component2025AllRightsReserved />
      <div className="absolute inset-[0_318.06px_0_0]" data-name="HorizontalBorder">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.6)] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[8px] shrink-0 w-full" data-name="Bottom">
      <div className="content-stretch flex flex-col gap-[30.01px] items-start pb-[23.99px] pt-[23px] px-[20px] relative w-full">
        <LogoPrivacy />
        <SocialsCopyright />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center max-w-[inherit] pb-[20px] pt-[80px] px-[20px] relative w-full">
          <Top1 />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function FooterPhone() {
  return (
    <div className="absolute bg-[#f7f7f4] content-stretch flex flex-col items-center justify-center left-0 overflow-clip right-0 top-[4860.45px]" data-name="Footer - Phone">
      <Container54 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[6424.16px] min-h-[760px] relative shrink-0 w-full" data-name="End of bodyStart">
      <Container2 />
      <Container5 />
      <Container9 />
      <SectionHero />
      <SectionDetails />
      <SectionFaq />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[4860.45px]" data-name="Rectangle" />
      <FooterPhone />
    </div>
  );
}

export default function Component380WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="380w light">
      <Container />
      <EndOfBodyStart />
    </div>
  );
}