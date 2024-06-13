import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jeff Hampton</title>{" "}
        <meta
          name="description"
          content="My photo portfolio. Hope you like dogs."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
