import { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { BsMoonStarsFill } from 'react-icons/bs';
import { Button } from '@/components/ui/button';

export function ModeToggle({className}) {
  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    const localTheme = localStorage.getItem('localTheme');
    const initialTheme = localTheme || 'light';
    setCurrentTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.documentElement.classList.replace(currentTheme, newTheme);
    localStorage.setItem('localTheme', newTheme);
  };

  return (
    <Button
      variant="outline"
      size="outline"
      className={className}
      onClick={handleToggleTheme}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] text-primary rotate-0 scale-100 transition-all ${currentTheme === 'dark' ? 'dark:-rotate-90 dark:scale-0' : ''}`} />
      <BsMoonStarsFill className={`absolute text-primary h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${currentTheme === 'dark' ? 'dark:rotate-0 dark:scale-100' : ''}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
