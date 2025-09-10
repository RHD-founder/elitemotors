import Image from "next/image";

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
    const sizeConfig = {
        small: { width: 80, height: 32, top: -8, left: -12 },
        medium: { width: 140, height: 60, top: -15, left: -22 },
        large: { width: 220, height: 90, top: -22, left: -35 }
    };

    const config = sizeConfig[size];

    return (
        <div className={`relative inline-block ${className}`}>
            <Image
                src="/logo/logo_elite.svg"
                alt="Elite Motors Service Logo"
                width={config.width}
                height={config.height}
                style={{
                    position: 'relative',
                    top: `${config.top}px`,
                    left: `${config.left}px`
                }}
            />
        </div>
    );
}
