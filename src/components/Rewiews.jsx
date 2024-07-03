function Rewiews() {
  return (
    <>
      <p>There are no reviews yet.</p>
      <div>
        <span>Be the first to review “Ficus Decora Burgundy”</span>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form>
          <label htmlFor="review">
            <span>Your review *</span>
            <textarea id="review"></textarea>
          </label>
          <label htmlFor="name">
            <span>Name *</span>
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            <span>Email *</span>
            <input type="text" id="email" />
          </label>
          <input type="checkbox" />
          <span>
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Rewiews;
