import React from 'react'
import './HittaHit.css'
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
// import { MapCameraChangedEvent } from '@vis.gl/react-google-maps/src/components';

export function HittaHit() {


    return (
        <APIProvider apiKey='AIzaSyCXfZPhmoBQNkdlWDZ3pMGFzjdvTsPNWPM' onLoad={() => console.log('Maps API has loaded.')}>
                <div className="description-blurb">
                    <p>Vi ligger vid <b>Långströmsgatan 5C</b>. Närmaste busshållplats är Skeppsbyggaregatan,
                        men Eketrägatan ligger också inom promenadavstånd.</p>
                </div>
            <div className="map-display">
                <Map
                mapId="150g_Gothenburg_MAP_ID"
                defaultZoom={16}
                defaultCenter={{lat: 57.72410146978589, lng: 11.90151255513456}}
                disableDefaultUI="true">
                    {/* Slightly off-center; not sure if it's more confusing to have it than not. */}
                    {/* <AdvancedMarker position={{lat: 57.724039, lng: 11.90149}}>
                        <Pin/>
                    </AdvancedMarker> */}

                </Map>
                {/* Iframe solution, in case the embed messes with something. */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.4137985048883!2d11.982975977204864!3d57.709428539616276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff37e849de743%3A0x8e81d7d0a15f7503!2sOdinsplatsen%205%2C%20411%2002%20G%C3%B6teborg%2C%20Sweden!5e0!3m2!1sen!2sin!4v1737459817140!5m2!1sen!2sin"
            width="600" allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"></iframe> */}

            </div>
        </APIProvider>
    )
}