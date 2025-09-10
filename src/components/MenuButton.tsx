interface MenuButtonProps {
    onClick: () => void;
    className?: string;
}

export default function MenuButton({ onClick, className = '' }: MenuButtonProps) {
    return (
        <button
            className={`bg-transparent text-white px-6 py-3 rounded-sm hover:bg-black/20 hover:backdrop-blur-sm transition-all ${className}`}
            onClick={onClick}
        >
            <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-base font-normal">Menu</span>
            </div>
        </button>
    );
}
