import { Link } from "react-router-dom"

const Technician = () => {
    return (
        <section>
            <h1>Technicians Page</h1>
            <br />
            <p>You must have been assigned an Technician role.</p>
            <div>
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Technician