import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import * as ROUTES from "./routes";
import Home from "./pages/home";
import Course from "./pages/course";
import Courses from "./pages/courses";
import LoginRegister from "./pages/login-register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME_ROUTE} element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path={ROUTES.COURSES_ROUTE} element={<Courses />} />
        <Route path={ROUTES.COURSE_ROUTE} element={<Course />} />
        <Route path={ROUTES.LOGINREGISTER_ROUTE} element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
