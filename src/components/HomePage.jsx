import swanBio from "../images/swanBio.jpeg";

export function HomePage() {
  return (
    <main>
      <h1>Welcome to The Ecommerce Store</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <img src={swanBio} alt="my image" style={{ gridColumn: "1 / 2", width: "100%", height: "auto" }} />
        <div>
          <p>My journey as a potter and devoted interest in...</p>
          {/* Add more content here */}
        </div>
      </div>
    </main>
  );
}
