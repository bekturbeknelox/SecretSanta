import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = { details: [], error: null }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000')
            .then(res => {
                console.log('API Response:', res.data);  // Log the response data
                this.setState({
                    details: res.data.users
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                this.setState({
                    error: 'Error fetching data. Please try again later.'
                });
            });
    }

    render() {
        console.log('State:', this.state);  // Log the current state
        const { details, error } = this.state;

        return (
            <div>
                {error && <p>{error}</p>}
                {details.length > 0 ? (
                    details.map((user, id) => (
                        <div key={id}>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            {/* Add more details as needed */}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        )
    }
}

export default App;