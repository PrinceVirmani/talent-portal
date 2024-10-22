import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./Layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoutes";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";
import PostJob from "./Pages/PostJobs";
import JobListing from "./Pages/JobListing";
import MyJobs from "./Pages/MyJobs";
import SavedJobs from "./Pages/SavedJobs";
import JobPage from "./Pages/JobPage";

import "./App.css";

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
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
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
