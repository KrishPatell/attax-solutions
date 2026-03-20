import svgPaths from "./svg-obyrdelp8l";
import imgAManWearingGlassesAndABlackShirt from "figma:asset/bc6a7a1306da93ce34aa938d57759426b2b7a26f.png";
import imgManWearingHenleyTopPortrait from "figma:asset/21f9aa116909b08a1de80d5b15bc21a94d62f0af.png";
import imgAYoungManWearingGlassesStandingInFrontOfAMountain from "figma:asset/16120a5996bd31397da968ddad2c4df1e4f7cc78.png";
import imgManInWhiteCrewNeckShirtWearingBlackFramedEyeglasses from "figma:asset/48d2c073953fc45c457688960559029f37c71960.png";
import { imgSection } from "./svg-1elpc";

function Svg() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 26">
        <g clipPath="url(#clip0_41_325)" id="svg1810657075_935">
          <path d={svgPaths.pbf59e00} fill="var(--fill-0, #03030F)" fillOpacity="0.7" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_41_325">
            <rect fill="white" height="26" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Quotes() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center relative shrink-0 w-[34px]" data-name="Quotes">
      <Svg />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[25.2px] relative shrink-0 text-[#03030f] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`“One of the things that `}</p>
        <p className="mb-0">{`impressed us most was their `}</p>
        <p className="mb-0">{`transparency and `}</p>
        <p className="mb-0">{`communication. We were kept in `}</p>
        <p className="mb-0">{`the loop at every stage of the `}</p>
        <p className="mb-0">{`project, with regular updates and `}</p>
        <p>clear reporting.”</p>
      </div>
    </div>
  );
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <Container1 />
    </div>
  );
}

function Comment() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults />
      </div>
    </div>
  );
}

function AManWearingGlassesAndABlackShirt() {
  return (
    <div className="absolute inset-0 rounded-[48px]" data-name="a man wearing glasses and a black shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAManWearingGlassesAndABlackShirt} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[48px] shrink-0 size-[48px]" data-name="Avatar">
      <AManWearingGlassesAndABlackShirt />
      <div className="absolute border border-[#03030f] border-solid inset-0 rounded-[48px]" data-name="Border" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Annette Black</p>
      </div>
    </div>
  );
}

function TheresaWebb() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[111px]" data-name="Theresa Webb">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Construction worker</p>
      </div>
    </div>
  );
}

function MedicalAssistant() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[123px]" data-name="Medical assistant">
      <Container3 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb />
      <MedicalAssistant />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar />
      <Name />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment />
      <Profile />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col h-[346.42px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial />
    </div>
  );
}

function Svg1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 26">
        <g clipPath="url(#clip0_41_325)" id="svg1810657075_935">
          <path d={svgPaths.pbf59e00} fill="var(--fill-0, #03030F)" fillOpacity="0.7" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_41_325">
            <rect fill="white" height="26" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Quotes1() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center relative shrink-0 w-[34px]" data-name="Quotes">
      <Svg1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[25.2px] relative shrink-0 text-[#03030f] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`"They provided clarity where we `}</p>
        <p className="mb-0">{`had confusion, and structure `}</p>
        <p className="mb-0">{`where we had chaos. It’s been `}</p>
        <p className="mb-0">{`one of the best investments `}</p>
        <p>we’ve made as a company.”</p>
      </div>
    </div>
  );
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <Container4 />
    </div>
  );
}

function Comment1() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes1 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults1 />
      </div>
    </div>
  );
}

function ManWearingHenleyTopPortrait() {
  return (
    <div className="absolute inset-0 rounded-[48px]" data-name="man wearing Henley top portrait">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
        <img alt="" className="absolute h-[149.97%] left-0 max-w-none top-[-24.98%] w-full" src={imgManWearingHenleyTopPortrait} />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[48px] shrink-0 size-[48px]" data-name="Avatar">
      <ManWearingHenleyTopPortrait />
      <div className="absolute border border-[#03030f] border-solid inset-0 rounded-[48px]" data-name="Border" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Jane Cooper</p>
      </div>
    </div>
  );
}

function TheresaWebb1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[102px]" data-name="Theresa Webb">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Mechanic</p>
      </div>
    </div>
  );
}

function MedicalAssistant1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[59px]" data-name="Medical assistant">
      <Container6 />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb1 />
      <MedicalAssistant1 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar1 />
      <Name1 />
    </div>
  );
}

function Testimonial1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment1 />
      <Profile1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 26">
        <g clipPath="url(#clip0_41_325)" id="svg1810657075_935">
          <path d={svgPaths.pbf59e00} fill="var(--fill-0, #03030F)" fillOpacity="0.7" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_41_325">
            <rect fill="white" height="26" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Quotes2() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center relative shrink-0 w-[34px]" data-name="Quotes">
      <Svg2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[25.2px] relative shrink-0 text-[#03030f] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`"From the first meeting, they `}</p>
        <p className="mb-0">{`were invested in our success. `}</p>
        <p className="mb-0">{`Their structured process and `}</p>
        <p className="mb-0">{`sharp strategy helped us turn a `}</p>
        <p className="mb-0">{`struggling department into a `}</p>
        <p className="mb-0">{`high-performing unit and boost `}</p>
        <p className="mb-0">{`team productivity, and refocus `}</p>
        <p className="mb-0">{`our entire operation on what `}</p>
        <p>{`truly matters."`}</p>
      </div>
    </div>
  );
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <Container7 />
    </div>
  );
}

