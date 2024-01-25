import Project from "./components/project";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Index() {
  return (
    <html>
      <body>
        <Navbar />
        <Hero />

        <Project />
      </body>
    </html>
  );
}
