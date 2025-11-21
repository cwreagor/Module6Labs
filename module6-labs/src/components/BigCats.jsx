import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const initialCats = [
  { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/250px-Male_cheetah_facing_left_in_South_Africa.jpg" },
  { id: 2, name: "Cougar", latinName: "Puma concolor", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/250px-Mountain_Lion_in_Glacier_National_Park.jpg" },
  { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/330px-Standing_jaguar.jpg" },
  { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/250px-African_leopard_male_%28cropped%29.jpg" },
  { id: 5, name: "Lion", latinName: "Panthera leo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/250px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" },
  { id: 6, name: "Snow Leopard", latinName: "Panthera uncia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/250px-Irbis4.JPG" },
  { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg/500px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg" },
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  const addCat = (newCat) => {
    setCats([...cats, newCat]);
  };

  const deleteCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  return (
    <div>
      <h1>Big Cats</h1>

      <AddCatForm onAddCat={addCat} />

      {cats.map((cat) => (
        <SingleCat
          key={cat.id}
          id={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
          onDelete={deleteCat}
        />
      ))}
    </div>
  );
}

export default BigCats;
