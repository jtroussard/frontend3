import { Link } from "react-router-dom"

const Supervisor = () => {
    return (
        <section>
            <h1>Supervisors Page</h1>
            <br />
            <p>You must have been assigned an Supervisor role.</p>
            <div>
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Supervisor