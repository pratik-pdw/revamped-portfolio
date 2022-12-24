import { Icon } from "@iconify/react";
import sunFill from "@iconify/icons-ri/sun-fill";
import moonClearFill from "@iconify/icons-ri/moon-clear-fill";
import { useTheme } from "next-themes";
import { InlineIcon } from "@iconify/react";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  console.log("THEME", theme);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="theme-toggler">
      <input onChange={handleToggle} type="checkbox" id="theme-toggler" />
      <label htmlFor="theme-toggler">
        {theme === "light" && <Icon width={35} icon={moonClearFill} />}
        {theme === "dark" && <Icon width={35} icon={sunFill} />}
      </label>
    </div>
  );
};
