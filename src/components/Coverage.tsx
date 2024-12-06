import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Estilos de Leaflet

const Coverage = () => {
  return (
    <section id="coverage" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-500">Service Coverage</h2>
        <p className="text-xl mb-4">We offer our services in all of Central Florida</p>
        
        {/* Mapa de Central Florida */}
        <MapContainer
          center={[27.9944024, -81.7602544]} // Coordenadas aproximadas de Central Florida
          zoom={8}
          style={{ width: '100%', height: '400px' }}
        >
          {/* Capa de mapa */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marcador en el mapa */}
          <Marker position={[27.9944024, -81.7602544]} icon={new Icon({ iconUrl: '/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34] })}>
            <Popup>
              Central Florida
            </Popup>
          </Marker>
        </MapContainer>

      </div>
    </section>
  );
}

export default Coverage;

  
  