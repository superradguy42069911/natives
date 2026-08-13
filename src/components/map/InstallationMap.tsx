import { useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import type { Installation } from "../../data/installations";
import { ICONS, categoryFor } from "../../data/installationCategories";

const LA_CENTER: [number, number] = [34.105, -118.225];

function markerIcon(type: string) {
  const cat = categoryFor(type);
  const Icon = ICONS[cat.icon];
  const html = `<div style="background:${cat.color};width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 4px rgba(0,0,0,0.35);border:2px solid #fff;">
      <div style="width:15px;height:15px;">${renderToStaticMarkup(<Icon size={15} />)}</div>
    </div>`;
  return L.divIcon({ className: "", html, iconSize: [30, 30], iconAnchor: [15, 15] });
}

interface FlyToProps {
  target: [number, number] | null;
}

function FlyTo({ target }: FlyToProps) {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo(target, 15, { duration: 0.6 });
    }
  }, [map, target]);
  return null;
}

interface InstallationMapProps {
  installations: Installation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function InstallationMap({ installations, selectedId, onSelect }: InstallationMapProps) {
  const selected = installations.find((inst) => inst.id === selectedId);
  const flyTarget = useRef<[number, number] | null>(null);
  flyTarget.current = selected ? [selected.location.lat, selected.location.lng] : null;

  return (
    <MapContainer
      center={LA_CENTER}
      zoom={12}
      scrollWheelZoom
      className="map-page__map"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        maxZoom={19}
      />
      <FlyTo target={selectedId ? flyTarget.current : null} />
      {installations.map((inst) => (
        <Marker
          key={inst.id}
          position={[inst.location.lat, inst.location.lng]}
          icon={markerIcon(inst.type)}
          eventHandlers={{ click: () => onSelect(inst.id) }}
        />
      ))}
    </MapContainer>
  );
}
