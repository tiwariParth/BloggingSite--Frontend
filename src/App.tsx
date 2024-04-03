import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
