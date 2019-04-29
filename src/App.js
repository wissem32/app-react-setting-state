import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state={
      valeur:0 ,
      resultat:0
    };
 

  carre1 = () => {
    
 
    this.setState({ valeur: 1  });
    this.setState({ resultat: 1 });
  }

  carre2 = () => {
    this.setState({ valeur: 2  });

    this.setState({ resultat: 4 });
  }

  carre3 = () => {
    this.setState({ valeur: 3  });

    this.setState({ resultat: 9 });
  }
   carre4 = () => {
    this.setState({ valeur: 4  });

    this.setState({ resultat: 16 });
  }
  render() {
    return (
      <div>
         
        <button onClick={() => this.carre1()}>1</button>
        <button onClick={() => this.carre2()}>2</button>
        <button  onClick={() => this.carre3()}>3</button>
        <button  onClick={() => this.carre4()}>4</button>

       <h1>Le resultat de {this.state.valeur} est {this.state.resultat}</h1>

      </div>
    
    );
  }
}



export default App;
