
export default function Card({ title, description, imageUrl }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      {/* <img width="100" src={imageUrl}></img> */}
    </div>
  );
}
 