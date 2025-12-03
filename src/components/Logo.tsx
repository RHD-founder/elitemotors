import Image from "next/image";

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
    const sizeConfig = {
        small: { width: 80, height: 32, top: 0, left: 0 },
        medium: { width: 160, height: 70, top: 30, left: -10 },
        large: { width: 220, height: 90, top: 40, left: -20 }
    };

    const config = sizeConfig[size];

    return (
        <div className={`relative inline-block ${className}`}>
            <Image
                src="/logo/elite-logo.png"
                alt="Elite Motors Service Logo"
                width={config.width}
                height={config.height}
                className="object-contain"
                style={{
                    position: 'relative',
                    top: `${config.top}px`,
                    left: `${config.left}px`
                }}
            />
        </div>
    );
}
