const Content = (props) => (
  <section className='content-section'>
    <h3>Este es el título</h3>

    {props.children}
    <style jsx>{`
    h3{
      font-size:5em;
      padding:30px;
    }
      .content-section {
        padding-bottom: 100px;
        padding-top: 100px;
      }
    `}</style>
  </section>
)

export default Content