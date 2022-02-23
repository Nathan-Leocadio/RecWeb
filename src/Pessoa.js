function Pessoa (props){
    return (
        <div className = "cor">
          <h1> Nome da pessoa: {props.nome} </h1>  
          <h2> Idade da pessoa: {props.idade} </h2>
        </div>
    );
}
export default Pessoa;