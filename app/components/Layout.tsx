import ContextProvider from "./ContextProvider";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
      <ContextProvider>
        <body>{children}</body>
      </ContextProvider>
    );
  }