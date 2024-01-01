import React from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


const App = () => {
  // const client = new QueryClient();
  return (
      // <QueryClientProvider client={client}>
        <div className="d-flex flex-column min-vh-100 bg-gradient p-2">
          <div
            class="btn-group mb-3"
            role="group"
            aria-label="Basic outlined button group"
          >
            <Link to="/" type="button" class="btn btn-outline-primary">
              Home
            </Link>
            <Link to="/auth" type="button" class="btn btn-outline-primary">
              Auth
            </Link>
            <Link to="/database" type="button" class="btn btn-outline-primary">
              Database
            </Link>
            <Link to="/google" type="button" class="btn btn-outline-primary">
              Google
            </Link>
            <Link to="/profile" type="button" class="btn btn-outline-primary">
              Profile
            </Link>
            <Link to="/contact" type="button" class="btn btn-outline-primary">
              Contact
            </Link>
          </div>
          <Outlet />
        </div>
      // </QueryClientProvider>
  );
};

export default App;
