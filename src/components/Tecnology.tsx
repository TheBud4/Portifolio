interface TechnologyProps {
    icon: string;
    altText: string;
}

const Technology: React.FC<TechnologyProps> = ({ icon, altText }) => {
    return (
        <div className="size-16">
            <img src={icon} alt={altText} />
        </div>
    );
};

export default Technology;