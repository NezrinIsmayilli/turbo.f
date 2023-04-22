import React from 'react'
import {addWishList,deleteWishList} from '../store/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Box = ({cars, category}) => {
   
    const dispatch = useDispatch();
    const wishList = useSelector(state => state.wishList);
    useEffect(() => {
      localStorage.setItem('wishList', JSON.stringify(wishList));
  });
//some
    const inWishList =
    wishList.filter(m => m === cars.id).length > 0 ? true : false;

const onHandleClick = id => {
    inWishList
        ? dispatch(deleteWishList(id))
        : dispatch(addWishList(id))
};

  return (
    <div className='col-10 col-md-5 col-lg-3 carboxs'>
       <div className='carbox'>
       <div className='extra'>
                <p onClick={() => onHandleClick(cars.id)}>
                  {inWishList ?  <AiFillHeart/>  :<AiOutlineHeart/>}
                </p>
            </div>
            <Link to={`/${category}/car/${cars.id}`} className='link'>
          <div className='top'>
            <div className='img'>
              <img src={cars.img} alt="err"/>
            </div>
          </div>
          <div className='text'>
            <p className='price'>{cars.price} $</p>
            <p className='name'>{cars.name}</p>
            <p className='attributes'>{cars.attributes}</p>
            <p className='datetime'>{cars.datetime}</p>
          </div>
          </Link>
        </div>

    </div>

  )
}

export default Box