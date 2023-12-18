import classNames from "classnames";
import SocialIcon from "../SocialIcon";
import SocialNuberChange from "../SocialNumberChange";

interface Props {
  social: Social;
}
const SocialCard: React.FC<Props> = ({ social }) => {
  return (
    <div
      className={classNames(
        "hover:bg-light-toggle/50 hover:dark:bg-dark-desaturated-blue/25 transition-colors hover:cursor-pointer flex flex-col relative gap-5 bg-light-card-bg dark:bg-dark-card-bg rounded-md items-center py-10",
        "before:absolute before:-top-[2px] before:left-0 before:w-full before:h-[5px] before:rounded-t-full",
        {
          "before:bg-facebook": social.type == "facebook",
          "before:bg-youtube": social.type == "youtube",
          "before:bg-twitter": social.type == "twitter",
          "before:bg-gradient-to-r from-instagram-from to-instagram-to":
            social.type == "instagram",
        }
      )}
    >
      <p className="flex flex-row gap-3">
        <SocialIcon type={social.type} />
        <span className="text-light-dark-greyish-blue dark:text-dark-desaturated-blue font-bold">
          {social.handle}
        </span>
      </p>
      <p className="flex flex-col gap-5 items-center">
        <span className="text-5xl text-light-dark-blue dark:text-dark-text font-bold">
          {social.followers}
        </span>
        <span className="dark:text-dark-desaturated-blue tracking-[0.5em] text-sm font-light">
          FOLLOWERS
        </span>
      </p>
      <SocialNuberChange change={social.change} text="Today" />
    </div>
  );
};

export default SocialCard;
