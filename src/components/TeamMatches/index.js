import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    recentMatchesData: {},
  }

  renderTeamMatches = () => {
      const {match} = this.props
      const {params} = match 
      const {id} = params 
      const {recentMatchesData} = this.state 
      const {}
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="oval" color="#ffffff" height="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>{isLoading ? this.renderLoader() : this.renderTeamMatches()}</div>
    )
  }
}

export default TeamMatches
