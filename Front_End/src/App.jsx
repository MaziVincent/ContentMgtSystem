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
import AdminTopic from "./components/admin/AdminTopic";
import AdminTopicDetails from "./components/admin/AdminTopicDetails";
import PersistLogin from "./shared/PersistLogin";
import TopicComponent from "./components/students/TopicComponent";

function App() {
  const queryClient = new QueryClient();
  const roles = { user: "User", admin: "Admin", student: "Student" };

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Routes>
          {/* public routes */}
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
            <Route
              index
              element={<Body />}
            />

            {/* Catch all */}

            <Route
              path="*"
              element={<Page404 />}
            />
            <Route
              path="unauthorized"
              element={<UnAuthorised />}
            />

            {/* Protected Routes  */}
            <Route element={<PersistLogin />}>
              <Route
                element={
                  <RequireAuth allowedRoles={[roles.student, roles.user]} />
                }
              >
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

                <Route path="/topic/:id" element={<TopicComponent/>} />
                

               
              </Route>
            </Route>
          </Route>

          {/* Admin Routes  */}
          <Route element={<PersistLogin />}>
            <Route
              element={<RequireAuth allowedRoles={[roles.admin, roles.user]} />}
            >
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
                <Route
                  path="/admin/topic"
                  element={<AdminTopic />}
                />
                <Route
                  path="/admin/topic/:id"
                  element={<AdminTopicDetails />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </>
    </QueryClientProvider>
  );
}

export default App;
