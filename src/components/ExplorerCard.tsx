import React from 'react';

import '../styles/components/explorer-card.css';

interface explorerCardParams {
  path: string;
  label: string;
}

const ExplorerCard = ({ path, label }: explorerCardParams) => {
  return (
    <div className="explorer-card">
      <img src={path} alt=""/>
      <span>{label}</span>
    </div>
  )
};

export default ExplorerCard;