import React, { useState } from "react";
import emojiData from './json/emojis.json'; // Chemin relatif vers le fichier JSON

export default function InputSearch({ setFilteredEmojis }) {
    const [newEmoji, setNewEmoji] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setNewEmoji(value);

        if (value) {
            const filtered = emojiData.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredEmojis(filtered);
        } else {
            setFilteredEmojis(emojiData); // Afficher tous les emojis si l'input est vide
        }
    };

    return (
        <div className="mb-4">
            <input 
                type="text" 
                value={newEmoji} 
                onChange={handleInputChange} 
                placeholder="Enter an emoji..." 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
