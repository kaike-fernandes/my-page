import Link from "next/link";

export const Navbar = () => {



    return (
        <nav className="bg-[#483AA0] h-16 rounded-2xl p-2.5 m-2.5 text-gray-200">
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
                            <li className="cursor-pointer"><Link href={'/about'}>Sobre mim</Link></li>
                            <li className="cursor-pointer">Meus projetos</li>
                            <li className="cursor-pointer">Contato</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};