interface TechnologyProps {
    icon: string;
    altText: string;
}

const Technology: React.FC<TechnologyProps> = ({ icon, altText }) => {
    return (
        <div className="group size-16 relative flex items-center justify-center overflow-hidden rounded">
            <img
                src={icon}
                alt={altText}
                className="h-full w-full object-contain"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-darkGray text-background text-xs font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {altText}
            </span>
        </div>
    );
};

export default Technology;
