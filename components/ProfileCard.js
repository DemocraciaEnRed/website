const ProfileCard = ( {name, bio, handle, img} ) => (
  <div className='profile-card'>
    <h3 className='profile-title'>{name}</h3>
    <p className='profile-bio'>{bio}</p>
    <p className='profile-handle'>{handle}</p>
  <style jsx>{`
    .profile-card {
      align-items: space-between;
      background-color: var(--gray);
      border-radius: 100%;
      display: flex;
      flex-wrap: wrap;
      height: 250px;
      justify-content: center;
      padding: 64px 39px 63px;
      width: 250px;
    }
    .profile-title {
      font-size: 2.8rem;
      font-weight: 500;
      color: #eaeaea;
    }
    .profile-bio {
      font-size: 2.1rem;
      font-weight: 300;
      color: #eaeaea;
    }
    .profile-handle {
      font-size: 21.1px;
      font-weight: 300;
      color: #eaeaea;
    }
  `}</style>
  </div>
)

export default ProfileCard