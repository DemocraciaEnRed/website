import { t } from '../../../polyglot-modules/polyglot.js'
import MediaLink from '../components/MediaLink'

const data = [0, 1, 2, 3, 4, 5, 6]

const Media = () => (
  <section className='media-section' id='media'>
    <h2 className='section-title'>{t('index.media.title')}</h2>
    <div className='media-container'>
      {data.map((i) =>
        <MediaLink key={i} url={`index.media.links.${i}.url`} logo={`index.media.links.${i}.logo`} className={`index.media.links.${i}.className`} />
      )}
    </div>
    <div className='section-number'>
          <span>06</span>
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