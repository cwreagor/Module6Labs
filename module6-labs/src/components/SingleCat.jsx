function SingleCat({ id, name, latinName, image, onDelete }) {

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    margin: "12px 0",
    borderRadius: "8px",
    background: "#f8f8f8",
  };

  const imgStyle = {
    width: "120px",
    borderRadius: "6px",
    marginBottom: "8px",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />
      <h2>{name}</h2>
      <p>
        <i>{latinName}</i>
      </p>
      <button onClick={() => onDelete(id)} style={{ color: "red"}}>Delete</button>
    </div>
  );
}

export default SingleCat;