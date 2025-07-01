import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    img: "https://www.jagodana.com/icon/flutter.svg",
    title: "Flutter",
  },
  {
    img: "https://www.jagodana.com/icon/aws.svg",
    title: "AWS",
  },
  {
    img: "https://www.jagodana.com/icon/monday-com-logo.svg",
    title: "Monday.com",
  },
  {
    img: "https://www.jagodana.com/icon/mongodb.svg",
    title: "MongoDB",
  },
  {
    img: "https://www.jagodana.com/icon/nextjs-icon.svg",
    title: "Next.js",
  },
  {
    img: "https://www.jagodana.com/icon/nodejs.png",
    title: "Node.js",
  },
  {
    img: "https://www.jagodana.com/icon/make-logo.svg",
    title: "Make",
  },
  {
    img: "https://www.jagodana.com/icon/framer.png",
    title: "Framer",
  },
  {
    img: "https://www.jagodana.com/icon/files.png",
    title: "Files",
  },
  {
    img: "https://www.jagodana.com/icon/zapier-logo.svg",
    title: "Zapier",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  title,
}: {
  img: string;
  title: string;
}) => {
  return (
    <figure
      className={cn("h-full w-32 cursor-pointer text-center space-y-2")}
    >
      <div className="flex items-center justify-center">
        <img width={62} height={62} alt={title} src={img} title={title}/>
      </div>
      <figcaption className="text-xs text-muted-foreground">{title}</figcaption>
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
