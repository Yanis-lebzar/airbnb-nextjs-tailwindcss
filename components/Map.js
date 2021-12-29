import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";

function Map({ height, searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform searchResults into {latitude, longitude}

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  // const images = searchResults.map((result) => {

  // })
  // The lat and long of the center of locations coordinates
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/yanis34/ckxqr6wwd2lf715mxyxgt05xn"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      width="100%"
      height={height}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer animate-bounce text-2xl"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* popup should show on click of a marker */}

          {selectedLocation.long === result.long ? (
            <Popup
              className="z-10"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="flex flex-col z-50">
                <div className="h-40 w-40">
                  <Image
                    alt="location_Image"
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="  h-10 flex items-center justify-center w-full absolute left-0 px-1 bottom-0 bg-black bg-opacity-75 text-white font-semibold text-center text-sm z-50">
                  {result.title}
                </div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
