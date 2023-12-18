import SocialIcon from "../SocialIcon";
import SocialNuberChange from "../SocialNumberChange";

interface Props {
  overview: SocialOverview;
}

const OverviewCard: React.FC<Props> = ({ overview }) => {
  let displayNumber = overview.shorten
    ? new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
      }).format(overview.value)
    : overview.value;

  return (
    <div className="bg-light-card-bg dark:bg-dark-card-bg rounded-md p-10 flex flex-col gap-10 hover:bg-light-toggle/50 hover:dark:bg-dark-desaturated-blue/25 hover:cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <span className="dark:text-dark-desaturated-blue font-semibold text-lg">
          {overview.name}
        </span>
        <SocialIcon type={overview.type} />
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-3xl font-bold text-light-dark-blue dark:text-dark-text">
          {displayNumber}
        </span>
        <SocialNuberChange change={overview.change} type="percentage" />
      </div>
    </div>
  );
};

export default OverviewCard;
