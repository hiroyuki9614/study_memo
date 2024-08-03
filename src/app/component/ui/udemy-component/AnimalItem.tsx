"use client"

import React from 'react';

interface AnimalItemProps {
  animal: string;
}

const AnimalItem: React.FC<AnimalItemProps> = ({ animal }) => {
  return (
    <li>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  )
}

export default AnimalItem;