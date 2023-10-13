import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import RootLayout from "./layouts/RootLayout";
import Resume from "./pages/Resume";
import Music from "./pages/Music";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/music" element={<Music />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
