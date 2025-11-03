import fs from "node:fs";
import path from "node:path";

const CHILDREN_ARGS = `Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)`;

const exec = () => {
  const indexFile = fs.readFileSync(
    path.join(path.resolve(), "../index.html"),
    "utf-8"
  );

  // Provider
  const providerPath = path.join(
    path.resolve(),
    "./nextjs/src/app/providers.tsx"
  );
  let providerFile = fs.readFileSync(providerPath, "utf-8");
  if (providerFile.includes("BrowserRouter")) {
    providerFile = providerFile.replaceAll(
      /<BrowserRouter(.*?)BrowserRouter>/gs,
      "{children}"
    );
  } else {
    // For projects without BrowserRouter (singe page)
    providerFile = providerFile.replaceAll("<Index />", "{children}");
  }

  providerFile = providerFile.replaceAll("App = ()", CHILDREN_ARGS);
  providerFile = providerFile.replaceAll("App", "Providers");
  providerFile = providerFile.replaceAll("./", "@/");
  fs.writeFileSync(providerPath, providerFile);

  // Layout
  const layoutPath = path.join(path.resolve(), "./nextjs/src/app/layout.tsx");
  let layoutFile = fs.readFileSync(layoutPath, "utf-8");
  layoutFile = layoutFile.replaceAll("HTML", `(${indexFile})`);
  layoutFile = layoutFile.replaceAll("<!doctype html>", "");
  layoutFile = layoutFile.replaceAll("<!DOCTYPE html>", "");
  layoutFile = layoutFile.replaceAll("charset", "charSet");
  layoutFile = layoutFile.replaceAll(
    '<div id="root"></div>',
    "<Providers>{children}</Providers>"
  );
  layoutFile = layoutFile.replaceAll(
    '<script type="module" src="/src/main.tsx"></script>',
    ""
  );
  layoutFile = `"use client";
  ${layoutFile}`;

  fs.writeFileSync(layoutPath, layoutFile);
};

exec();
