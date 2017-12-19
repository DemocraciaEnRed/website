const Modal = ( {content} ) => (
  <div className='overlay'>
    {console.log(content)}
    <div className='modal-container'>
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
        align-items: center;
        background-color: var(--white);
        box-shadow: 0 6px 6px rgba(0,0,0,.8);
        display: flex;
        height: 200px;
        justify-content: center;
        padding: 40px;
        position: fixed;
        top: 200px;
        width: 500px;
      }
      .regular-text {
        color: var(--dark-accent);
        font-size: 2.4rem;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Modal