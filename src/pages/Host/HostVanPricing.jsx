import { useOutletContext } from "react-router-dom"


export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
      <h4 className="host-van-price">${currentVan.price}<span>/day</span></h4>

  )
}