import { Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface AttaxTestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  photo: string;
  stars?: number;
  result?: string;
  index?: number;
}

export function AttaxTestimonialCard({
  quote,
  name,
  title,
  photo,
  stars = 5,
  result,
  index = 0,
}: AttaxTestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="bg-[#eaeaff] rounded-[12px] px-5 py-6 flex flex-col gap-6 relative flex-1">
        {/* Quote Icon */}
        <div className="w-[34px] h-[26px]">
          <svg viewBox="0 0 34 26" fill="none">
            <path
              d="M3.05598 23.7591C1.14574 21.683 1.79052e-07 19.4179 1.79052e-07 15.6429C1.79052e-07 9.03542 4.77509 3.18437 11.4604 0.163792L13.1795 2.61808C6.87645 6.01585 5.53959 10.3571 5.15734 13.1886C6.11195 12.6223 7.44982 12.4332 8.78669 12.6223C12.2249 12.9995 14.8986 15.6429 14.8986 19.2287C14.8986 20.9276 14.1351 22.6265 12.9884 23.9482C11.6515 25.2699 10.1235 25.8362 8.21331 25.8362C6.11195 25.8362 4.20272 24.8917 3.05598 23.7591ZM22.1573 23.7591C20.2471 21.683 19.1014 19.4179 19.1014 15.6429C19.1014 9.03542 23.8764 3.18437 30.5618 0.163792L32.2809 2.61808C25.9778 6.01585 24.6409 10.3571 24.2587 13.1886C25.2133 12.6223 26.5512 12.4332 27.888 12.6223C31.3263 12.9995 34 15.6429 34 19.2287C34 20.9276 33.2365 22.6265 32.0898 23.9482C30.944 25.2699 29.2249 25.8362 27.3147 25.8362C25.2133 25.8362 23.3031 24.8917 22.1573 23.7591Z"
              fill="#03030F"
              fillOpacity="0.7"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <p
            className="leading-[1.4] text-[16px] text-[#03030fb8] flex-1"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            “{quote}”
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>

            {/* Result badge */}
            {result && (
              null
            )}
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="flex gap-3 items-center px-2">
        <div className="relative size-12 rounded-full overflow-hidden">
          <ImageWithFallback
            src={photo}
            alt={name}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p
            className="text-[18px] text-[#03030f] leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            {name}
          </p>
          <p
            className="text-[14px] text-[rgba(3,3,15,0.7)]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
