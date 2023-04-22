import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHeart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='menu'>
      <div className='container section1'>
        <div className='leftsec'>
          <a href='https://tap.az/'>Tap.az</a>
          <a href='https://bina.az/'>Bina.az</a>
          <a href='https://boss.az/'>Boss.az</a>
        </div>
        <div className='rightsec'>
          <p>Dəstək: (012) 599-08-01; (012) 505-77-55</p>
          <NavLink to="/wishlist" className="wishlist"> 
          <p><AiFillHeart className='icon'/> Seçilmişlər</p>
          </NavLink>
        </div>
       </div>
       <div className='menubar'>
        <div className='container section2'>
        <div>
        <NavLink to="/" className="turbo">TURBO.AZ</NavLink>
                <p>Bütün elanlar</p>
                <p>Avtosalonlar</p>
                <p>Ehtiyat hissələri və aksesuarlar</p>
        </div>
        </div>
       </div>

    </div>
  )
}

export default Navbar