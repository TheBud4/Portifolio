interface TechnologyProps {
  icon: string;
  altText: string;
}

const Technology: React.FC<TechnologyProps> = ({ icon, altText }) => {
  return (
    <div className="group size-16 relative flex items-center justify-center">
      <img src={icon} alt={altText} className="h-full w-full object-contain" />
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-darkGray px-2 py-1 text-xs font-semibold text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {altText}
      </span>
    </div>
  );
};

export default Technology;
