import { NavLink } from "react-router-dom";

function Story() {
  return (
    <div className="flex flex-col lg:flex-row items-center pt-5 lg:gap-8 relative">
      <picture>
        <source className="object-cover" srcSet="./assets/home-lg-img.jpg" media="(min-width: 991px )" />
        <source srcSet="./assets/home-md-img.jpg" media="(min-width: 768px )" />
        <img
          className="object-cover"
          src="./assets/home-sm-girl-img.jpg"
          alt="home-bg"
        />
      </picture>

      <div className="flex flex-col items-start md:bg-white p-6 md:absolute bottom-0 md:w-[90%] md:p-6 lg:relative lg:basis-1/2">
        <h4 className="uppercase text-[14px] text-darkness mb-4 font-Unna">
          Our Story
        </h4>
        <h1 className="font-Unna mb-5 text-[32px] leading-[1.3] text- darkness md:text-[40px]">
          For People Who Love Plants
        </h1>
        <p className="mb-6 text-[14px] text-gray lg:max-w-[500px]">
          Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc
          at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed
          in placerat.
        </p>
        <p className="mb-7 text-[14px] text-gray lg:max-w-[500px]">
          Facilisis eu faucibus diam cursus pulvinar consectetur purus sem
          felis, mauris consectetur nisl vitae gravida ultricies sem condimentum
          aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet
          pharetra.
        </p>
        <NavLink
          to="/"
          className="capitalize text-base text-white bg-light-green px-5 py-2"
        >
          Read more
        </NavLink>
      </div>
    </div>
  );
}

export default Story;
