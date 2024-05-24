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

    render(){
        const {isLoading} = this.state 

        return(

        )
    }
}
export default Home