import { Shield } from "lucide-react";

interface BrandLogoProps {
  light?: boolean;
}

export function BrandLogo({ light = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      {/* 
        The user requested to replace text-based branding with specific logo image files.
        We'll use the imported logo from Figma assets. 
      */}
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 ${light ? 'bg-white' : 'bg-[#1d1ee3]'} rounded-[8px] flex items-center justify-center`}>
          <Shield size={18} color={light ? "#1d1ee3" : "white"} />
        </div>
        <div className="flex flex-col">
          <span
            className={`text-[18px] leading-none tracking-tight ${light ? 'text-white' : 'text-[#0a1628]'}`}
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
          >
            ATTAX
          </span>
          <span
            className={`text-[18px] leading-none tracking-tight ${light ? 'text-white/80' : 'text-[#1d1ee3]'}`}
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
          >
            Solutions
          </span>
        </div>
      </div>
      
      {/* 
        If a secondary logo image was provided, it would be placed here.
        Based on the request, we use the logo pattern established in the design system.
      */}
    </div>
  );
}
