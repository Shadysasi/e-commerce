import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative bg-[url('https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20hero%20image%20with%20stylish%20clothing%20items%20arranged%20on%20a%20clean%20minimalist%20background%2C%20soft%20gradient%20lighting%2C%20professional%20product%20photography%20style%2C%20high-end%20fashion%20items%20displayed%20elegantly%2C%20neutral%20colors%20with%20subtle%20accent%20colors%2C%20plenty%20of%20whitespace%20on%20the%20left%20side%20for%20text&width=1920&height=600&seq=hero1&orientation=landscape')]
      bg-cover bg-[center_right]"
    >
      <div className="container mx-auto px-4 py-24 md:py-32 w-full">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Summer Collection 2025
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover our latest arrivals designed for comfort and style. Premium
            quality that lasts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products/all"
              className="py-3 px-6 bg-primary text-white font-medium rounded-button hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Shop Now
            </Link>
            <Link
              to="/products/all"
              className="py-3 px-6 bg-white text-gray-800 font-medium rounded-button border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;