function Comment2() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes2 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults2 />
      </div>
    </div>
  );
}

function AYoungManWearingGlassesStandingInFrontOfAMountain() {
  return (
    <div className="absolute inset-0 rounded-[48px]" data-name="a young man wearing glasses standing in front of a mountain">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAYoungManWearingGlassesStandingInFrontOfAMountain} />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[48px] shrink-0 size-[48px]" data-name="Avatar">
      <AYoungManWearingGlassesStandingInFrontOfAMountain />
      <div className="absolute border border-[#03030f] border-solid inset-0 rounded-[48px]" data-name="Border" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Arlene McCoy</p>
      </div>
    </div>
  );
}

function TheresaWebb2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[112px]" data-name="Theresa Webb">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Janitor</p>
      </div>
    </div>
  );
}

function MedicalAssistant2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41px]" data-name="Medical assistant">
      <Container9 />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb2 />
      <MedicalAssistant2 />
    </div>
  );
}

function Profile2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar2 />
      <Name2 />
    </div>
  );
}

function Testimonial2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment2 />
      <Profile2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col h-[396.83px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 26">
        <g clipPath="url(#clip0_41_325)" id="svg1810657075_935">
          <path d={svgPaths.pbf59e00} fill="var(--fill-0, #03030F)" fillOpacity="0.7" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_41_325">
            <rect fill="white" height="26" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Quotes3() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-center relative shrink-0 w-[34px]" data-name="Quotes">
      <Svg3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[25.2px] relative shrink-0 text-[#03030f] text-[18px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`"Their strategic insight and `}</p>
        <p className="mb-0">{`hands-on approach helped us `}</p>
        <p className="mb-0">{`streamline operations and `}</p>
        <p className="mb-0">{`unlock new growth `}</p>
        <p className="mb-0">{`opportunities. We saw `}</p>
        <p className="mb-0">{`measurable results within `}</p>
        <p>{`months."`}</p>
      </div>
    </div>
  );
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <Container10 />
    </div>
  );
}

function Comment3() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes3 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults3 />
      </div>
    </div>
  );
}

function ManInWhiteCrewNeckShirtWearingBlackFramedEyeglasses() {
  return (
    <div className="absolute inset-0 rounded-[48px]" data-name="man in white crew neck shirt wearing black framed eyeglasses">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgManInWhiteCrewNeckShirtWearingBlackFramedEyeglasses} />
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[48px] shrink-0 size-[48px]" data-name="Avatar">
      <ManInWhiteCrewNeckShirtWearingBlackFramedEyeglasses />
      <div className="absolute border border-[#03030f] border-solid inset-0 rounded-[48px]" data-name="Border" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#03030f] text-[18px] whitespace-nowrap">
        <p className="leading-[25.2px]">Cameron Williamson</p>
      </div>
    </div>
  );
}

function TheresaWebb3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[163px]" data-name="Theresa Webb">
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter_Tight:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(3,3,15,0.7)] whitespace-nowrap">
        <p className="leading-[21px]">Stocking associate</p>
      </div>
    </div>
  );
}

function MedicalAssistant3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[114px]" data-name="Medical assistant">
      <Container12 />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb3 />
      <MedicalAssistant3 />
    </div>
  );
}

function Profile3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar3 />
      <Name3 />
    </div>
  );
}

function Testimonial3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment3 />
      <Profile3 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col h-[346.42px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial3 />
    </div>
  );
}

function Quotes4() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[126.01px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment4() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes4 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults4 />
      </div>
    </div>
  );
}

function Avatar4() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[115.27px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[103.78px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb4 />
      <MedicalAssistant4 />
    </div>
  );
}

function Profile4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar4 />
      <Name4 />
    </div>
  );
}

function Testimonial4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment4 />
      <Profile4 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial4 />
    </div>
  );
}

function Quotes5() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[176.42px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment5() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes5 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults5 />
      </div>
    </div>
  );
}

function Avatar5() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[110.2px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[122.1px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb5 />
      <MedicalAssistant5 />
    </div>
  );
}

function Profile5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar5 />
      <Name5 />
    </div>
  );
}

function Testimonial5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment5 />
      <Profile5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col h-[346.42px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial5 />
    </div>
  );
}

function Quotes6() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[126.01px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment6() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes6 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults6 />
      </div>
    </div>
  );
}

function Avatar6() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[101.39px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[58.81px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb6 />
      <MedicalAssistant6 />
    </div>
  );
}

