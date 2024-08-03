import React from 'react';
import AnimalItem from './AnimalItem';

interface AnimalListProps {
	animals: string[];
}

const AnimalList: React.FC<AnimalListProps> = ({ animals }) => {
	if (animals.length === 0 ) {
		return <h3>アニマルが見つからへん。</h3>
	}
	return (
		<ul>
			{animals
				.map((animal) => {
					return (
						<AnimalItem animal={animal} key={animal} />
					);
				})}
		</ul>
	)
}

export default AnimalList;