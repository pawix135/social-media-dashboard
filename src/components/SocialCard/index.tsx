import SocialIcon from "../SocialIcon";
import upIcon from "../../assets/icon-up.svg";
import downIcon from "../../assets/icon-down.svg";
import SocialNuberChange from "../SocialNumberChange";

interface Props {
  social: Social;
}
const SocialCard: React.FC<Props> = ({ social }) => {
  return (
    <div>
      <p>
        <SocialIcon type={social.type} />
        <span>{social.handle}</span>
      </p>
      <p>
        <span>{social.followers}</span>
        <span>FOLLOWERS</span>
      </p>
      <SocialNuberChange change={social.change} text="Today" />
    </div>
  );
};

export default SocialCard;
