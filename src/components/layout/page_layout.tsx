import React from "react";
import Header from "./header";
import Footer from "./footer";
import { ErrorBoundary } from "react-error-boundary";
import FallbackErrorComponent from "../error/fallback_error_component";

interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="main-container">
      <ErrorBoundary fallback={<FallbackErrorComponent />}>
        <Header />
        <main>
          <h1 className="mb-10 mt-4 text-2xl font-bold text-cyan-900">
            Points - Take Home Assignment
          </h1>
          <div className="mx-auto grid w-full grid-cols-5 gap-1 rounded bg-white p-2 shadow-md shadow-slate-300">
            {children}
          </div>
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default PageLayout;
