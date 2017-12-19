const Modal = ( {content, hideModal} ) => (
  <div className='overlay'>
    <div className='modal-container'>
      <button className='close-btn' onClick={hideModal}>x</button>
      <p className='regular-text'>{content}</p>
    </div>
    <style jsx>{`
      .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 11;
      }
      .modal-container {
        background-color: var(--white);
        box-sizing: border-box;
        box-shadow: 0 6px 6px rgba(0,0,0,.8);
        display: flex;
        flex-wrap: wrap;
        height: 200px;
        justify-content: center;
        padding: 20px 40px 40px;
        position: fixed;
        top: 200px;
        width: 500px;
      }
      .close-btn {
        align-self: flex-start;
        background-color: var(--white);
        border-style: none
        color: var(--dark-accent);
        cursor: pointer;
        font-size: 1.8rem;
        margin-left: auto;
        margin-right: -20px;
        margin-top: -10px;
      }
      .close-btn:hover {
        color: var(--light-accent);
      }
      .regular-text {
        color: var(--dark-accent);
        font-size: 2.4rem;
        text-align: center;
      }
      @media (max-width: 1024px) {
        .modal-container {
          top: 150px;
        }
      }
      @media (max-width: 550px) {
        .modal-container {
          width: 300px;
        }
        .regular-text {
          font-size: 2.0rem;
        }
      }
      @media (max-width: 550px) {
        .modal-container {
          width: 200px;
        }
      }
    `}</style>
  </div>
)

export default Modal