interface Social {
  type: SocialType;
  handle: string;
  followers: number;
  change: SocialChange;
}

type SocialChange = {
  type: "up" | "down";
  value: number;
};
interface SocialOverview {
  name: string;
  type: SocialType;
  value: number;
  change: SocialChange;
  shorten?: boolean;
}

type SocialType = "facebook" | "youtube" | "twitter" | "instagram";

type Theme = "light" | "dark";
