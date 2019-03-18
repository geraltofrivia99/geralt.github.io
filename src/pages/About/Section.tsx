import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './styles.css';

interface Sections {
  title: string;
  description: string;
  index: number;
  func: (value: boolean) => void;
  logo: string;
}

export const Section = React.memo(
  ({ title, description, index, func, logo }: Sections) => {
    const [active, setActive] = useState(false);
    const [dInactive, setDInactive] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setDInactive(false);
      }, 1000);
    });
    const toRollUpElement = () => {
      setActive(true);
      func(true);
    };
    const removeActive = (e: React.FormEvent<HTMLDivElement>) => {
      console.log('remiove');
      e.stopPropagation();
      setActive(false);
      func(false);
    };
    const elClassNames = classNames('el', { 's--active': active });
    const discrClassNames = classNames('el__description', {
      'discription--none': dInactive
    });
    return (
      <div
        className={elClassNames}
        onClick={toRollUpElement}
        onKeyPress={() => console.log('press')}
        role="presentation"
      >
        <div className="el__overflow">
          <div className="el__inner">
            <div className={discrClassNames}>
              <img src={logo} className="description__image" alt="" />
            </div>
            <div className="el__bg" />
            <div className="el__preview-cont">
              <h2 className="el__heading">{title}</h2>
            </div>
            <div className="el__content">
              <div className="el__text">{description}</div>
              <div
                className="el__close-btn"
                onClick={removeActive}
                onKeyPress={() => console.log('press')}
                role="presentation"
              />
            </div>
          </div>
        </div>
        <div className="el__index">
          <div className="el__index-back">{index}</div>
          <div className="el__index-front">
            <div className="el__index-overlay" data-index={index}>
              {index}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
