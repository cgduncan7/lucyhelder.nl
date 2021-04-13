import * as React from 'react';



export default class Home extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className={'home'}>
        <h1>Lucy Helder</h1>
        <div className={'separator'}/>
        <h4>
          docent Nederlands -
          taal liefhebber -
          Amsterdammer
        </h4>
        <div className={'separator'}/>
        <h5>Over mij</h5>
        <p>
        Sinds ik een aantal jaar geleden ben afgestudeerd in Nederlandse taal en cultuur aan de Universiteit van Amsterdam, geef ik Nederlandse les aan expats, groepen, in-company bij bedrijven in Amsterdam en af en toe een privéles. Mijn vrije tijd besteed ik het liefst aan het leren van nieuwe talen (of eigenlijk vooral aan het oefenen van mijn Spaans) en het organiseren van taalcafés.
        </p>
      </div>
    )
  }
}