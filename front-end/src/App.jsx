import { TopBar } from "./components/TopBar/TopBar";
import { Outlet } from "react-router-dom";
import { HeroSection } from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <TopBar />
      <HeroSection />
      <Outlet />
    </>
  );
}

export default App;
