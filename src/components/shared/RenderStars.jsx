
import { FaStar } from 'react-icons/fa';

const RenderStars = ({count}) => {
    return Array.from({ length: count }, (_, index) => (
        <FaStar key={index} className="text-lg md:text-xl" />
      ));
};

export default RenderStars;