import React from 'react';
import ReactDOM from 'react-dom';
import VCardCreatorDownload from './VCardCreatorDownload'; // Assurez-vous que le chemin d'importation est correct

function App() {
    return (
        <div>
            <VCardCreatorDownload />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
