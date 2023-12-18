import upIcon from "../../assets/icon-up.svg";
import downIcon from "../../assets/icon-down.svg";
import classNames from "classnames";

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
    <span className="flex flex-row gap-2 items-center">
      <img src={change.type == "up" ? upIcon : downIcon} alt="up" />
      <span
        className={classNames("font-semibold", {
          "text-primary-lime": change.type == "up",
          "text-primary-red": change.type == "down",
        })}
      >
        {displayValue}
        {type && "%"} {text}
      </span>
    </span>
  );
};

export default SocialNuberChange;
