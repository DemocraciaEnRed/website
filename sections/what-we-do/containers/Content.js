const Content = (props) => (
  <section className='content-section'>
    {props.children}
    <style jsx>{`
      .content-section {
        padding-bottom: 0px;
        padding-top: 0px;
      }
    `}</style>
  </section>
)

export default Content