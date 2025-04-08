// app/components/LocationFinderServer.tsx
export default async function LocationFinderServer() {
  const response = await fetch("https://geolocation-db.com/json/", { 
    cache: "no-store" 
  });
  const locationInfo = await response.json();
  
  return (
    <h1>Hello from {locationInfo.city || "my location"} (Server Component)</h1>
  );
}