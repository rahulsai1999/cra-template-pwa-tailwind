import React from "react";
import { CookiesProvider } from "react-cookie";
import { Helmet } from "react-helmet";
import { ClearCacheProvider } from "react-clear-cache";
import { ErrorBoundary } from "react-error-boundary";

import Router from "./pages/_router";
import ErrorPage from "./pages/error";

const App = () => {
  return (
    <ErrorBoundary
      onError={(error, componentStack) => {
        console.log({ error, componentStack });
        Logger({ error, componentStack, location: window.location });
      }}
      fallbackRender={({ resetErrorBoundary }) => (
        <ErrorPage type={503} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <ClearCacheProvider auto={true}>
        <Helmet>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="imageindex, follow, snippet, index" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{""}</title>
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          ></link>
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#2e005b"
          ></link>
          <meta name="theme-color" content="#317EFB" />
        </Helmet>
        <CookiesProvider>
          <Router />
        </CookiesProvider>
      </ClearCacheProvider>
    </ErrorBoundary>
  );
};

export default App;
