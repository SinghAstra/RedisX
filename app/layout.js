import Nav from "@/components/Nav";
import "@/styles/global.css";

export const metadata = {
  title: "Prompthub",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Nav />
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
