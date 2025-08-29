'use client';

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div>
      <Button onClick={handleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
}
