import SocialCard from "../SocialCard";

const hero_socials: Social[] = [
  {
    type: "facebook",
    handle: "@nathanf",
    followers: 1987,
    change: { value: 12, type: "up" },
  },
  {
    type: "twitter",
    handle: "@nathanf",
    followers: 1044,
    change: { type: "up", value: 99 },
  },
  {
    type: "instagram",
    handle: "@realnathanf",
    followers: 1987,
    change: { type: "up", value: 1099 },
  },
  {
    type: "youtube",
    handle: "Nathan F.",
    followers: 1987,
    change: { type: "down", value: 144 },
  },
];

const Hero: React.FC = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 grid-rows-4  md:grid-flow-col md:grid-cols-4 md:grid-rows-1 gap-10">
      {hero_socials.map((social, index) => {
        return <SocialCard social={social} key={`social-${index}`} />;
      })}
    </section>
  );
};

export default Hero;
