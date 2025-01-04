
function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "5rem",
          backgroundColor: "gray",
          padding:"0px 20px"
        }}
      >
        <div>
          <h1 style={{ fontSize: "40px", color: "white",  }}>Block</h1>
        </div>
        <div>
          <ol style={{
            display: "flex",
            gap: "40px",
            fontSize: "1.2rem",
            listStyle: "none",
            color:"white"
          }}>
            <li>home</li>
            <li>about us</li>
            <li>contect us</li>
          </ol>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
