import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {inputText: ''}

  onInputTextEntered = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    let {inputText} = this.state
    inputText = inputText.toLowerCase()
    let {destinationsList} = this.props
    if (inputText !== '') {
      const filteredDestinationList = destinationsList.filter(eachDestination =>
        eachDestination.name.toLowerCase().includes(inputText),
      )
      destinationsList = filteredDestinationList
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="inputSearchingElement">
          <input
            type="search"
            className="inputEle"
            placeHolder="Search"
            onChange={this.onInputTextEntered}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul class="destinations-body-container">
          {destinationsList.map(eachDestination => (
            <DestinationItem
              destination={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
