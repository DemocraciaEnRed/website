import MediumPost from '../components/MediumPost'

let snippet = 'A wonderful serenity has taken possession of my entire soul, like this.'
let timestamp = '14:20 PM, Tuesday'
let likes = 123

const Publications = () => (
  <section className='publications-section'>
    <h2 className='section-title'>Publicaciones</h2>
    <MediumPost
      snippet={snippet}
      timestamp={timestamp}
      likes={likes} />
    <MediumPost
      snippet={snippet}
      timestamp={timestamp}
      likes={likes} />
  <style jsx>{`
    
  `}</style>
  </section>
)

export default Publications