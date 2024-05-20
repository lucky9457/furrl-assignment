import {Component} from 'react'

class Main extends Component {
  componentDidMount() {
    this.getapi()
  }

  getapi = async () => {
    const options = {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      'https://api.furrl.in/api/v2/listing/getListingProducts',
      options,
    )
    console.log(response)
    const responseData = await responseData.json()
    console.log(responseData)
  }

  render() {
    return (
      <div className="maincontainer">
        <h1>sd</h1>
      </div>
    )
  }
}

export default Main