function Profile6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar6 />
      <Name6 />
    </div>
  );
}

function Testimonial6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment6 />
      <Profile6 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial6 />
    </div>
  );
}

function Quotes7() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[226.83px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment7() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes7 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults7 />
      </div>
    </div>
  );
}

function Avatar7() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[111.91px]" data-name="Theresa Webb">
      <div className="h-[25.21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb7 />
      <MedicalAssistant7 />
    </div>
  );
}

function Profile7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar7 />
      <Name7 />
    </div>
  );
}

function Testimonial7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment7 />
      <Profile7 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col h-[396.83px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial7 />
    </div>
  );
}

function Quotes8() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[176.42px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment8() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes8 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults8 />
      </div>
    </div>
  );
}

function Avatar8() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[162.35px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[113.05px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb8 />
      <MedicalAssistant8 />
    </div>
  );
}

function Profile8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar8 />
      <Name8 />
    </div>
  );
}

function Testimonial8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment8 />
      <Profile8 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col h-[346.42px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial8 />
    </div>
  );
}

function Quotes9() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[126.01px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment9() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes9 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults9 />
      </div>
    </div>
  );
}

function Avatar9() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[115.27px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[103.78px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb9 />
      <MedicalAssistant9 />
    </div>
  );
}

function Profile9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar9 />
      <Name9 />
    </div>
  );
}

function Testimonial9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment9 />
      <Profile9 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial9 />
    </div>
  );
}

function Quotes10() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[176.42px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment10() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes10 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults10 />
      </div>
    </div>
  );
}

function Avatar10() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[110.2px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[122.1px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb10 />
      <MedicalAssistant10 />
    </div>
  );
}

function Profile10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar10 />
      <Name10 />
    </div>
  );
}

function Testimonial10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment10 />
      <Profile10 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col h-[346.42px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial10 />
    </div>
  );
}

function Quotes11() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[126.01px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment11() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes11 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults11 />
      </div>
    </div>
  );
}

function Avatar11() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[101.39px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[58.81px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb11 />
      <MedicalAssistant11 />
    </div>
  );
}

function Profile11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar11 />
      <Name11 />
    </div>
  );
}

function Testimonial11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment11 />
      <Profile11 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial11 />
    </div>
  );
}

function Quotes12() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[226.83px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment12() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes12 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults12 />
      </div>
    </div>
  );
}

function Avatar12() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[111.91px]" data-name="Theresa Webb">
      <div className="h-[25.21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[41px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb12 />
      <MedicalAssistant12 />
    </div>
  );
}

function Profile12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar12 />
      <Name12 />
    </div>
  );
}

function Testimonial12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment12 />
      <Profile12 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col h-[396.83px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial12 />
    </div>
  );
}

function Quotes13() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[176.42px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment13() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes13 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults13 />
      </div>
    </div>
  );
}

function Avatar13() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[162.35px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[113.05px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb13 />
      <MedicalAssistant13 />
    </div>
  );
}

function Profile13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar13 />
      <Name13 />
    </div>
  );
}

function Testimonial13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment13 />
      <Profile13 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col h-[346.42px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial13 />
    </div>
  );
}

function Quotes14() {
  return <div className="h-[26px] shrink-0 w-[34px]" data-name="Quotes" />;
}

function TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="'Their consultants didn’t just offer advice they rolled up their sleeves and worked alongside us to solve complex challenges and deliver real results.">
      <div className="h-[126.01px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Comment14() {
  return (
    <div className="bg-[#eaeaff] relative rounded-[12px] shrink-0 w-full" data-name="Comment">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] py-[24px] relative w-full">
        <Quotes14 />
        <TheirConsultantsDidntJustOfferAdviceTheyRolledUpTheirSleevesAndWorkedAlongsideUsToSolveComplexChallengesAndDeliverRealResults14 />
      </div>
    </div>
  );
}

function Avatar14() {
  return <div className="rounded-[48px] shrink-0 size-[48px]" data-name="Avatar" />;
}

function TheresaWebb14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[115.27px]" data-name="Theresa Webb">
      <div className="h-[25.2px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function MedicalAssistant14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[103.78px]" data-name="Medical assistant">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Name14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <TheresaWebb14 />
      <MedicalAssistant14 />
    </div>
  );
}

function Profile14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile">
      <Avatar14 />
      <Name14 />
    </div>
  );
}

function Testimonial14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Testimonial">
      <Comment14 />
      <Profile14 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start relative shrink-0 w-[300px]" data-name="Item">
      <Testimonial14 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-start relative shrink-0 w-[4640px]" data-name="List">
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
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex inset-[0_-3480.51px_0_-19.49px] items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.42%_0%] mask-size-[24.57%_100%] p-[10px]" data-name="Section" style={{ maskImage: `url('${imgSection}')` }}>
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

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Container">
      <SectionMaskGroup />
    </div>
  );
}