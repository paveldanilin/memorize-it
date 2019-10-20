import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../container';

const PhrasalCard = ({ image, title, link }) => {
  return (
      <div key={ title } className="card bg-info">
          <div className="card-body text-center">
              <Link className="card-text display-2 text-white" to={ link }> { title } </Link>
          </div>
      </div>
  );
};

const PhrasalGrid = ({}) => {

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const items = await Container.PhrasalVerbsService.list();
        setItems(items);
    };

    // On init
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="card-columns">
            { items.map((item) => PhrasalCard({ image: item.image, title: item.title, link: item.link }) ) }
        </div>
    );
};

export default PhrasalGrid;
