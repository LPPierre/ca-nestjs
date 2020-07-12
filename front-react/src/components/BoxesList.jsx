import React from 'react';
import { useParams } from 'react-router-dom';

const BoxesList = (trainer) => {
    const { trainerId } = useParams();

    return (
        <div className="BoxesList">
            {/* TODO BUTTON Back to Trainers list */}
            {/* TODO FORM Add a creature */}
            <div className="boxPreview">
                {/* TODO Show box type(s) */}
            </div>
            <button>Afficher le contenu</button>
        </div>
    );
};

export default BoxesList;
