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
    <div>
      <div>
        <span>{overview.name}</span>
        <SocialIcon type={overview.type} />
      </div>
      <div>
        <span>{displayNumber}</span>
        <SocialNuberChange change={overview.change} type="percentage" />
      </div>
    </div>
  );
};

export default OverviewCard;
