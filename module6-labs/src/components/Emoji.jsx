import { useState } from "react";

function Emoji() {
    const [mood, setMood] = useState("😃")

    const toggleMood = () => {
        setMood((prev) => (prev === "😃" ? "😢" : "😃"));
    };

    const style = {
        fontSize: "4rem",
        marginBottom: "10px"
    };

return (
    <div>
        <div style={style}>{mood}</div>
        <button onClick={toggleMood}>Change Mood</button>
    </div>
);
}

export default Emoji;