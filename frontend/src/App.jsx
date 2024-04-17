import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import Sidebar from "./components/Sidebar";

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="max-w-5xl m-5 text-white mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/Likes" element={<LikesPage />} />
          </Routes>
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
