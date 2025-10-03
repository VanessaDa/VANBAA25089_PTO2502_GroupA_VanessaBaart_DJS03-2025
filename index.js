import React from "react";
import { createRoot } from "react-dom/client";
import PodcastLandingPage from "./views/PodcastLandingPage";
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(<PodcastLandingPage />);
