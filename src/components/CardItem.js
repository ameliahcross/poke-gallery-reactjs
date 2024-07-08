import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import '../styles/CardItem.css';
import { useState, useEffect } from 'react';

function CardItem() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchPokemonData = async () => {

      try {
        // Obtiene la lista inicial de Pokémones
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        
        // Arreglo para almacenar los resultados
        const results = [];
        
        // Itera sobre los resultados y obtener los detalles de cada Pokémon
        for (const pokemon of data.results) {
          const res = await fetch(pokemon.url);
          const pokemonDetails = await res.json();
          results.push(pokemonDetails);
        }
        
        // Establecer los datos en el estado
        setData(results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    
    fetchPokemonData();
  },  []);

  const typeOfPokemons = {
    fire: "danger",
    water: "info",
    grass: "success",
    electric: "warning",
    poison: "secondary",
    normal: "primary",
    flying: "light",

  };

  const getTypeColor = (type) => {
    return typeOfPokemons[type] || "gray";
    
  }

  const types = ["grass", "water", "fire", "poison","ghost", "normal","steel" ,"bug", "ground", "fairy", "fighting", "psychic", "rock", "poison", "ice", "dragon"];
  const badgeTextColor = {};
  
  types.forEach(type => {
    if (type === "ground") {
      badgeTextColor[type] = "brown";
    } else if (type === "fairy") {
      badgeTextColor[type] = "pink"; 
    } else if (type === "bug") {
      badgeTextColor[type] = "insect"; 
    } else if (type === "ice") {
      badgeTextColor[type] = "cold"; 
    } else if (type === "fighting") {
      badgeTextColor[type] = "orange"; 
    } else if (type === "psychic") {
      badgeTextColor[type] = "purple"; 
    } else if (type === "rock") {
      badgeTextColor[type] = "dark-grey"; 
    } else if (type === "ghost") {
      badgeTextColor[type] = "clear"; 
    }  else if (type === "steel") {
      badgeTextColor[type] = "iron"; 
    }  else if (type === "dragon") {
      badgeTextColor[type] = "dragon"; 
    }  else if (type === "poison") {
      badgeTextColor[type] = "magenta"; 
    } else (
      badgeTextColor[type] = "text-light"
    )
  });

  const getTextColor = (type) => {
    return badgeTextColor[type] || "text-muted";
  }

  return (
    <Row xs={1} sm={3} md={4} className="g-2">
      {data.map((pokemon, index) => (
          <Col key={pokemon.name}>
          <Card className='card item'>
            <Card.Img variant="top" className="mt-3 card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`}/>
            <Card.Body className="card-body">
              <Card.Title className="card-title">{pokemon.name.toUpperCase()}</Card.Title>
              <Card.Text className="card-text">
              {pokemon.types.map((typeInfo, index) => (
                  <Badge 
                    pill bg={getTypeColor(typeInfo.type.name)}
                    key={index}
                    className={`me-2 ${getTextColor(typeInfo.type.name)}`}>
                    {typeInfo.type.name}
                 </Badge>
              ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
    </Row>
  );
}

export default CardItem;
