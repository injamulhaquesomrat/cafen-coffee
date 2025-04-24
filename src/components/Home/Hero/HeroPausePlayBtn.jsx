const HeroPausePlayBtn = ({ handlePlayPause, isVideoPlaying }) => {
  return (
    <button
      onClick={handlePlayPause}
      className="absolute md:bottom-8 bottom-4 md:right-8 right-4 bg-secondary text-primary rounded-full p-2 md:p-5 border border-primary z-40"
    >
      {isVideoPlaying ? (
        <svg
          className=" h-3 w-3 md:h-7 md:w-7"
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_342_116)">
            <mask
              id="mask0_342_116"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="11"
              height="14"
            >
              <path d="M11 0H0V14H11V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_342_116)">
              <mask
                id="mask1_342_116"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="11"
                height="14"
              >
                <path d="M10.5 0H0.5V14H10.5V0Z" fill="white" />
              </mask>
              <g mask="url(#mask1_342_116)">
                <mask
                  id="mask2_342_116"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="11"
                  height="14"
                >
                  <path d="M10.5 0H0.5V14H10.5V0Z" fill="white" />
                </mask>
                <g mask="url(#mask2_342_116)">
                  <path
                    d="M1.5 1V13M9.5 1V13"
                    stroke="#5A0808"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_342_116">
              <rect width="11" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          className=" h-3 w-3 md:h-7 md:w-7"
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_342_114)">
            <path
              d="M12.0899 13.4951C14.1799 12.1019 15.2249 11.4053 15.4139 10.4563C15.4739 10.1555 15.4739 9.84582 15.414 9.54498C15.2251 8.59596 14.1801 7.89927 12.0903 6.50589L7.86195 3.68668C5.33081 1.99907 4.06524 1.15527 3.03066 1.44772C2.70624 1.53942 2.40555 1.70034 2.14928 1.91939C1.33203 2.61795 1.33203 4.13903 1.33203 7.18118V12.8189C1.33203 15.8608 1.33203 17.3817 2.14921 18.0802C2.40546 18.2993 2.70613 18.4602 3.03053 18.5519C4.06503 18.8444 5.33055 18.0009 7.8616 16.3137L12.0899 13.4951Z"
              stroke="#5A0808"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_342_114">
              <rect width="17" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};

export default HeroPausePlayBtn;
