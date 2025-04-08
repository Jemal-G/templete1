// components/LocationFinderClient.tsx
"use client";
import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [locationInfo, setLocationInfo] = useState<{ city?: string }>({});

  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((data) => setLocationInfo(data));
  }, []);

  return (
    <h1>Hello from {locationInfo.city || "my location"} (Client Component)</h1>
  );
}