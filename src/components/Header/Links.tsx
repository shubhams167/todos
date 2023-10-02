import NextLink from "next/link";
import { Link, Stack } from "@/components/ChakraWrappers/React";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Analytics",
    href: "/analytics",
  },
];

const Links = () => {
  const pathname = usePathname();

  return (
    <Stack direction="row" alignItems="center" gap={8}>
      {links.map((link) => (
        <Link
          as={NextLink}
          key={link.title}
          href={link.href}
          letterSpacing={1}
          fontSize="lg"
          borderColor={pathname === link.href ? "teal.300" : "transparent"}
          borderBottomWidth={2}
          _hover={{
            textDecoration: "none",
            borderColor: "teal.300",
          }}
        >
          {link.title}
        </Link>
      ))}
    </Stack>
  );
};

export default Links;
