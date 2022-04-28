import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
const position = [51.505, -0.09];
const DispatcherMap = () => {
  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
      }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
   
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      
    </MapContainer>
  );
};
export default DispatcherMap;
