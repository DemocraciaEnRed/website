const ClosedSearch = () => (
  <div className='closed-search-container'>
    <p className='closed-search-text'>No tenemos ninguna búsqueda abierta por el momento <br/>
      Pero podés contactarnos <a className='closed-search-link'>por aquí!</a></p>
  <style>{`
    .closed-search-container {
      display: flex;
      justify-content: center;
      margin-top: 102px;
      margin-left: auto;
      margin-right: auto;
    }
    .closed-search-text {
      color: var(--gray);
      font-size: 3.6rem;
      text-align: center;
    }
    .closed-search-link {
      color: var(--dark-accent);
      text-decoration: underline;
    }
    @media (max-width: 1024px) {
      .closed-search-text {
        font-size: 2.4rem;
      }
    }
  `}</style>
  </div>
)

export default ClosedSearch