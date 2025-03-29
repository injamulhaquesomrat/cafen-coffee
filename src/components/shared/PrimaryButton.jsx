const PrimaryButton = ({ buttonText }) => {
  return (
    <button className="cf-btn text-cf-coffee relative overflow-hidden group mb-10 z-10">
      <img
        className="absolute top-0 -left-8 group-hover:-left-2 transition-all duration-500"
        src="/button-vector-01.svg"
        alt="button hover"
      />
      {buttonText}
      <img
        className="absolute -bottom-2 -right-10 group-hover:-right-5 transition-all duration-500"
        src="/button-vector-02.svg"
        alt="button hover"
      />
    </button>
  );
};

export default PrimaryButton;
