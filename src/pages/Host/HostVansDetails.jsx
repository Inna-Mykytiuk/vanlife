import { Suspense } from 'react';
import { useEffect, useState } from "react"
import { NavLink, useParams, Link, Outlet } from "react-router-dom"
// import { getHostVans } from "../../../api";



export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null);


    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                {/*Your changes will go here*/}
                <nav className='host-nav'>
                    <NavLink to="." className='nav-link' end>Details</NavLink>
                    <NavLink to="pricing" className='nav-link'>Pricing</NavLink>
                    <NavLink to="photos" className='nav-link'>Photos</NavLink>
                </nav>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet context={{ currentVan }} />
                </Suspense>
            </div>
        </section>
    )
}