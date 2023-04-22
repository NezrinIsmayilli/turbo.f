import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation} from 'react-router-dom';
import { getCar, addWishList, deleteWishList } from '../store/actions';
import {AiOutlineHeart, AiFillHeart, AiFillClockCircle} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi'
import {MdLocationOn} from 'react-icons/md'

const CarDetails = () => {

    const car = useSelector(state => state.car);
    const wishList = useSelector(state => state.wishList);

    const dispatch = useDispatch();
    const params = useParams();

    const id = params.id;
    const location = useLocation();
    const pathname = location.pathname;
    const category = pathname.substring(
        1,
        pathname.indexOf('/', pathname.indexOf('/') + 1)
    );

    useEffect(() => {
        dispatch(getCar(id,category));
    }, [id, dispatch, category]);

    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });

  const inWishList =
      wishList.filter(m => m === car.id).length > 0 ? true : false;

  const OnHandleClick = id => {
      inWishList
          ? dispatch(deleteWishList(id)) 
          : dispatch(addWishList(id))
  };

  return (
    <div className='container'>
        <div className='cars'>
            <div className='title'>
                <h1>{car.name}</h1>
                <div>
                    <div className='wish' onClick={() =>OnHandleClick(car.id)}>
                        {inWishList ? 
                            <span> 
                                <p className='inwish'>Seçilmişlərdədir</p>
                                <AiFillHeart className='inwish'/>
                            </span> 
                                : 
                            <span>
                                <p className='addwish'>Seçilmişlərdə saxla</p> 
                                <AiOutlineHeart className='addwish'/>
                            </span>
                        }
                    </div>
                </div>
            </div>
            <div className='main row'>
                <div className='col-10 col-lg-7'>
                    <img src={car.img} alt="err"/>
                    <div className='details'>
                        <div>
                            <p className='txt'>Buraxılış</p>
                            <p>{car.attributes}</p>
                        </div>
                        <div>
                            <p className='txt'>Yeniləndi</p>
                            <p>{car.datetime}</p>
                        </div>
                    </div>
                </div>
                <div className='col-10 col-lg-5 text'>
                    <p className='price'>{car.price} $</p>
                    <div className='number'>
                       <p><FiPhoneCall className='me-3'/>  (050) 770-33-44</p>
                    </div>
                    <p className='pay'>
                        30% ilkin ödəniş etməklə, 36 ayadək MANAT ilə sərfəli daxili kredit! 2 saat ərzində 
                        rəsmiləşdirmə ilə avtomobil alıcıya təhvil verilir.
                    </p>
                    <div className='end'>
                        <p><AiFillClockCircle className='icon'/> Hər gün: 09:00-18:00</p>
                        <p><MdLocationOn className='icon'/> Bakı ş., Xətai r., Babək pr., 21</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CarDetails