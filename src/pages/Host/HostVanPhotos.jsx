import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <section>
      <img alt={currentVan.name} src={currentVan.imageUrl} className="host-van-detail-image" />
    </section>
  )
}