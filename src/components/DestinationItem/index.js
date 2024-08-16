import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {id, name, imgUrl} = destination
  return (
    <li className="destination-container">
      <img src={imgUrl} className="destination-img" alt={name} />
      <p className="destination-name">{name}</p>
    </li>
  )
}
export default DestinationItem
