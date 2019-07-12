import { t } from '../../../polyglot-modules/polyglot.js'
import MediaLink from '../components/MediaLink'

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Media = () => (
  <section className='media-section' id='media'>
    <h2 className='section-title'>{t('index.media.title')}</h2>
    <div className='media-container'>
      {data.map((i) =>
        <MediaLink key={i} url={`index.media.links.${i}.url`} logo={`index.media.links.${i}.logo`} className={`index.media.links.${i}.className`} />
      )}
    </div>
    <style jsx>{`
      .media-container {
        align-content: space-around;
        display: flex;
        flex-wrap: wrap;
        height: 220px;
        justify-content: space-around;
        margin-top: 79px;
      }
      @media screen and (max-width: 1024px) {
        .media-section .section-title {
          font-size: 3.0rem;
        }
      }
      @media screen and (max-width: 768px) {
        .media-container {
          height: 193px;
        }
      }
      @media screen and (max-width: 600px) {
        .media-section {
          padding: 24px 27px 48px 24px;
        }
        .media-container {
          height: 245px;
          margin-top: 49px;
          justify-content: space-between;
        }
      }
      @media screen and (max-width: 375px) {
        .media-container {
          align-content: center;
          align-items: center;
          flex-direction: column;
          height: 360px;
        }
      }
    `}</style>
  </section>
)

export default Media