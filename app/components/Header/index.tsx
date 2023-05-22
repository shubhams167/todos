"use client";

import {
	Heading,
	IconButton,
	Stack,
	useColorMode,
} from "@/app/components/ChakraWrappers/React";
import { SunIcon, MoonIcon } from "@/app/components/ChakraWrappers/Icons";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Stack direction="row" justifyContent="space-between" p={10}>
			<Heading>Todos for today</Heading>
			<IconButton
				aria-label="Toggle color mode"
				variant="ghost"
				onClick={toggleColorMode}
				icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
			/>
		</Stack>
	);
};

export default Header;
