import { MyImage } from "@/components/MyImage";
import { Resume } from "@/components/Resume";
import { Animation } from "@/components/Animation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Animation>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="m-2.5 text-black flex gap-5 justify-between p-5 flex-1">
          <MyImage />
          <Resume />
        </section>
        <Footer />
      </div>
    </Animation>
  );
}
