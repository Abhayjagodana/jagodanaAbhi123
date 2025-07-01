import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "PrimeTech Incverification icon for PrimeTech Inc.primetech",
    username: "@jill",
    body: "Jagodana LLC implemented advanced automation for our marketing and CRM systems, cutting down our workload dramatically. Their technical acumen and dedication were impressive throughout the process..",
    img: "https://www.jagodana.com/testimonials/innovatex.jpeg",
     imgTitle: "PrimeTech"
  },
  {
    name: "TechFlow Solutionsverification icon for TechFlow Solutions techflow",
    username: "@jill",
    body: "The team at Jagodana LLC automated several critical business processes for us using custom scripts and Zapier integrations.",
    img: "https://www.jagodana.com/testimonials/vanguard.jpeg",
    imgTitle: "TechFlow"
  },
  {
    name: "InnovateXverification icon for InnovateX innovatex",
    username: "@john",
    body: "We collaborated with Jagodana LLC for both automation and software development. Their ability to streamline our operations through tailored automation solutions has significantly increased our productivity.",
    img: "https://www.jagodana.com/testimonials/growthedge.jpeg",
    imgTitle: "InnovateXverification"
  },
  {
    name: "PrimeTech Inc.verification icon for PrimeTech Inc. primetech",
    username: "@jane",
    body: "Jagodana LLC implemented advanced automation for our marketing and CRM systems, cutting down our workload dramatically. .",
    img: "https://www.jagodana.com/testimonials/primetech.jpeg",
    imgTitle: "PrimeTech Inc."
  },
  
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  imgTitle,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  imgTitle: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width={48}
          height={32}
          alt={imgTitle}
          title={imgTitle}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
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
