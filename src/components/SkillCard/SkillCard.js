 import React from 'react';

import './skill-card.css';

export const SkillCard = ({skills}) => {
    return ( 
        <div className="skill-card">
            {skills}
        </div>
    );
}