import { Route, Routes, Navigate } from "react-router-dom";
import * as ROUTES from "./routes";
import Home from "./pages/home";
import Course from "./pages/course";
import Courses from "./pages/courses";
import LoginRegister from "./pages/login-register";
import NotFound from "./pages/404";
function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME_ROUTE} element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path={ROUTES.COURSES_ROUTE} element={<Courses />} />
      <Route path={ROUTES.COURSE_ROUTE} element={<Course />} />
      <Route path={ROUTES.LOGINREGISTER_ROUTE} element={<LoginRegister />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
