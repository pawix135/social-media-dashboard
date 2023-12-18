import classNames from "classnames";
import { useDark } from "../../hooks/useDark";

const ThemeSwitch: React.FC = () => {
  const [theme, toggle] = useDark();

  return (
    <div className="flex flex-row gap-5">
      <span className="font-bold text-light-dark-greyish-blue dark:text-dark-text">
        Dark Mode
      </span>
      <label
        htmlFor="switch"
        className={classNames(
          "rounded-full flex items-center relative p-1 w-[50px] h-[25px] transition-colors duration-200",
          {
            "bg-light-toggle": theme === "light",
            "bg-gradient-to-r from-dark-toggle-from to-dark-toggle-to":
              theme === "dark",
          }
        )}
      >
        <button
          tabIndex={0}
          id="switch"
          type="button"
          onClick={toggle}
          className={classNames("w-4 h-4 rounded-full absolute duration-150", {
            "bg-white translate-x-[25px]": theme === "light",
            "bg-dark-bg translate-x-0": theme === "dark",
          })}
        ></button>
      </label>
    </div>
  );
};

export default ThemeSwitch;
