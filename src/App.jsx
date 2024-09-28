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
import { ThemeProvider } from "./components/ui/theme-provider";

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
        element: <Onboarding />,
      },
      {
        path: "/joblisting",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/myjobs",
        element: <MyJobs />,
      },
      {
        path: "/postjobs",
        element: <PostJobs />,
      },
      {
        path: "/savedjobs",
        element: <SavedJobs />,
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
