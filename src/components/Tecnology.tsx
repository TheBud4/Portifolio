interface TechnologyProps {
    icon: string;
    altText: string;
}

const Technology: React.FC<TechnologyProps> = ({ icon, altText }) => {
    return (
        <div>
            <img src={icon} alt={altText} />
        </div>
    );
};

export default Technology;