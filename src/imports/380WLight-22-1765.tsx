import svgPaths from "./svg-qtchxfhunb";
import imgItemCoverVoui19YhvlTrMw30LyYkvKkP2UPng from "figma:asset/e82db81198b2304297ed883d9a3eb6c48b756fa4.png";
import imgItemScreenshot1Te26RQp4D0RlgnQKdAe90TzYd0Png from "figma:asset/f1e8b462dab4906b6acf1acaba0b0e886c26a681.png";
import imgItemScreenshot22UHrE7DNbkboPd52Y9TOxjKt8UPng from "figma:asset/337c312991b50c5e0c66d715307b26ab129a28f4.png";
import imgItemScreenshot3A3Wp6YjGjkY8Y1NygXdc9Rm4YasPng from "figma:asset/e4462a2f0c2f4c6d408fd3baf51ac28561f57c9d.png";
import imgImageContainer from "figma:asset/e0e18ea5f6b607c3c849730b77cf834b30b7e551.png";
import imgOzBgN5Ii9ETq0BSFjAbNpEcN5Z0Png from "figma:asset/3635ec7fbd64f0c1285ea6b29837f1f30d899b1c.png";
import imgImage from "figma:asset/e4e948213e9001c5cfad34548434de8ff965abf6.png";
import imgImage1 from "figma:asset/7bc8d6b7538c79b21dbe42ed9af3decfbb1cfa34.png";
import imgImage2 from "figma:asset/ce953279f894ce1bbe36ca514fe05adad69c46a6.png";
import imgImage3 from "figma:asset/63cdccd411232aacd09b084be998f6964253a6f5.png";
import imgImage4 from "figma:asset/255452bdbf94fa8425514547655c3d82878b99dc.png";
import imgImage5 from "figma:asset/e3fe97b9ef553a51f9d20fe70529e64bd45eec23.png";
import { imgBottom } from "./svg-pfykc";

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
    <div className="absolute bottom-[5766.89px] content-stretch flex items-start justify-end left-0 p-[20px] w-[380px]" data-name="Container">
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
    <div className="absolute bottom-[5829.89px] content-stretch flex flex-col h-[36px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
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
    <div className="absolute bottom-[5870.89px] content-stretch flex flex-col h-[60px] items-start justify-center right-[20px] w-[140px]" data-name="Container">
      <Variant />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[13.6px] w-full">
        <p className="leading-[21px]">[Blog]</p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Blog]">
      <Container12 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-semibold items-start pb-[2.5px] relative shrink-0 text-[#03030f] w-full whitespace-nowrap" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[37px] whitespace-pre">
        <p className="mb-0">{`The Optimo `}</p>
        <p>Growth Insights</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display:SemiBold_Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[40px] tracking-[-0.8px]">
        <p className="leading-[48px]">Blog</p>
      </div>
    </div>
  );
}

function TheOptimoGrowthInsightsBlog() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Optimo Growth Insights Blog">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[780px] relative shrink-0 w-full" data-name="Header">
      <Blog />
      <TheOptimoGrowthInsightsBlog />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[400px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Image container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-26.57%] max-w-none top-0 w-[155.25%]" src={imgImageContainer} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[28px] not-italic relative shrink-0 text-[#03030f] text-[19.4px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`“At the heart of every great `}</p>
        <p className="mb-0">{`company lies a commitment to `}</p>
        <p className="mb-0">{`continuous improvement. We `}</p>
        <p className="mb-0">{`don’t just grow for the sake of `}</p>
        <p className="mb-0">{`growth — we grow to create `}</p>
        <p className="mb-0">{`value, simplify complexity, and `}</p>
        <p className="mb-0">{`solve real problems for real `}</p>
        <p className="mb-0">{`people. Thanks for being part of `}</p>
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

function Container14() {
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
    <div className="content-stretch flex flex-col items-start justify-end mb-[-1px] relative shrink-0 w-full" data-name="Zayan Daniel">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.9px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[19.5px]">{`CEO & Founder`}</p>
      </div>
    </div>
  );
}

function HeadOfBusinessConsultancy() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end mb-[-1px] relative shrink-0 w-full" data-name="Head of Business Consultancy">
      <Container15 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-px relative" data-name="Name">
      <ZayanDaniel />
      <HeadOfBusinessConsultancy />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Profile">
      <Avatar />
      <Name />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Read more</p>
      </div>
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+3px)] top-0 w-[72px]" data-name="View Details">
      <Container17 />
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
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
      <Group />
    </div>
  );
}

