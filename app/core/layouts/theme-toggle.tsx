import React from "react";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = (props: any) => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <IconButton
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      colorScheme="brand"
      onClick={toggleMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
export default ThemeToggle