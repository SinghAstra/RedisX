import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-mono ">{siteConfig.name}</h1>
    </div>
  );
}
