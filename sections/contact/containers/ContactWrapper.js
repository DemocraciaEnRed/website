import ContactTitle from '../components/ContactTitle'
import ContactForm from '../components/ContactForm'

const ContactWrapper = () => (
  <section className='contact-wrapper'>
    <ContactTitle />
    <ContactForm />
    <style jsx>{`
      .contact-wrapper {
        padding: 83px 350px 91px;
      }
    `}</style>
  </section>
)

export default ContactWrapper