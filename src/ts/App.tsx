import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListingScreen from './listingScreen'
import ListingsScreen from './listingsScreen'

function App() {
    return (
        <Router>
            <Route exact path="/">
                <ListingsScreen />
            </Route>
            <Route exact path="/listing/:uuid">
                <ListingScreen />
            </Route>
        </Router>
    )
}

export default App
