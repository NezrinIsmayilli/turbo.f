import React from 'react'
import Cars from '../components/Cars';
import { useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getEndadv, getVipcars, getPremium } from '../store/actions';
import ReactLoading from 'react-loading'


const Home = () => {
  const vipcars = useSelector(state=> state.vipcars);
  const end = useSelector(state=> state.end);
  const premium = useSelector(state=> state.premium);
  

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPremium(page));
      dispatch(getVipcars());
      dispatch(getEndadv());
      setLoading(false)
  },[dispatch,page])

  const load =(()=>{
    setLoading(true);
    setTimeout(()=>setPage(prev=>prev+1),1000)
  })


  console.log(premium.length)
  return (
    <div className="home">
      <Cars cars={vipcars} title="VIP ELANLAR" category="vipcars"/>
      <div className='end'>
        <Cars cars={end} title="SON ELANLAR" category="end"/>
      </div>
        <Cars cars={premium} title="PREMIUM ELANLAR" category="premium" />

    {premium.length <32  ?  
              loading === false ?
              <button onClick={()=>load() }>Daha çox...</button>
              :   <ReactLoading type={'bubbles'} color={'black'} height={'10%'} width={'10%'} /> 
    : ''}
           
    </div>
  );
}

export default Home
