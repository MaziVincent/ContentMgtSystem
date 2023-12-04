import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import AllPaths from "./components/AllPaths";
import About from "./components/About";
import SupportUs from "./components/SupportUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Start from "./components/Start";
import UserDashboard from "./components/UserDashboard";
import Dashboard from "./components/admin/Dashboard";
import Overview from "./components/admin/OverView";
import Page404 from "./components/Page404";
import UnAuthorised from "./components/Unauthorized";
import RequireAuth from "./hooks/requireAuth";
import { QueryClient, QueryClientProvider } from "react-query";
import LearningPathDetails from "./components/LearningPathDetails";
import AdminLearningPath from "./components/admin/AdminLearningPath";
import AdminModule from "./components/admin/AdminModule";

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
          <Route
            path="/path"
            element={<AllPaths />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/supportus"
            element={<SupportUs />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route element={<RequireAuth />}>
            <Route
              path="/dashboard"
              element={<UserDashboard />}
            />
            <Route
              path="/learningPath/:id"
              element={<LearningPathDetails />}
            />
            <Route
              path="/start"
              element={<Start />}
            />
          </Route>

          <Route
            index
            element={<Body />}
          />
        </Route>
        <Route element={<RequireAuth />}>
          <Route
            path="/admin"
            element={<Dashboard />}
          >
            <Route
              index
              element={<Overview />}
            />
            <Route
              path="/admin/learningPath"
              element={<AdminLearningPath />}
            />
            <Route
              path="/admin/module"
              element={<AdminModule />}
            />
          </Route>
        </Route>

        <Route
          path="*"
          element={<Page404 />}
        />
        <Route
          path="unauthorized"
          element={<UnAuthorised />}
        />
      </Routes>
    </>
    </QueryClientProvider>
  );
}

export default App;
