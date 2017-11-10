import MediaLink from '../components/MediaLink'

const mediaLinks = [
  { "url": "http://www.fastcompany.com/3043388/the-y-combinator-chronicles/why-y-combinator-funded-a-radical-political-party-in-argentina", "logo": "static/assets/media/fast.png" },
  { "url": "https://www.youtube.com/watch?v=7bAOT-57KeE", "logo": "static/assets/media/bbc.png" },
  { "url": "http://www.lapoliticaonline.com/nota/85129-tratatan-proyectos-votados-en-internet/", "logo": "static/assets/media/lpo.png" },
  { "url": "http://ccaa.elpais.com/ccaa/2015/01/27/madrid/1422375720_783629.html", "logo": "static/assets/media/elpais.png" },
  { "url": "http://www.wired.com/2014/05/democracy-os/", "logo": "static/assets/media/wired.png" },
  { "url": "http://www.lanacion.com.ar/1745336-los-portenos-eligieron-prohibir-a-los-cuidacoches", "logo": "static/assets/media/lanacion.png" },
  { "url": "http://www.ted.com/talks/pia_mancini_how_to_upgrade_democracy_for_the_internet_era", "logo": "static/assets/media/ted.png" }
]

const Media = () => (
  <section className='media-section'>
    <h2 className='section-title'>Media</h2>
    <div className='media-container'>
      {mediaLinks.map((link, i) =>
        <MediaLink key={i} url={link.url} logo={link.logo} />
      )}
    </div>
  </section>
)

export default Media