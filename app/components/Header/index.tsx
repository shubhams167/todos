"use client";

import { Heading, IconButton, Stack, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

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
