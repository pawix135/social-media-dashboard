import ThemeSwitch from "../ThemeSwitch";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between py-2 gap-5">
      <div className="flex flex-col">
        <h1 className="text-light-dark-blue dark:text-dark-text font-bold md:text-3xl text-2xl">
          Social Media Dashboard
        </h1>
        <p className="text-light-dark-greyish-blue dark:text-dark-desaturated-blue text-lg font-semibold">
          Total Followers: {new Intl.NumberFormat("en-US").format(23004)}
        </p>
      </div>
      <hr className="dark:border-dark-desaturated-blue border-light-dark-greyish-blue" />
      <div className="flex flex-row justify-between items-center md:justify-normal gap-5">
        <span className="font-bold text-light-dark-greyish-blue dark:text-dark-desaturated-blue">
          Dark Mode
        </span>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
