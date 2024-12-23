import React from "react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="grid min-h-screen grid-cols-[1fr_5fr] grid-rows-[0.8fr_7fr]">
        {children}
      </main>
    </>
  );
};
