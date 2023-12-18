import { icons } from "../../constants/icons";

interface Props {
  type: SocialType;
}

const SocialIcon: React.FC<Props> = ({ type }) => {
  return <img src={icons[type]} alt={type} />;
};

export default SocialIcon;
