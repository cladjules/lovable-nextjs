import fs from "node:fs";
import path from "node:path";

const TEMPLATE_PATH = "./templates/page.tsx";

const appDir = path.join(path.resolve(), "./nextjs/src/app");

function extractRoutes(jsxString) {
  const routes = [];

  // Match <Route path="..." element={<ComponentName />} />
  const routeRegex = /<Route\s+path="([^"]+)"\s+element={<(\w+)\s*\/>}\s*\/>/g;

  let match;
  while ((match = routeRegex.exec(jsxString)) !== null) {
    routes.push({
      href: match[1],
      element: match[2],
    });
  }

  return routes;
}

function exec() {
  // Read App for routes
  const appPath = path.join(path.resolve(), "../src/App.tsx");
  let appFile = fs.readFileSync(appPath, "utf-8");
  const routes = extractRoutes(appFile);

  // For projects without BrowserRouter (singe page)
  if (!routes.length) {
    routes.push(
      ...[
        {
          href: "index",
          element: "Index",
        },
        {
          href: "not-found",
          element: "NotFound",
        },
      ]
    );
  }

  routes.forEach((route) => {
    const { href, element } = route;
    let pageName = "page.tsx";
    let pageDir;

    if (element === "Index") {
      pageDir = appDir;
    } else if (element === "NotFound") {
      pageName = "not-found.tsx";
      pageDir = appDir;
    } else {
      pageDir = path.join(appDir, href.replace("/", ""));
    }

    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const destPath = path.join(pageDir, pageName);
    let template = fs.readFileSync(TEMPLATE_PATH, "utf8");
    template = template.replace(/PAGENAME/g, element);
    fs.writeFileSync(destPath, template);
  });
}

exec();
