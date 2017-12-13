import { t } from '../../../polyglot-modules/polyglot.js'
import Link from 'next/link'
import Milestone from '../components/Milestone'

const items = [0, 1, 2]

const AboutUs = () => (
	<section className='about-us-section' id='about'>
		<h2 className='section-title'>{t('index.aboutUs.title')}</h2>
    <div className='about-us-container'>
      {items.map((i) => {
        return <Milestone key={i} title={t(`index.aboutUs.content.${i}.title`)} subtitle={t(`index.aboutUs.content.${i}.subtitle`)} icon={t(`index.aboutUs.content.${i}.icon`)}containerWidth={'290px'} />
      })}
    </div>
    <Link href="/about">
      <button className='btn'>
        <span className='action-text'>
          {t('index.aboutUs.callToAction')}
        </span>
      </button>
    </Link>
    <style jsx>{`
      .about-us-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .about-us-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
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