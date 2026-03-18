function MaskGroup() {
  return <div className="shrink-0 size-[20px]" data-name="Mask Group" />;
}

function Message() {
  return (
    <div className="aspect-[48/48] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[100px] shrink-0" data-name="Message">
      <MaskGroup />
    </div>
  );
}

function Container() {
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
      <Container />
    </div>
  );
}

function Heading() {
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
      <Heading />
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

function MaskGroup1() {
  return <div className="shrink-0 size-[18px]" data-name="Mask Group" />;
}

function Phone() {
  return (
    <div className="aspect-[48/48] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[15px] relative rounded-[100px] shrink-0" data-name="Phone">
      <MaskGroup1 />
    </div>
  );
}

function Container1() {
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
      <Container1 />
    </div>
  );
}

function Heading1() {
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
      <Heading1 />
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

function IconMaskGroup() {
  return <div className="shrink-0 size-[20px]" data-name="Icon:mask-group" />;
}

function Map() {
  return (
    <div className="aspect-[48/48] bg-[#eaeaff] content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[100px] shrink-0" data-name="Map">
      <IconMaskGroup />
    </div>
  );
}

function Container2() {
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
      <Container2 />
    </div>
  );
}

function Heading2() {
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
      <Heading2 />
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

function VisitUs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Visit Us">
      <Map />
      <Details2 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative size-full" data-name="Contact">
      <Email />
      <Call />
      <VisitUs />
    </div>
  );
}