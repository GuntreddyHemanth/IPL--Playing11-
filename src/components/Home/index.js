import {Component} from 'react'
import Loader from 'react-loader-spinner'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
    state = {
        isLoading: true,
        teams: [],
    }

    componentDidMount(){
        this.getTeams()
    }

    setTeams = (formattedData, isLoading) => {
        this.setState({
            teams: formattedData,
            isLoading,
        })
    }

    getTeams = async() => {
        const response = await fetch(teamsApiUrl)
        const fetchedData = await response.json()
        const formattedData = fetchedData.teams.map(team =>({
            name: team.name,
            id: team.id,
            teamImageURL: team.team_image_url,
        }))
        this.setTeams(formattedData, false)
    }

    renderLoader = () => {
        <div data-testid="loader" className="loader-container">
            <Loader type="oval" color="#ffffff" height="50"/>
        </div>
    }

    render(){
        const {isLoading} = this.state

        return(
            <div className="home-route-container">
                <div className="team-list-container">
                    <div className="ipl-dashboard-heading-container">
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                            alt="ipl-logo"
                            className="ipl-logo"
                        />
                        <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
                    </div>
                    {isLoading ? this.renderLoader()}
                </div>
            </div>

        )
    }
}
export default Home