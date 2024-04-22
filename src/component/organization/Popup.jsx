export default function Popup() {
  let popup = document.getElementById("popup");

  function openPopup() {
    popup.classList.add("open-popup");
  }

  return (
    <>
      <div className="container">
        <button type="submit" className="btn" onClick={openPopup}>
          Submit
        </button>

        <div className="popup" id="popup">
          {/* <img src='src/assets/i.png'/> */}

          <h2>Upload img:</h2>
          <label>
            To:<input type="text"></input>
          </label>
          <button type="button">Mint</button>
        </div>
      </div>
    </>
  );
}
