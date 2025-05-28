import { MyImage } from "@/components/MyImage";
import { Resume } from "@/components/Resume";
// import { Animation } from "@/components/Animation";

export default function Home() {
  return (
    <div className="min-h-screen block h-lvh p-5">
      <nav className="bg-indigo-600 h-16 rounded-2xl p-2.5 m-2.5 text-gray-200">
        <div className="flex justify-between items-center h-full">
          <div>
            <p className="font-space text-sm font-medium">Hello World</p>
          </div>
          <div className="hidden md:block">
            <p className="font-space text-sm font-medium">Seja bem vindo ao meu site!</p>
          </div>
          <div>
            <div className="">
              <ul className="flex gap-2.5 font-space text-sm font-medium">
                <li className="cursor-pointer">Sobre mim</li>
                <li className="cursor-pointer">Meus projetos</li>
                <li className="cursor-pointer">Contato</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="h-[calc(100vh-6rem-2rem)]  opacity-60 rounded-2xl m-2.5 text-black flex gap-5 justify-between p-5">
        <MyImage />
        <Resume />
      </section>
    </div>
  );
}
