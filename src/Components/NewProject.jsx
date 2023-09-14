import React from 'react';

const NewProject = ({newTeam}) => {
    const {name}=newTeam
    return (
        <div>
            <p className=' text-left'>{name}</p>
        </div>
    );
};

export default NewProject;