import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Strategies } from "./components/Strategies";
import { Projects } from "./components/Projects";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "strategies", Component: Strategies },
      { path: "projects", Component: Projects },
      { path: "case-studies", Component: CaseStudies },
      { path: "contact", Component: Contact },
    ],
  },
]);