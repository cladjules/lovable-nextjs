"use client";

import NextLink, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const useLocation = () => {
  const pathname = usePathname();

  return {
    pathname,
  };
};

const Link = ({
  to,
  href,
  ...args
}: Omit<LinkProps, "href"> & {
  to?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode | undefined;
}) => {
  return <NextLink href={href || to} {...args} />;
};

export { Link, useLocation };
