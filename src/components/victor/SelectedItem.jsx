import React from 'react'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom';

export const SelectedItem = () => {

    const itemsData = data;
    console.log(itemsData);

    const { itemName } = useParams();
    console.log(itemName);

    const itemData = itemsData.map(arr => {arr.find(item => item.nom === itemName)});
    console.log(itemData);
  return (
    <div>
        <h1>TEST</h1>
    </div>
  )
}
