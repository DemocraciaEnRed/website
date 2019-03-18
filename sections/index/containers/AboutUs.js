import { t } from '../../../polyglot-modules/polyglot.js'
import Link from 'next/link'
import Milestone from '../components/Milestone'

const items = [0, 1, 2]

const AboutUs = () => (
	<section className='about-us-section' id='what-we-do'>
		<h2 className='section-title'>{t('index.aboutUs.title')}</h2>
    <div className='about-us-container'>
      {items.map((i) => {
        return <Milestone key={i} title={t(`index.aboutUs.content.${i}.title`)} subtitle={t(`index.aboutUs.content.${i}.subtitle`)} icon={t(`index.aboutUs.content.${i}.icon`)}containerWidth={'290px'} />
      })}
    </div>
    <div className="buttons-container">
    <Link href='/what-we-do'>
      <button className='btn'>
        <span className='action-text'>
          {t('index.aboutUs.callToAction')}
        </span>
      </button>
    </Link>
    <a href={'https://drive.google.com/file/d/1dOuw_imRgG0dLA539Zoi6OIlRMCXInnd/view'} target="_blank">
      <button className='btn'>
        <span className='action-text'>
          {t('index.aboutUs.downloadPDF')}
        </span>
      </button>
    </a>
    </div>
    <style jsx>{`
      .about-us-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .about-us-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        margin: 64px 0 30px;
      }
      .about-us-section .btn {
        align-self: center;
        margin-top: 30px;
      }
      .about-us-section .btn span {
        color: var(--white);
      }
      .section-number {
        right: 83px;
      }
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 45px;
        width: 511px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 520px) {
        .buttons-container {
          align-items: center;
          flex-direction: column;
          width: 100%;
        }
        .buttons-container .btn:first-child {
          margin-bottom: 20px;
        }
      }
      @media (max-width: 1440px) {
        .about-us-container {
          justify-content: space-between;
        }
      }
      @media (max-width: 1024px) {
        .about-us-container {
          margin-top: 24px;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        .about-us-section .section-title {
          font-size: 3.0rem;
        }
        .about-us-section .btn {
          margin-top: -7px;
        }
      }
    `}</style>
	</section>
)

export default AboutUs