import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <div
                class="btn-group"
                role="group"
                aria-label="Basic outlined button group"
            >
                <Link to="/" type="button" class="btn btn-outline-primary">
                    Home
                </Link>
                <Link to="/auth" type="button" class="btn btn-outline-primary">
                    Auth
                </Link>
                <Link to="/database" type="button" class="btn btn-outline-primary">
                    Database
                </Link>
                <Link to="/google" type="button" class="btn btn-outline-primary">
                    Google
                </Link>
                <Link to="/profile" type="button" class="btn btn-outline-primary">
                    Profile
                </Link>
                <Link to="/contact" type="button" class="btn btn-outline-primary">
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Home