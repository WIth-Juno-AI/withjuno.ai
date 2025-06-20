// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Juno AI — AI that benefits learners";
export const SITE_DESCRIPTION =
  "Artificial Intelligence that benefits all learners, with Juno.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | Juno AI",
  },
  description: SITE_DESCRIPTION,
  keywords: ["AI", "LLMS", "Education"],
  authors: [{ name: "Juno AI Team" }],
  creator: "Juno Team",
  publisher: "Juno Learning",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Juno AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juno AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@jakerenzella",
  },
};
