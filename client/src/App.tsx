import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Announcement from "@/pages/Announcement/Announcement";
import Login from "@/pages/Login/Login";
import ThemeProvider from "@/components/ui/theme-provider";
import Layout from "./Layout";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="BOCC-theme">
      <BrowserRouter>
        <Routes>
            {/* conditional route */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="announcement" element={<Announcement />} />
              <Route path="login" element={<Login />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
