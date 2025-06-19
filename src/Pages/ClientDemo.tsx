import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
   
    img: "https://www.jagodana.com/icon/flutter.svg",
  },
  {
    
    img: "https://www.jagodana.com/icon/aws.svg",
  },
  {
    
    img:" https://www.jagodana.com/icon/monday-com-logo.svg",
  },
  {
    
    img: "https://www.jagodana.com/icon/mongodb.svg",
  },
   {
   
    img: "https://www.jagodana.com/icon/nextjs-icon.svg",
  },
  {
    
    img: "https://www.jagodana.com/icon/nodejs.png",
  },
  {
    
    img: "https://www.jagodana.com/icon/make-logo.svg",
  },
  {
    
    img: "https://www.jagodana.com/icon/framer.png",
  },
   {
    
    img: "https://www.jagodana.com/icon/files.png",
  },
   {
    
    img: "https://www.jagodana.com/icon/zapier-logo.svg",
  },
  

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
 
}: {
  img: string;
 
}) => {
  return (
    <figure
      className={cn(
        " h-full w-32 cursor-pointer ",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row  ">
        <img className="" width="62 " height="62" alt="" src={img} />
        
      </div>
      
    </figure>
  );
};

export function ClientDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
