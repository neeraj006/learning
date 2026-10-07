import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function NavLink({
    children,
    href,
    isActive = false,
}: {
    children: React.ReactNode;
    href: string;
    isActive: boolean;
}) {
    return (
        <ChakraLink
            as={Link}
            to={href}
            variant={isActive ? "underline" : "plain"}
            colorPalette="teal"
        >
            {children}
        </ChakraLink>
    );
}
