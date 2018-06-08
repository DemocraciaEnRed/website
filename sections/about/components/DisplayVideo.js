const DisplayVideo = ({ video }) => (
  <iframe frameBorder="0" width="560" height="315" src={`https://youtube.com/embed/${video}`} ></iframe>
)

export default DisplayVideo