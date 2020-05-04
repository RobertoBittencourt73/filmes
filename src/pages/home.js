import React, { Component } from 'react'
import './estilo.css'
import  { Link } from 'react-router-dom'

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
           filmes: []
      }
  }
  componentDidMount(){
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'
      fetch(url)
      .then((r)=>r.json())
      .then((json)=> {
          this.setState({filmes: json})
      })
  }
  render(){
      return(
          <div className='container'>
              <div className='filmes'>
                    {this.state.filmes.map((item)=> {
                        return(
                            <article key={item.id}>
                                <strong>{item.nome}</strong>
                                <img src={item.foto} alt='capa'/>
                                <Link to={`/filme/${item.id}`}>Acessar</Link>
                            </article>
                        )  
                    })}
               </div>
          </div>
      )
  }

}

export default App;
