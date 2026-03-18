import imgImageTCjFGb1MsMdvmvkPyHiMq3U7Yj0Png from "figma:asset/adb14c0ee13b2c301a01861138500063f7004c62.png";
import imgLpzQGqJbzuRorBnRIzfi7HyDuFiPng from "figma:asset/86f98efb7be5f3bbd5bbbabbad193afccd3d2e03.png";

function ImageTCjFGb1MsMdvmvkPyHiMq3U7Yj0Png() {
  return (
    <div className="absolute inset-0 rounded-[16px]" data-name="Image → tCjFGb1msMdvmvkPYHiMq3u7yj0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.01%]" src={imgImageTCjFGb1MsMdvmvkPyHiMq3U7Yj0Png} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[33.6px] relative shrink-0 text-[#03030f] text-[24px] w-full whitespace-pre-wrap">
        <p className="mb-0">“We helped our client future-</p>
        <p className="mb-0">{`proof their business with `}</p>
        <p className="mb-0">{`strategic planning, digital `}</p>
        <p>transformation”</p>
      </div>
    </div>
  );
}

function WeHelpedOurClientFutureProofTheirBusinessWithStrategicPlanningDigitalTransformation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="“We helped our client future-proof their business with strategic planning, digital transformation”">
      <Heading />
    </div>
  );
}

function LpzQGqJbzuRorBnRIzfi7HyDuFiPng() {
  return (
    <div className="absolute inset-0 rounded-[40px]" data-name="LpzQGqJBZURorBnRIzfi7hyDuFI.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLpzQGqJbzuRorBnRIzfi7HyDuFiPng} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[40px] shrink-0 size-[40px]" data-name="Image">
      <LpzQGqJbzuRorBnRIzfi7HyDuFiPng />
      <div className="absolute border border-[#1d1ee3] border-solid inset-0 rounded-[40px]" data-name="Border" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[16px] whitespace-nowrap">
        <p className="leading-[22.4px]">Zayan Daniel</p>
      </div>
    </div>
  );
}

function ZayanDaniel() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[91px]" data-name="Zayan Daniel">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] w-full">
        <p className="leading-[21px]">Head of Business Consultancy</p>
      </div>
    </div>
  );
}

function HeadOfBusinessConsultancy() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Head of Business Consultancy">
      <Container1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[198px]" data-name="Name">
      <ZayanDaniel />
      <HeadOfBusinessConsultancy />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Image />
      <Name />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[23.25px] items-start max-w-[361px] px-[20px] py-[24px] relative rounded-[12px] shrink-0 w-[361px]" data-name="Card">
      <WeHelpedOurClientFutureProofTheirBusinessWithStrategicPlanningDigitalTransformation />
      <Profile />
    </div>
  );
}

export default function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end overflow-clip p-[30px] relative rounded-[12px] size-full" data-name="Image container">
      <ImageTCjFGb1MsMdvmvkPyHiMq3U7Yj0Png />
      <Card />
    </div>
  );
}