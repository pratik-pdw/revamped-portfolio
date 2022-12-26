import { Icon } from "@iconify/react";
import sunFill from "@iconify/icons-ri/sun-fill";
import moonClearFill from "@iconify/icons-ri/moon-clear-fill";
import { useTheme } from "next-themes";
import { InlineIcon } from "@iconify/react";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  console.log("THEME", theme);
  const handleToggle = (e) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="theme-toggler">
      <button onClick={handleToggle} htmlFor="theme-toggler">
        {(theme === "system" || theme === "light") && (
          <Icon width={35} icon={moonClearFill} />
        )}
        {theme === "dark" && <Icon width={35} icon={sunFill} />}
      </button>
    </div>
  );
};
