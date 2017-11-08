const CheckedButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlSpace="preserve">
    <polyline className="path" fill="none" points="20,6 9,17 4,12" stroke="#FFFFFF" strokeMiterlimit="10" strokeWidth="2" />
    <style jsx>{`
      #Layer_1 {
        height: 40px;
        width: 40px;
      }
      .path {
        animation: dash 500ms ease forwards;
        stroke-linecap: round;
        stroke-dasharray: 27;
        stroke-dashoffset: -23;
      }
      @keyframes dash {
        to {
          stroke-dashoffset: 0;
        }
      }
      @media (max-width: 1024px) {
        #Layer_1 {
          height: 30px;
          width: 30px;
        }
      }
    `}</style>
  </svg>
)

export default CheckedButton;