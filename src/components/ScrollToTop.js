import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // useLocation hook se humein current path ka pata chalta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Window ko top-left corner (0,0) par bhejta hai
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi use kar sakte hain, lekin "instant" navigation ke liye best hai
    });
  }, [pathname]); // Jab bhi path badlega, ye trigger hoga

  return null; // Ye component kuch render nahi karega
};

export default ScrollToTop;