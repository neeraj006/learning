import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

export default function NavBar({
    links,
}: {
    links: { href: string; label: string }[];
}) {
    const location = useLocation();

    return (
        <Flex
            gap={4}
            justifyContent="flex-start"
            alignItems="center"
            height="60px"
            bg="gray.100"
            p={4}
            borderBottom="1px solid"
            borderColor="gray.200"
        >
            {links.map((link) => (
                <NavLink
                    key={link.href}
                    href={link.href}
                    isActive={link.href === location.pathname}
                >
                    {link.label}
                </NavLink>
            ))}
        </Flex>
    );
}
