"use client";

import NextLink, { LinkProps } from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";

const useLocation = () => {
  const pathname = usePathname();

  return {
    pathname,
  };
};

const useNavigate = () => {
  const router = useRouter();
  return router.push;
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

export { Link, useLocation, useParams, useNavigate };