function Container18() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[19.997px] items-start justify-center right-[30px] top-1/2 w-[20.004px]" data-name="Container">
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

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.011px] items-start justify-center right-[-0.01px] top-1/2 w-[20.004px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container18 />
      <Container19 />
    </div>
  );
}

function ArrowPlaceholder() {
  return (
    <div className="absolute aspect-[31/31] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
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

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-start justify-center relative shrink-0 w-[131px]" data-name="Container">
      <LinkBlue />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Container">
      <Profile />
      <Container16 />
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start justify-center pb-[22px] pt-[40px] px-[22px] relative w-full">
          <FromStrugglingToScalingHowBusinessConsultingTransformsOperationsClarifiesVisionAndDrivesMeasurableSuccessAcrossIndustries />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function BlogCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Blog card">
      <ImageContainer />
      <Content1 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Section - Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start justify-center max-w-[inherit] pb-[60px] pt-[160px] px-[20px] relative w-full">
          <Header />
          <BlogCard />
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

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d1ee3] text-[13.6px] w-full">
        <p className="leading-[21px]">[Blogs]</p>
      </div>
    </div>
  );
}

function Blog1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="[Blog]">
      <Container21 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="font-medium h-[42.8px] leading-[0] relative shrink-0 text-[#03030f] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[41px] justify-center left-0 not-italic text-[33.3px] top-[21.5px] w-[121.84px]">
        <p className="leading-[40.8px]">{`Popular `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[41px] italic justify-center left-[121.64px] text-[34px] top-[20px] w-[78.05px]">
        <p className="leading-[40.8px]">Blogs</p>
      </div>
    </div>
  );
}

function StrategicInsightsThatDriveBusinessSuccess() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end max-w-[400px] relative shrink-0 w-full" data-name="Strategic Insights That Drive Business Success">
      <Heading1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Header">
      <Blog1 />
      <StrategicInsightsThatDriveBusinessSuccess />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute aspect-[395/417.3800048828125] left-[-27px] right-[-28px] top-[-29px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.9%] max-w-none top-0 w-[139.8%]" src={imgImage} />
      </div>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.7px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Growth Blueprint — Strategies and `}</p>
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

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.7px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[19.5px]">Focused on turning ambition into measurable outcomes.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container23 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] w-full">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container24 />
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

function Svg3() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.009px] items-start justify-center right-[26px] top-1/2 w-[16.002px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Group3() {
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

function Svg4() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container25 />
      <Container26 />
    </div>
  );
}

function ArrowPlaceholder1() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.19px] pr-[5.183px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function Variant1() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails2 />
      <ArrowPlaceholder1 />
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
    <div className="content-stretch flex flex-col gap-[16px] h-[459px] items-start relative shrink-0 w-full" data-name="Link - V1">
      <ImageContainer1 />
      <Content2 />
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute aspect-[395/417.3800048828125] left-[-27px] right-[-28px] top-[-29px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.72%] max-w-none top-0 w-[139.44%]" src={imgImage1} />
      </div>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[16.3px] w-full">
        <p className="leading-[25.2px]">Your Hub for Forward-Thinking Strategies</p>
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

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.5px] not-italic relative shrink-0 text-[11.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`A guide to navigating disruption and sparking creativity, `}</p>
        <p>offering leaders evidence.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container27 />
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.26px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture1 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] w-full">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container28 />
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

function Container29() {
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
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5036 10.5044">
          <path d={svgPaths.p2b915500} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container29 />
      <Container30 />
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

function Variant2() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails3 />
      <ArrowPlaceholder2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16.01px] items-start relative shrink-0 w-full" data-name="Content">
      <Header3 />
      <Variant2 />
    </div>
  );
}

function LinkV1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.99px] h-[459px] items-start relative shrink-0 w-full" data-name="Link - V1">
      <ImageContainer2 />
      <Content3 />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute aspect-[395/417.3800048828125] left-[-27px] right-[-28px] top-[-29px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.9%] max-w-none top-0 w-[139.8%]" src={imgImage2} />
      </div>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.7px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Leadership Forum — Insights and `}</p>
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.5px] not-italic relative shrink-0 text-[11.8px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`A resource for executives and decision-makers, highlighting `}</p>
        <p>leadership principles</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container31 />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[7.25px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture2 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] w-full">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container32 />
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

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.009px] items-start justify-center right-[26px] top-1/2 w-[16.002px]" data-name="Container">
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

