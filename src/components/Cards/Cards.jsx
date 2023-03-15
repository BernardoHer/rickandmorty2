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
          onClose ={() => props.onClose(t.id)}
        />
      ))}
    </div>
  );
}
