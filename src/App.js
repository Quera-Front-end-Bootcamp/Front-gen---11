import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import {
  HOME_ROUTE,
  COURSES_ROUTE,
  COURSE_ROUTE,
  LOGINREGISTER_ROUTE,
} from "./routes";
import Home from "./pages/home";
import Course from "./pages/course";
import Courses from "./pages/courses";
import LoginRegister from "./pages/login-register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path={COURSES_ROUTE} element={<Courses />} />
        <Route path={COURSE_ROUTE} element={<Course />} />
        <Route path={LOGINREGISTER_ROUTE} element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
