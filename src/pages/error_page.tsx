import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/page_layout";

const ErrorPage = () => (
  <PageLayout>
    <div className="col-span-5 flex flex-col p-6">
      <h3 className="text-lg font-bold">File Not Found.</h3>
      <p>
        Click&nbsp;
        <Link to="/" className="underline">
          here
        </Link>
        &nbsp;to go back to home page.
      </p>
    </div>
  </PageLayout>
);

export default ErrorPage;
