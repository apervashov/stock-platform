import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse p-8 lg:flex-row">
        <div className="mb-44 flex flex-col space-y-10 m-10 lg:m-10 xl:m-20 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-center text-5xl font-bold lg:max-w-md lg:text-left lg:text-6xl">
            Financial data with no news.
          </h1>
          <p className="text-center text-2xl text-contentMuted lg:max-w-md lg:text-left">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link to="/search" className="btn-primary py-5 text-2xl lg:py-4">
              Get Started
            </Link>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="Financial data illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
