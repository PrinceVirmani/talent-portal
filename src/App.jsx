import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./Layouts/AppLayout";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";
import JobListing from "./Pages/JobListing";
import MyJobs from "./Pages/MyJobs";
import JobPage from "./Pages/JobPage";
import PostJobs from "./Pages/PostJobs";
import SavedJobs from "./Pages/SavedJobs";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <Onboarding />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/joblisting",
        element: (
          <ProtectedRoutes>
            <JobListing />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoutes>
            <JobPage />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <ProtectedRoutes>
            <MyJobs />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/postjobs",
        element: (
          <ProtectedRoutes>
            <PostJobs />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/savedjobs",
        element: (
          <ProtectedRoutes>
            <SavedJobs />,
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
