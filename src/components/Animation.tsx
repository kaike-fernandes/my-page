import { ReactNode } from "react"

interface AnimationProps {
    children: ReactNode;
}

export const Animation = ({ children }: AnimationProps) => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <video
                    src="/animations/purple_animation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 min-h-full">{children}</div>
        </div>
    )
}