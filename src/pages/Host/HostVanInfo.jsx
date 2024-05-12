
import { useOutletContext } from "react-router-dom"
export default function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section>
      <h4>Name: {currentVan.name}</h4>
      <h4>Type: {currentVan.type}</h4>
      <h4>Description: {currentVan.description}</h4>
      <h4>Visibility: public</h4>
    </section>
  )
}