// app/page.tsx (App Router) or components/App.tsx
import LocationFinderClient from "./components/LocationFinderClient";
import LocationFinderServer from "./components/LocationFinderServer";

export default async function App() {
  const serverComponent = await LocationFinderServer();
  return (
    <main>
      <LocationFinderClient />
      {/* Render the result of the asynchronous component */}
      {serverComponent}
    </main>
  );
}