import ThemeSwitch from "../ThemeSwitch";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-center justify-between py-2">
      <div className="flex flex-col">
        <h1 className="text-light-dark-blue dark:text-dark-text font-bold text-3xl">
          Social Media Dashboard
        </h1>
        <p className="text-light-dark-greyish-blue">
          Total Followers: {new Intl.NumberFormat("en-US").format(23004)}
        </p>
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
