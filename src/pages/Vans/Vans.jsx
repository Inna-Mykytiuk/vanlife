import  { useEffect,useState } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

export default function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const typeFilter = searchParams.get("type");
    // console.log(typeFilter)

useEffect(() => {
    async function loadVans() {
        setLoading(true);
        try {
            const data = await getVans();
        setVans(data);
            
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    loadVans();
}, []);
    
    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    // console.log(displayedVans);

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error.message}</h2>
    }


    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    // For Link serchParams routs

    // function genSearchParams(key, value) {
    //     const sp = new URLSearchParams(searchParams);
    //     if (value === null) {
    //         sp.delete(key);
    //     } else {
    //         sp.set(key, value);
    //     }
    //     return `?${sp.toString()}`
    // }

    function handleFilterChange(key, value) {
        setSearchParams((prevParams) => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams;
        })

    }

    return (
        <section className="section">
            <div className="container">
            <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                    
                    {typeFilter ? (
                        <button onClick={() => handleFilterChange("type", null)} className="van-type clear-filters">Clear filter</button>
                    ) : null}
                    
                {/* <Link to={genSearchParams( "type", "simple" )} className="van-type simple">Simple</Link>
                <Link to={genSearchParams( "type", "luxury" )} className="van-type luxury">Luxury</Link>
                <Link to={genSearchParams( "type", "rugged" )} className="van-type rugged">Rugged</Link>
                <Link to={genSearchParams( "type", null )}>Clear filter</Link> */}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
        </div>
        </section>
    )
}
