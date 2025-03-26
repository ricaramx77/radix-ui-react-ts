import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useNavigate } from 'react-router-dom';

const MyDropdownMenu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="dropdown-trigger">Open Menu</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="dropdown-content">
        <DropdownMenu.Item onSelect={() => handleNavigation('/home')}>
          Home
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => handleNavigation('/about')}>
          About
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => handleNavigation('/contact')}>
          Contact
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MyDropdownMenu;
