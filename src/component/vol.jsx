import React from "react";

class Vol extends React.Component {
  constructor(props) {
    super(props);

    //liaison des modules avecs mes "this"
  }

  render() {
      


    return (
      <div className="vol">

        <div className="flightList container">
          <h1 className=" choosehead h1 text-center">
            Réservation de billets Afrijet
          </h1>
          <h3 className=" choosehead text-center">
            Choisissez l'un des vols suivants :
          </h3>

          <div className="row flightHeader">
            <div className="col-sm-2">
              <h4 className="text-center">id_Reservation</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">id_Vol</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">id_Utilisateur</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">destination_vol</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">type_classe</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">date_depart</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">heure_depart</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">nbres_places_reserves</h4>
            </div>
            <div className="col-sm-2">
              <h4 className="text-center">Prix(CFA)</h4>
            </div>
          </div>
        </div>

        <div className="flightsMain">
          <div className="allFlights">
            <div className="row flight 4563" id="4563">
              <div className="col-sm-2">
                <h5 className="text-center srno flightNo1">1</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center flno flightNo1">1</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center flnm flightNo1">1</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center flsrc flightNo1">Franceville</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center fldst flightNo1">affaire</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center flprc flightNo1">30/09/2022</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center flprc flightNo1">11h</h5>
              </div>
              <div className="col-sm-2">
                <h5 className="text-center flprc flightNo1">4</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row flight 8205" id="8205">
          <div className="col-sm-2">
            <h5 className="text-center srno flightNo2"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flno flightNo2"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flnm flightNo2"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flsrc flightNo2"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center fldst flightNo2"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flprc flightNo2"></h5>
          </div>
        </div>

        <div className="row flight 5455" id="5455">
          <div className="col-sm-2">
            <h5 className="text-center srno flightNo3"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flno flightNo3"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flnm flightNo3"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flsrc flightNo3"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center fldst flightNo3"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flprc flightNo3"></h5>
          </div>
        </div>


        <div className="row flight 2853" id="2853">
          <div className="col-sm-2">
            <h5 className="text-center srno flightNo4"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flno flightNo4"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flnm flightNo4"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flsrc flightNo4"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center fldst flightNo4"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flprc flightNo4"> </h5>
          </div>
        </div>


        <div className="row flight 2956" id="2956">
          <div className="col-sm-2">
            <h5 className="text-center srno flightNo5"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flno flightNo5"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flnm flightNo5"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flsrc flightNo5"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center fldst flightNo5"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flprc flightNo5"></h5>
          </div>
        </div>


        <div className="row flight 2653" id="2653">
          <div className="col-sm-2">
            <h5 className="text-center flightNo6 srno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo6 flno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo6 flnm"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo6 flsrc"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo6 fldst"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center  flightNo6 flprc"></h5>
          </div>
        </div>


        <div className="row flight 5959" id="5959">
          <div className="col-sm-2">
            <h5 className="text-center  flightNo7 srno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center   flightNo7 flno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center  flightNo7 flnm"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center  flightNo7 flsrc"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center  flightNo7 fldst"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center  flightNo7 flprc"></h5>
          </div>
        </div>


        <div className="row flight 2468" id="2468">
          <div className="col-sm-2">
            <h5 className="text-center  flightNo8 srno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center  flightNo8 flno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo8 flnm"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo8 flsrc"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo8 fldst"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo8 flprc"></h5>
          </div>
        </div>


        <div className="row flight 5012" id="5012">
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 srno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flnm"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flsrc"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 fldst"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flprc"></h5>
          </div>
        </div>


        <div className="row flight 5012" id="1752">
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 srno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flno"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flnm"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flsrc"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 fldst"></h5>
          </div>
          <div className="col-sm-2">
            <h5 className="text-center flightNo9 flprc"></h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Vol;
