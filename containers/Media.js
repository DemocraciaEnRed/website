import MediaLink from '../components/MediaLink'

const mediaLinks = [
  { "url": "http://www.fastcompany.com/3043388/the-y-combinator-chronicles/why-y-combinator-funded-a-radical-political-party-in-argentina", "logo": "static/assets/media/fast.png", "className": "fast" },
  { "url": "https://www.youtube.com/watch?v=7bAOT-57KeE", "logo": "static/assets/media/bbc.png", "className": "bbc" },
  { "url": "http://www.lapoliticaonline.com/nota/85129-tratatan-proyectos-votados-en-internet/", "logo": "static/assets/media/lpo.png", "className": "lpo" },
  { "url": "http://ccaa.elpais.com/ccaa/2015/01/27/madrid/1422375720_783629.html", "logo": "static/assets/media/elpais.png", "className": "elpais" },
  { "url": "http://www.wired.com/2014/05/democracy-os/", "logo": "static/assets/media/wired.png", "className": "wired" },
  { "url": "http://www.lanacion.com.ar/1745336-los-portenos-eligieron-prohibir-a-los-cuidacoches", "logo": "static/assets/media/lanacion.png", "className": "lanacion" },
  { "url": "http://www.ted.com/talks/pia_mancini_how_to_upgrade_democracy_for_the_internet_era", "logo": "static/assets/media/ted.png", "className": "ted" }
]

const Media = () => (
  <section className='media-section'>
    <h2 className='section-title'>Media</h2>
    <div className='media-container'>
      {mediaLinks.map((link, i) =>
        <MediaLink key={i} url={link.url} logo={link.logo} className={link.className} />
      )}
    </div>
    <style jsx>{`
      .media-section {
        padding-bottom: 203px;
      }
      .media-container {
        align-content: space-between;
        display: flex;
        flex-wrap: wrap;
        height: 220px;
        justify-content: space-between;
        margin-top: 79px;
      }
      @media screen and (max-width: 1024px) {
        .media-section .section-title {
          font-size: 3.0rem;
          font-weight: 600;
        }
      }
      @media screen and (max-width: 768px) {
        .media-section {
          padding-bottom: 110px;
        }
        .media-container {
          height: 193px;
        }
      }
      @media screen and (max-width: 600px) {
        .media-section {
          padding: 24px 27px 110px 24px;
        }
        .media-container {
          height: 245px;
          margin-top: 49px;
          justify-content: space-between;
        }
      }
      @media screen and (max-width: 375px) {
        .media-container {
          align-items: space-around;
          flex-direction: column;
          align-items: center;
          height: 360px;
        }
      }
    `}</style>
  </section>
)

export default Media