function Container34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container33 />
      <Container34 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.19px] pr-[5.183px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow3 />
        </div>
      </div>
    </div>
  );
}

function Variant3() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails4 />
      <ArrowPlaceholder3 />
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
    <div className="content-stretch flex flex-col gap-[16px] h-[459px] items-start relative shrink-0 w-full" data-name="Link - V1">
      <ImageContainer3 />
      <Content4 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute aspect-[395/417.3800048828125] left-[-27px] right-[-28px] top-[-29px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.9%] max-w-none top-0 w-[139.8%]" src={imgImage3} />
      </div>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.7px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Strategy Hub — Guidance and `}</p>
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

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.5px] not-italic relative shrink-0 text-[11.8px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Built to accelerate progress, this blog breaks down market `}</p>
        <p>dynamics.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container35 />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col gap-[7.25px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture3 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] w-full">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container36 />
    </div>
  );
}

function Group8() {
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

function Svg9() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group8 />
    </div>
  );
}

function Container37() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.009px] items-start justify-center right-[26px] top-1/2 w-[16.002px]" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Group9() {
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

function Svg10() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group9 />
    </div>
  );
}

function Container38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container37 />
      <Container38 />
    </div>
  );
}

function ArrowPlaceholder4() {
  return (
    <div className="absolute aspect-[33/33] bg-[#1d1ee3] bottom-0 content-stretch flex items-center justify-center overflow-clip pl-[5.19px] pr-[5.183px] py-[8px] right-0 rounded-[35px] top-0" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[22.627px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow4 />
        </div>
      </div>
    </div>
  );
}

function Variant4() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails5 />
      <ArrowPlaceholder4 />
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
    <div className="content-stretch flex flex-col gap-[16px] h-[459px] items-start relative shrink-0 w-full" data-name="Link - V1">
      <ImageContainer4 />
      <Content5 />
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute aspect-[395/417.3800048828125] left-[-27px] right-[-28px] top-[-29px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.72%] max-w-none top-0 w-[139.44%]" src={imgImage4} />
      </div>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[25.2px] not-italic relative shrink-0 text-[#03030f] text-[16.7px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`The Transformation Guide — Insights and `}</p>
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

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[19.5px] not-italic relative shrink-0 text-[11.8px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Dedicated to guiding organizations through change, it `}</p>
        <p>provides insights.</p>
      </div>
    </div>
  );
}

function TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="The Growth Plan is your strategic toolkit designed to help future-proof your...">
      <Container39 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col gap-[7.25px] items-start relative shrink-0 w-full" data-name="Header">
      <TheGrowthPlanAPlaybookToolkitForFuture4 />
      <TheGrowthPlanIsYourStrategicToolkitDesignedToHelpFutureProofYour4 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] w-full">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="View Details">
      <Container40 />
    </div>
  );
}

function Group10() {
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

function Svg11() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group10 />
    </div>
  );
}

function Container41() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[16.009px] items-start justify-center right-[26px] top-1/2 w-[16.002px]" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Group11() {
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

function Svg12() {
  return (
    <div className="h-[16.002px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group11 />
    </div>
  );
}

function Container42() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[15.995px] items-start justify-center right-0 top-1/2 w-[16.002px]" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Arrow5() {
  return (
    <div className="overflow-clip relative size-[16px]" data-name="Arrow">
      <Container41 />
      <Container42 />
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

function Variant5() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-center overflow-clip pr-[38px] relative shrink-0 w-[121px]" data-name="Variant 3">
      <ViewDetails6 />
      <ArrowPlaceholder5 />
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
    <div className="content-stretch flex flex-col gap-[16px] h-[459px] items-start relative shrink-0 w-full" data-name="Link - V1">
      <ImageContainer5 />
      <Content6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <LinkV />
      <LinkV1 />
      <LinkV2 />
      <LinkV3 />
      <LinkV4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[30px] items-start max-w-[inherit] pt-[60px] px-[20px] relative w-full">
        <Header1 />
        <Container22 />
      </div>
    </div>
  );
}

function SectionBlog() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 overflow-clip right-0 top-[1290px]" data-name="Section - Blog">
      <Container20 />
    </div>
  );
}

function Container44() {
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
      <Container44 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="font-medium h-[124.39px] relative shrink-0 text-[#eaeaff] w-full" data-name="Heading 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[82px] justify-center leading-[40.8px] left-0 not-italic text-[32.1px] top-[39.89px] w-[280.39px] whitespace-pre-wrap">
        <p className="mb-0">{`Work with Experts `}</p>
        <p>{`to Grow Faster & `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] h-[41px] justify-center leading-[0] left-0 not-italic text-[34px] top-[103.09px] w-[66px]">
        <p className="leading-[40.8px]">{`Run `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Playfair_Display:Medium_Italic',sans-serif] h-[41px] italic justify-center leading-[0] left-[65.8px] text-[34px] top-[101.59px] w-[122.479px]">
        <p className="leading-[40.8px]">Smarter</p>
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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
      <Cta />
      <WorkWithExpertsToGrowFasterRunSmarter />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.7px] whitespace-nowrap">
        <p className="leading-[21px]">Get Started</p>
      </div>
    </div>
  );
}

function ViewDetails7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.92px)] top-0 w-[77px]" data-name="View Details">
      <Container46 />
    </div>
  );
}

function ViewDetails8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+2.49px)] top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <ViewDetails7 />
      <ViewDetails8 />
    </div>
  );
}

function Group12() {
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

function Svg13() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group12 />
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[30px] top-1/2 w-[19.997px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Group13() {
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

function Svg14() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group13 />
    </div>
  );
}

function Container48() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Arrow6() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container47 />
      <Container48 />
    </div>
  );
}

function ArrowPlaceholder6() {
  return (
    <div className="absolute aspect-[48/48] bg-[#1d1ee3] bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[8.44px] pr-[8.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow6 />
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
          <Text1 />
          <ArrowPlaceholder6 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center relative shrink-0 w-[167px]" data-name="Container">
      <LinkWhite />
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header & button">
      <Header7 />
      <Container45 />
    </div>
  );
}

function Container49() {
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
      <Container49 />
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

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Small() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
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
      <Container51 />
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

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Small1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies1 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
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
      <Container53 />
    </div>
  );
}

function Group16() {
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

function Svg17() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group16 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 size-[17px] top-[3px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Small2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Small">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[24px] relative w-full">
          <FutureReadyStrategies2 />
          <Container54 />
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

function Left() {
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

function Image8() {
  return (
    <div className="absolute h-[501.98px] left-0 top-0 w-[544px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="h-[473px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Right">
      <Image8 />
    </div>
  );
}

function BlueContainer() {
  return (
    <div className="bg-[#1d1ee3] relative rounded-[16px] shrink-0 w-full" data-name="Blue container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[12px] relative w-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[1200px] overflow-clip px-[20px] py-[60px] relative shrink-0 w-[380px]" data-name="Container">
      <BlueContainer />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip top-[3918.8px]" data-name="Section - CTA">
      <Container43 />
    </div>
  );
}

function Heading9() {
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
      <Heading9 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[16px] w-full">
        <p className="leading-[normal]">Enter your email …</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[10px] relative size-full">
          <Container56 />
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

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Subscribe</p>
      </div>
    </div>
  );
}

function ViewDetails9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[66px]" data-name="View Details">
      <Container58 />
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[23px] min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[5px] relative size-full">
          <ViewDetails9 />
        </div>
      </div>
    </div>
  );
}

function Group17() {
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

function Svg18() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group17 />
    </div>
  );
}

function Container59() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[20.004px] items-start justify-center right-[30px] top-1/2 w-[19.997px]" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Group18() {
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

function Svg19() {
  return (
    <div className="h-[20.004px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group18 />
    </div>
  );
}

function Container60() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center right-[-0.01px] size-[20.004px] top-1/2" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Arrow7() {
  return (
    <div className="overflow-clip relative size-[22px]" data-name="Arrow">
      <Container59 />
      <Container60 />
    </div>
  );
}

function ArrowPlaceholder7() {
  return (
    <div className="absolute aspect-[32/32] bg-white bottom-[4px] content-stretch flex items-center justify-center overflow-clip pl-[0.44px] pr-[0.447px] py-[8px] right-[4px] rounded-[35px] top-[4px]" data-name="Arrow Placeholder">
      <div className="flex items-center justify-center relative shrink-0 size-[31.113px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Arrow7 />
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
          <Text2 />
          <ArrowPlaceholder7 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
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
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[473px] relative shrink-0 w-full" data-name="Form & Header">
      <Newsletter />
      <Form />
    </div>
  );
}

function Container61() {
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
      <Container61 />
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

function Heading10() {
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
      <Heading10 />
    </div>
  );
}

function Container62() {
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
      <Container62 />
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

function Container63() {
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
      <Container63 />
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

function Container64() {
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
      <Container64 />
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

function Container65() {
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
      <Container65 />
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

function Heading11() {
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
      <Heading11 />
    </div>
  );
}

function Container66() {
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
      <Container66 />
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

function Container67() {
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
      <Container67 />
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

function Container68() {
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
      <Container68 />
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

function Container69() {
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
      <Container69 />
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

function Heading12() {
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
      <Heading12 />
    </div>
  );
}

function Container70() {
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
      <Container70 />
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

function Container71() {
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
      <Container71 />
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

function Container72() {
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
      <Container72 />
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

function Container73() {
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
      <Container73 />
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

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.8px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[19.5px]">Email</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[30px]" data-name="Email">
      <Container74 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">contactinfo@gmail.com</p>
      </div>
    </div>
  );
}

function ContactinfoGmailCom() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[188px]" data-name="contactinfo@gmail.com">
      <Heading13 />
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Email">
      <Email1 />
      <ContactinfoGmailCom />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11.6px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[19.5px]">Visit Us</p>
      </div>
    </div>
  );
}

function VisitUs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[42px]" data-name="Visit Us">
      <Container75 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.3px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[25.2px]">Los Angeles, CA 90017 United States</p>
      </div>
    </div>
  );
}

function LosAngelesCa90017UnitedStates() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[291px]" data-name="Los Angeles, CA 90017 United States">
      <Heading14 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Address">
      <VisitUs />
      <LosAngelesCa90017UnitedStates />
    </div>
  );
}

function Container76() {
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
      <Container76 />
    </div>
  );
}

function Heading15() {
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
      <Heading15 />
    </div>
  );
}

function Call() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Call">
      <CallUsNow />
      <Component />
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full" data-name="Contact">
      <Email />
      <Address />
      <Call />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full" data-name="Top">
      <Frame />
      <Contact />
    </div>
  );
}

function Container77() {
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
      <Container77 />
    </div>
  );
}

function Container79() {
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
      <Container79 />
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

function Container78() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0" data-name="Container">
      <Link12 />
    </div>
  );
}

function Container81() {
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
      <Container81 />
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

function Container80() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[46px]" data-name="Container">
      <Link13 />
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Privacy policy">
      <Container78 />
      <Container80 />
    </div>
  );
}

function LogoPrivacy() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Logo & privacy">
      <Optimo1 />
      <PrivacyPolicy />
    </div>
  );
}

function Container83() {
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
      <Container83 />
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

function Container82() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[50px]" data-name="Container">
      <Link14 />
    </div>
  );
}

function Container85() {
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
      <Container85 />
    </div>
  );
}

function Home31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0" data-name="Home">
      <div className="h-[24px] shrink-0 w-[53.56px]" data-name="Rectangle" />
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

function Container84() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[57px]" data-name="Container">
      <Link15 />
    </div>
  );
}

function Container87() {
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
      <Container87 />
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

function Container86() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container89() {
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
      <Container89 />
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

function Container88() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center relative shrink-0 w-[69px]" data-name="Container">
      <Link17 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Socials">
      <Container82 />
      <Container84 />
      <Container86 />
      <Container88 />
    </div>
  );
}

function Component2025AllRightsReserved() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="© 2025 .All rights reserved.">
      <div className="h-[19.5px] shrink-0 w-[152.06px]" data-name="Rectangle" />
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
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[24px] pt-[23px] px-[20px] relative w-full">
        <LogoPrivacy />
        <SocialsCopyright />
      </div>
    </div>
  );
}

function Container55() {
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
    <div className="absolute bg-[#f7f7f4] content-stretch flex flex-col items-center justify-center left-0 overflow-clip right-0 top-[4963.19px]" data-name="Footer - Phone">
      <Container55 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-white h-[6526.89px] min-h-[760px] relative shrink-0 w-full" data-name="End of bodyStart">
      <Container2 />
      <Container5 />
      <Container9 />
      <SectionHero />
      <SectionBlog />
      <SectionCta />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[4963.19px]" data-name="Rectangle" />
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