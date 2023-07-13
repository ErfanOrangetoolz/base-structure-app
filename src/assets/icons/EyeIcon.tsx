const EyeIcon = ({ width = 24, height = 24, fill = "#546376" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8512 10.8184C21.0461 9.07231 19.8668 7.52462 18.3968 6.28514L16.9999 5.32028C15.4811 4.44136 13.7549 3.98588 12.0002 4.00033C5.75007 4.00033 2.88088 9.2184 2.14922 10.8184C2.05117 11.0329 2 11.2661 2 11.5017C2 11.7372 2.05078 11.9708 2.14922 12.1849C2.95432 13.931 4.13364 15.4787 5.60359 16.7182L7.0001 17.6815C8.51888 18.56 10.2455 19.0155 12.0002 19.0006C18.2503 19.0006 21.1195 13.7829 21.8512 12.1829C21.9492 11.9688 22 11.736 22 11.5005C22 11.2649 21.9492 11.0321 21.8512 10.818V10.8184ZM16.0495 8.62425C16.7651 9.61724 17.1038 10.8501 16.9698 12.0692C16.8026 13.5896 15.9077 14.9802 14.6026 15.774C12.3315 17.1553 9.28374 16.4068 7.82824 14.2115C7.29737 13.4107 7.0001 12.463 7.0001 11.5009C6.99854 10.5829 7.2501 9.68248 7.72707 8.89848C8.20403 8.11409 8.88803 7.47696 9.70367 7.05586C11.3916 6.18514 13.4393 6.37655 14.9573 7.51017C15.3745 7.82189 15.7436 8.20003 16.0495 8.62425ZM13.6655 8.668C13.1651 8.35628 12.5912 8.17073 12.0002 8.1676C9.84468 8.15706 8.2259 10.2852 8.79935 12.3614C9.18334 13.7521 10.5513 14.8275 12.0002 14.8345C12.8842 14.8345 13.7323 14.4834 14.3573 13.8583C14.9823 13.2333 15.3335 12.3853 15.3335 11.5013C15.3335 10.3579 14.6389 9.27426 13.6655 8.668Z"
        fill={fill}
      />
    </svg>
  );
};
export default EyeIcon;
