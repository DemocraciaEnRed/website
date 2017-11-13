import ProfileCard from '../components/ProfileCard'

const profiles = [
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'},
  {'name': 'Vicky Guareschi', 'bio': 'UX/UI padawan', 'handle': 'vickyguareschi', 'img': '../static/assets/profile.jpg'}
]

const WhoWeAre = () => (
  <section className='who-we-are-section'>
    <h2 className='section-title'>Who we are</h2>
    <div className='profile-container'>
      {profiles.map((p, i) => 
        <ProfileCard key={i} name={p.name} bio={p.bio} handle={p.handle} img={p.img} />
      )}
    </div>
    <style jsx>{`
      .who-we-are-section {
        padding-bottom: 173px;
      }
      .profile-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 72px;
        width: 100%;
      }
    `}</style>
  </section>
)

export default WhoWeAre