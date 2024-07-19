import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    //   console.log(vans);

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <>
            {
                vans.length > 0 ? (
                    <section className="section">
                        <h1 className="host-vans-title">Your listed vans</h1>
                        {hostVansEls}
                    </section>

                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>
    )
}