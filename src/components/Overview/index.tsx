import classNames from "classnames";
import OverviewCard from "../OverviewCard";

const socials_overview: SocialOverview[] = [
  {
    name: "Page Views",
    type: "facebook",
    value: 87,
    shorten: false,
    change: { type: "up", value: 3 },
  },
  {
    name: "Likes",
    type: "facebook",
    value: 52,
    shorten: false,
    change: { type: "down", value: 2 },
  },
  {
    name: "Likes",
    type: "instagram",
    value: 5462,
    shorten: false,
    change: { type: "up", value: 2257 },
  },
  {
    name: "Profile Views",
    type: "instagram",
    value: 52000,
    shorten: true,
    change: { type: "up", value: 1375 },
  },
  {
    name: "Retweets",
    type: "twitter",
    value: 117,
    shorten: false,
    change: { type: "up", value: 303 },
  },
  {
    name: "Likes",
    type: "twitter",
    value: 507,
    shorten: false,
    change: { type: "up", value: 553 },
  },
  {
    name: "Likes",
    type: "youtube",
    value: 107,
    shorten: false,
    change: { type: "down", value: 19 },
  },
  {
    name: "Total Views",
    type: "youtube",
    value: 1407,
    shorten: false,
    change: { type: "down", value: 12 },
  },
];

const Overview = () => {
  return (
    <section className="flex flex-col gap-10 mt-10">
      <h2 className="text-light-dark-greyish-blue dark:text-dark-text font-semibold text-2xl md:text-4xl">
        Overview - Today
      </h2>
      <div
        className={classNames(
          "grid grid-flow-row grid-cols-1 grid-rows-8 md:grid-flow-col md:grid-cols-4 grid-rows-2 gap-5 md:gap-10"
        )}
      >
        {socials_overview.map((overview, index) => {
          return <OverviewCard overview={overview} key={`overview-${index}`} />;
        })}
      </div>
    </section>
  );
};

export default Overview;
