import MenuBar from "@/components/MenuBar";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "./globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "TanStack Start Starter" },
      {
        name: "description",
        content: "Flames of Orion - Mech Combat Unit Builder and Rules Reference.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Wallpoet&display=swap"
          rel="stylesheet"
        ></link>
        <HeadContent />
      </head>
      <body className="antialiased">
        <MenuBar />
        <main className="min-h-screen flex flex-col pt-4">
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  );
}
