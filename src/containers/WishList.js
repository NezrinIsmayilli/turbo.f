import Box from '../components/Box';
import { useSelector } from 'react-redux/es/exports';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WishList = () => {
    const wishList = useSelector(state => state.wishList);
    const [data, setData] = useState([])


    //butun idler
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
        setData([]);
        wishList.map(id=>
            axios.get(`http://localhost:3001/vipcars/${id}`)
            .then(wish=>wish.data)
            .then(wish=>{
                setData((prev)=>[...prev, wish])
            })
            )
        
    },[wishList,setData]);


    return (
        <div className='container'>
            <div className='wishlist'>
                <div className='wish'>
                <div className='title'>
                    <h1>SEÇİLMİŞ ELANLAR</h1>
            </div> 
            {wishList.length === 0 ? (
                <div>
                <div className='back'></div>
                <h1>Bəyəndiyiniz elanları ürək işarəsinə klik edərək seçilmişlərə əlavə edin.</h1>
                </div>
            ) : (
                <div>
                    <div className="row">
                        {data.map(list => (
                                <Box key={list.id} cars={list} category="vipcars" />
                        ))}
                    </div>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};

export default WishList;