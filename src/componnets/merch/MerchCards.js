import React from 'react';
import '../cards/Cards.css';
import MerchCardItems from './MerchCardItems';
import merch from '../../images/merch.jpg';
import contact from '../../images/contact.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Intoxicated Sports Report Merch</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/'
            />
            <MerchCardItems
              src={contact}
              text='Beanie'
              label='Contact Us'
              path='/contact'
            />
                       <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/'
            />
                       <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/'
            />
                       <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/'
            />
                       <MerchCardItems
              src={merch}
              text='T-Shirt'
              label='Merchandise'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;