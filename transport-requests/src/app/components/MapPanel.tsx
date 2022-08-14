import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks'
import { useLeafletContext } from '@react-leaflet/core'
import { getSelectedClaim } from '../reducers/claimsSlice'
import { MapContainer, TileLayer, useMapEvent, useMap } from 'react-leaflet'
import Leaflet, { LatLngExpression } from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-control-geocoder'
import { geocoders, geocoder } from 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'

// Routing control panel
function RoutingControl(points: Leaflet.LatLng[], map: Leaflet.Map): Leaflet.Routing.Control {
    return Leaflet.Routing.control({
        waypoints: points,
        routeWhileDragging: false,
        show: false,
        showAlternatives: false,
        addWaypoints: false,
        fitSelectedRoutes: false,
        collapsible: true,
        geocoder: geocoders.nominatim()
    }).on('routesfound', function(e) {
        // var routes = e.routes;
        // alert('Found ' + routes.length + ' route(s).');
    }).addTo(map);      
}

// Click point map centering
const SetViewOnClick = () => {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: true,
        });
    })

    return null
}

const Map: React.FC = () => {
    const selectedClaim = useAppSelector(getSelectedClaim);
    const map = useMap()
    
    // "Hook", redefining paths to map images
    Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    geocoder({
        collapsed: false
    })

    useEffect(() => {
        if (!map) return;

        //routingControl.spliceWaypoints(0, 2); // remove points
        //map.removeControl(routingControl); // remove routing control
        if (selectedClaim.pointA?.point && selectedClaim.pointB?.point) {
            const routingControl = RoutingControl([
                Leaflet.latLng(selectedClaim.pointA.point as LatLngExpression),
                Leaflet.latLng(selectedClaim.pointB.point as LatLngExpression)
            ], map);
        }

        return undefined
    });

    return null
}

export const MapPanel: React.FC = () => {
    return (
        <MapContainer center={[55.7522, 37.6156]} zoom={13} scrollWheelZoom={true}>
            <Map/>
            <SetViewOnClick />
        </MapContainer>
    )
}
