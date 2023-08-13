"use client";

import React from "react";
import useGeolocation from "react-hook-geolocation";

const deg2rad = (deg: number) => deg * (Math.PI / 180);

const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const getDistanceText = (distance: number) => {
  if (distance < 100) return distance.toFixed(2);
  else if (distance < 1000) return distance.toFixed(0);
  return Math.floor(distance / 1000) + "k ";
};

type Props = {
  latitude: number;
  longitude: number;
};

export default function DistanceText({ latitude, longitude }: Props) {
  const { latitude: myLatitude, longitude: myLongitude } = useGeolocation();
  const distance = getDistanceFromLatLonInKm(
    latitude,
    longitude,
    myLatitude,
    myLongitude
  );

  return <p className="text-base mx-2">{getDistanceText(distance)}km</p>;
}
