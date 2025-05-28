import Image from "next/image";

export const MyImage = () => {
    return (
        <div className="rounded-2xl hover:rotate-y-180 duration-300 w-lg h-max animate-pulse space-x-4">
            <Image
                src="/img/minha-foto.png"
                alt="Minha foto"
                width={400}
                height={300}
                className="rounded-full"
            />
        </div>
    );
};