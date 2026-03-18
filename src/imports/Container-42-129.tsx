import svgPaths from "./svg-33pgpvmg4c";
import imgContainer from "figma:asset/6e79a5465bb3925a6bf131575938691b1eec750e.png";
import imgContainer1 from "figma:asset/099c64ae2547a90a6f28c98cd0db08df37bad413.png";
import imgContainer2 from "figma:asset/2187d2d57b943841bd5621c969e45d02b9dad171.png";
import imgContainer3 from "figma:asset/e195beac4f39659f88df73d4b71ab8724c7da54e.png";
import imgContainer4 from "figma:asset/2bc68bd6346ce892fc1a2ccd88b58eaf20042d74.png";

function Container1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[26px] w-full">
        <p className="leading-[33.6px]">{`Wealth & Finance`}</p>
      </div>
    </div>
  );
}

function RiskAssessment() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Strategy Consulting service empowers `}</p>
        <p className="mb-0">{`businesses to define a clear path forward, `}</p>
        <p>refine their focus.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[72px]" data-name="View Details">
      <Container3 />
    </div>
  );
}

function ViewDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[26px] w-[44.03px]" data-name="View Details">
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
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032">
          <path d={svgPaths.p3719d200} fill="var(--fill-0, #03030F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container4 />
    </div>
  );
}

function ArrowPlaceholder() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-px" data-name="Arrow Placeholder">
      <Arrow />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip pr-[38px] pt-px relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text />
      <ArrowPlaceholder />
    </div>
  );
}

function LinkCard() {
  return (
    <div className="bg-[#f7f7f4] relative rounded-[12px] shrink-0 w-full" data-name="Link - Card">
      <div className="content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative w-full">
        <Container1 />
        <Container2 />
        <Button />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer1} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[26.1px] w-full">
        <p className="leading-[33.6px]">Risk Assessment</p>
      </div>
    </div>
  );
}

function RiskAssessment1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading1 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Risk Assessment service empowers `}</p>
        <p className="mb-0">{`organizations to uncover hidden risks, and `}</p>
        <p>strengthen resilience.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment1 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[72px]" data-name="View Details">
      <Container7 />
    </div>
  );
}

function ViewDetails3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
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

function Group1() {
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

function Svg1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container8 />
    </div>
  );
}

function ArrowPlaceholder1() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-px" data-name="Arrow Placeholder">
      <Arrow1 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip pr-[38px] pt-px relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text1 />
      <ArrowPlaceholder1 />
    </div>
  );
}

function LinkCard1() {
  return (
    <div className="bg-[#f7f7f4] relative rounded-[12px] shrink-0 w-full" data-name="Link - Card">
      <div className="content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative w-full">
        <Container5 />
        <Container6 />
        <Button1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer2} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[25.9px] w-full">
        <p className="leading-[33.6px]">Talent Strategy</p>
      </div>
    </div>
  );
}

function RiskAssessment2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading2 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.6px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Talent Strategy service empowers `}</p>
        <p className="mb-0">{`organizations to optimize their people, and `}</p>
        <p>foster engagement.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12.01px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment2 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[72px]" data-name="View Details">
      <Container11 />
    </div>
  );
}

function ViewDetails5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
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

function Group2() {
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

function Svg2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Arrow2() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container12 />
    </div>
  );
}

function ArrowPlaceholder2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-[1.01px]" data-name="Arrow Placeholder">
      <Arrow2 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[40.01px] items-center justify-center overflow-clip pr-[38px] pt-[1.01px] relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text2 />
      <ArrowPlaceholder2 />
    </div>
  );
}

function LinkCard2() {
  return (
    <div className="bg-[#f7f7f4] relative rounded-[12px] shrink-0 w-full" data-name="Link - Card">
      <div className="content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative w-full">
        <Container9 />
        <Container10 />
        <Button2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer3} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[26px] w-full">
        <p className="leading-[33.6px]">Growth Planning</p>
      </div>
    </div>
  );
}

function RiskAssessment3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading3 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.7px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Growth Planning service empowers `}</p>
        <p className="mb-0">{`organizations to unlock new opportunities, and `}</p>
        <p>scale effectively.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment3 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[72px]" data-name="View Details">
      <Container15 />
    </div>
  );
}

function ViewDetails7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
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

function Group3() {
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

function Svg3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Arrow3() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container16 />
    </div>
  );
}

function ArrowPlaceholder3() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-px" data-name="Arrow Placeholder">
      <Arrow3 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center overflow-clip pr-[38px] pt-px relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text3 />
      <ArrowPlaceholder3 />
    </div>
  );
}

function LinkCard3() {
  return (
    <div className="bg-[#f7f7f4] relative rounded-[12px] shrink-0 w-full" data-name="Link - Card">
      <div className="content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative w-full">
        <Container13 />
        <Container14 />
        <Button3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer4} />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[26.1px] w-full">
        <p className="leading-[33.6px]">Performance Optimize</p>
      </div>
    </div>
  );
}

function RiskAssessment4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-full" data-name="Risk Assessment">
      <Heading4 />
    </div>
  );
}

function WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="We help you define clear goals and build winning strategies that drive measurable business growth.">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[13.8px] text-[rgba(3,3,15,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our Performance Optimization service `}</p>
        <p className="mb-0">{`empowers organizations to streamline `}</p>
        <p>processes.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[12.01px] items-start relative shrink-0 w-full" data-name="Container">
      <RiskAssessment4 />
      <WeHelpYouDefineClearGoalsAndBuildWinningStrategiesThatDriveMeasurableBusinessGrowth4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#03030f] text-[13.9px] whitespace-nowrap">
        <p className="leading-[21px]">Read More</p>
      </div>
    </div>
  );
}

function ViewDetails8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[72px]" data-name="View Details">
      <Container19 />
    </div>
  );
}

function ViewDetails9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[26px] w-[44.03px]" data-name="View Details">
      <div className="h-[21px] shrink-0 w-full" data-name="Rectangle" />
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

function Svg4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[16px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Arrow4() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[16px]" data-name="Arrow">
      <Container20 />
    </div>
  );
}

function ArrowPlaceholder4() {
  return (
    <div className="absolute aspect-[39/39] bottom-0 content-stretch flex items-center justify-center overflow-clip px-[11.5px] py-[8px] right-0 rounded-[35px] top-[1.01px]" data-name="Arrow Placeholder">
      <Arrow4 />
      <div className="absolute left-0 rounded-[35px] size-[39px] top-0" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[35px]" />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[40.01px] items-center justify-center overflow-clip pr-[38px] pt-[1.01px] relative rounded-[50px] shrink-0 w-[133px]" data-name="Button">
      <Text4 />
      <ArrowPlaceholder4 />
    </div>
  );
}

function LinkCard4() {
  return (
    <div className="bg-[#f7f7f4] relative rounded-[12px] shrink-0 w-full" data-name="Link - Card">
      <div className="content-stretch flex flex-col gap-[31px] items-start px-[20px] py-[24px] relative w-full">
        <Container17 />
        <Container18 />
        <Button4 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative size-full" data-name="Container">
      <LinkCard />
      <LinkCard1 />
      <LinkCard2 />
      <LinkCard3 />
      <LinkCard4 />
    </div>
  );
}