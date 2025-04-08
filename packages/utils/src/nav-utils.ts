export const isActive = (pathname: string, path: string) => {
  const part = pathname?.split("/")[1];

  return (
    (pathname === "/" && path === "/") ||
    (pathname !== "/" && path.startsWith(`/${part}`))
  );
};

export const isActiveChild = (pathname: string, path: string) => {
  return pathname.includes(path);
};
