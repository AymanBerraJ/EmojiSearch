import React, { useState } from 'react';
import Form from './Form';
import ReactDOM from 'react-dom/client';
import InputSearch from './InputSearch';
import emojiData from './json/emojis.json'; // Importer les emojis

function App() {
  const [filteredEmojis, setFilteredEmojis] = useState(emojiData); // Initialiser avec tous les emojis

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">EmoJi SearCH</h1>
        </header>
        <InputSearch setFilteredEmojis={setFilteredEmojis} />
        <Form filteredEmojis={filteredEmojis} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
