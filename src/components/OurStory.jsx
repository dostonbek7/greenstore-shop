import { FaQuoteLeft } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";

function OurStory() {
  
  return (
    <div className="pb-14">
      <img
        className="object-cover mb-10"
        src="./assets/about-huge-img.jpg"
        alt="about-huge-img"
      />
      <div className="flex flex-col md:flex-row items-start md:gap-40">
        <h6 className="text-[14px] mb-4 font-Unna md:text-[18px] tracking-[2px] text-gray text-nowrap leading-[1.25]">
          OUR STORY
        </h6>
        <div>
          <p className="text-closed-shutter text-[15px] mb-[14px]">
            Tristique dapibus porta viverra sit accumsan integer semper dolor
            etiam id iaculis feugiat egestas urna est magna euismod donec
            facilisis sed integer orci ac.
          </p>
          <p className="about-text">
            Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat
            sit mauris semper platea urna, sapien fermentum venenatis etiam enim
            ullamcorper phasellus tortor justo, et, pellentesque pellentesque
            sapien faucibus in adipiscing risus adipiscing bibendum in nec eget
            tincidunt in in sed magna arcu molestie nec mauris quisque.
          </p>
          <p className="about-text">
            Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in
            volutpat faucibus elementum, sodales orci mi fames molestie
            venenatis nunc hendrerit.
          </p>
          <div>
            <FaQuoteLeft className="text-snow-green text-3xl mb-5" />
            <h3 className="text-[16px] md:text-[18px] text-darkness font-semibold mb-5">
              Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
              tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in
              nec ullamcorper vel.
            </h3>
            <div className="flex items-center justify-start gap-4">
              <img
                className="object-cover rounded-full w-10 h-10"
                src="./assets/about-store-avatar.jpg"
                alt="avatar-img"
              />
              <div>
                <h4 className="text-[14px] text-darkness">EMILY EVERGREEN</h4>
                <span className="text-[13px] text-gray">Founder, Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
