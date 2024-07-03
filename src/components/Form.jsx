function Form() {
  return (
    <div className="pb-10 md:basis-[50%] grow shrink w-full md:pl-12">
      <h3 className="font-Unna text-darkness text-[28px] lg:text-[32px] lg:text-left text-center pb-10 md:pb-6 pt-10 leading-[1.3]">
        Drop us a line or two
      </h3>
      <form autoComplete="off" className="flex flex-col gap-4">
        <label htmlFor="name">
          <span className="text-[15px] text-gray font-bold block">
            Name <span className="text-red-600">*</span>
          </span>
          <input
            className="contact-input w-full p-[10.5px] border-opacity-30"
            type="text"
            placeholder="Full name"
            id="name"
          />
        </label>
        <label htmlFor="email">
          <span className="text-[15px] text-gray font-bold block">
            Email <span className="text-red-600">*</span>
          </span>
          <input
            className="contact-input w-full p-[10.5px] border-opacity-30"
            type="text"
            placeholder="Email address"
            id="email"
          />
        </label>
        <label htmlFor="message">
          <span className="text-[15px] text-gray font-bold block">
            Comment or message <span className="text-red-600">*</span>
          </span>
          <textarea
            className="contact-input w-full p-[10.5px] h-[120px] border-opacity-30"
            placeholder="Your message"
            id="message"
          ></textarea>
        </label>
      </form>
      <button className="px-[30px] py-[10px] bg-light-green text-white hover:bg-gray">
        Submit
      </button>
    </div>
  );
}

export default Form;
