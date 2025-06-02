import Image from "next/image";

export const MyImage = () => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="relative w-120 h-120">
                <Image
                    src="/img/minha-foto.png"
                    alt="Minha foto"
                    fill
                    className="object-cover rounded-full"
                />
            </div>
        </div>
    );
};