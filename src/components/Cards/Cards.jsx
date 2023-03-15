import Card from "../Card/Card.jsx";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((t) => (
        <Card
          name={t.name}
          species={t.species}
          gender={t.gender}
          image={t.image}
          onClose ={() => window.alert('Emulamos que se cierra la card')}
        />
      ))}
    </div>
  );
}
