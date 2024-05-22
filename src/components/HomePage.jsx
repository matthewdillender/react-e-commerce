import swanBio from "../images/swanBio.jpeg";

export function HomePage() {
  return (
    <main>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <img src={swanBio} alt="my image" style={{ gridColumn: "1 / 2", width: "100%", height: "auto" }} />
        <div>
          <p>
            My journey as a potter and devoted interest in helping others has led me to pursue a career in art therapy.
            I offer private lessons to couples and individuals. My pottery can be purchased online and also in person at
            several local venues.{" "}
          </p>
          {/* Add more content here */}
        </div>
      </div>
    </main>
  );
}
