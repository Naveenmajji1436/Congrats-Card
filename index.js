const element = (
  <div className="bgMain">
    <p className="mainHeading">Congratulations</p>
    <div className="miniContainer">
      <img
        className="image1"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="Institute">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="image2"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
