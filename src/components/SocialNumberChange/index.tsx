import upIcon from "../../assets/icon-up.svg";
import downIcon from "../../assets/icon-down.svg";

interface Props {
  change: SocialChange;
  type?: "percentage";
  text?: string;
  shorten?: boolean;
}

const SocialNuberChange: React.FC<Props> = ({
  change,
  type,
  shorten,
  text,
}) => {
  let displayValue = shorten
    ? new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
      }).format(change.value)
    : change.value;

  return (
    <span>
      <img src={change.type == "up" ? upIcon : downIcon} alt="up" />
      <span>
        {displayValue}
        {type && "%"} {text}
      </span>
    </span>
  );
};

export default SocialNuberChange;
