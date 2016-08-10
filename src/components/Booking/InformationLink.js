import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class InformationLink extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
      open: false,
      openSec: false
    }
  }

  handleOpen() {
    this.setState({ open: true });
  }
  handleOpenSec() {
    this.setState({ openSec: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  handleCloseSec() {
    this.setState({ openSec: false });
  }
  render() {
    const actions = [
      <FlatButton
        label="Luk X"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />
    ];
    const actionsSec = [
      <FlatButton
        label="Luk X"
        primary={true}
        onTouchTap={this.handleCloseSec.bind(this)}
      />
    ];

    return(
      <div style={{marginTop: '10px', float: 'right'}} id="scrollAnchor">
        <FlatButton
          label="Freetrailer størrelser?"
          labelStyle={{fontSize: '12px', color: '#808080'}}
          onClick={this.handleOpen.bind(this)}
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <FlatButton
            label="X"
            onClick={this.handleClose.bind(this)}
          />
          <Divider/>
          <h3> Flyttetrailer/lukket Freetrailer </h3> <br />
          <p> Har en totalvægt på 750 kg. og må laste 395 kg.
            Dog må enkelte af freetrailerne hos de partnere markeret med * kun
            laste 275 kg. For alle trailere gælder,
            at de må køres med almindeligt B-kørekort.
          </p>
          <p>Kassens indvendige mål er: </p>
          <p>
            Indvendig længde: 2580 mm <br />
            Indvendig bredde: 1480 mm <br />
            Indvendig højde: 1570 mm
          </p>
          <p>
            Døråbning:  <br />
            Bredde: 1370 mm <br />
            Højde: 1520 mm
          </p>
          <h3> Åbne trailere </h3>
          <h3> Silvans åbne trailere: </h3>
          <p>Indvendig længde: 2550 mm Indvendig bredde: 1445 mm
            Indvendig højde: 350 mm
            Totalvægt på 750 kg Egenvægt 270 kg Må laste op til 480 kg
          </p>
          <h3>Optimeras åbne trailere:</h3>
          <p>Indvendig længde: 3140 mm Indvendig bredde: 1740 mm
            Indvendig højde: 350 mm Optimeras åbne trailere er 2 tons trailere,
            der er nedvejet til 1.300 kg. De vejer 425 kg.
            og må derfor laste 875 kg
          </p>
          <h3>Cykel trailer</h3>
          <p>
            Indvendige mål: 100X60x25 cm. høj Kan blive ca. 75 høj med dækken.dddd
          </p>
          <Divider />
        </Dialog>

        <FlatButton
          label="Gratis Freetrailer?"
          labelStyle={{fontSize: '12px', color: '#808080'}}
          onClick={this.handleOpenSec.bind(this)}
        />
        <Dialog
          actions={actionsSec}
          modal={false}
          open={this.state.openSec}
          onRequestClose={this.handleCloseSec.bind(this)}
          autoScrollBodyContent={true}
        >
          <h2> Gratis Freetrailer </h2>
          <FlatButton
            label="X"
            onClick={this.handleCloseSec.bind(this)}
          />
          <Divider/>
          <h3> Hvad koster det at låne en Freetrailer? </h3> <br />
          <p> Det er gratis at låne en Freetrailer indenfor gratisperioden.
            Det er gratis at låne en lukket Freetrailer fra dagen hvorpå
            traileren afhentes, indtil næste dag 1 time efter butikken åbner,
            med mindre andet fremgår af lejekontrakten.
          </p>
          <p>Den åbne trailer hos Silvan er gratis i tre timer.
            De efterfølgende påbegyndte 3 timers intervaller koster 25,-
          </p>
          <p>
            Ønsker du at beholde Freetraileren længere end gratisperioden,
            koster det 199 DKK pr. påbegyndt døgn.
          </p>
          <p>
            Du kan reservere Freetrailer online. Det koster 25 DKK.
            Du kan også vælge en forsikring til 39 DKK som er en dagsforsikring,
            der også skal betales for alle lejedage inkl. evt. lukkedage.
            Så slipper du for selvrisikoen på op til 2.500 DKK
            hvis du laver en skade. Bemærk at forsikringen ikke dækker løsdele
            som nøgle, lås, låsekasse, kabel og næsehjul.
            (Læs mere under generelle betingelser)
          </p>
          <Divider />
        </Dialog>
      </div>
    );
  }
}
export default InformationLink;
