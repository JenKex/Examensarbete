import React from 'react'
import './HittaHit.css'
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
// import { MapCameraChangedEvent } from '@vis.gl/react-google-maps/src/components';

export function HittaHit() {
    const key = process.env.REACT_APP_API_KEY

    return (
        <>
        {key === undefined ?
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1791.5705957450073!2d11.900673948594592!3d57.72413122284431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8bc27d4d7ead%3A0x7a3ec2fb1e99f71!2s150g%20Burgers%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1740491667484!5m2!1sen!2sse" width="95%" height="95%" style={{border:0,}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> :
        <APIProvider apiKey={`${key}`} onLoad={() => console.log('Maps API has loaded.')}>
                <div className="description-blurb">
                    <p>Vi ligger vid <b>Långströmsgatan 5C</b>. Närmaste busshållplats är Skeppsbyggaregatan,
                        men Eketrägatan ligger också inom promenadavstånd.</p>
                </div>
            <div className="map-display">
                <Map
                mapId="150g_Gothenburg_MAP_ID"
                defaultZoom={17}
                defaultCenter={{lat: 57.72410146978589, lng: 11.90151255513456}}
                disableDefaultUI="true">
                    <AdvancedMarker position={{lat: 57.724039, lng: 11.90149}}>
                        <Pin/>
                    </AdvancedMarker>

               </Map>

            </div>
        </APIProvider>
        }
        </>
    )
}