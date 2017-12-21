import ContactTitle from '../components/ContactTitle'
import ContactForm from '../components/ContactForm'

const ContactWrapper = () => (
  <section className='contact-wrapper'>
    <ContactTitle />
    <ContactForm />
    <style jsx>{`
      .contact-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap: 
        padding: 83px 350px 91px;
      }
      @media (min-width: 2000px) {
        .contact-wrapper {
          padding: 83px 350px 91px;
        }
      }
      @media (max-width: 1024px) {
        .contact-wrapper {
          padding: 48px 200px;
        }
      }
      @media (max-width: 768px) {
        .contact-wrapper {
          padding: 48px 100px;
        }
      }
      @media (max-width: 600px) {
        .contact-wrapper {
          padding: 48px 48px;
        }
      }
    `}</style>
  </section>
)

export default ContactWrapper