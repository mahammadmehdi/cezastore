import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { WishlistContext } from '../../context/wishlistContext'

function Wishlist() {
//   const {  AddBasket } = useContext(BasketContext)
  const { wishlist,AddWishlist} = useContext(WishlistContext)
//   const { search} = useContext(SearchContext)

  console.log(wishlist);
  return (
    <div className='basketpage'>
    {wishlist.length ? <div className='page'><div className='cards'>

      {wishlist
        .map((x) =>

          <ul className='card'>
            <li className='image'><img src={x.images} /><div className='cardHover'>

              <NavLink to={"/wishlist/"+ x.id}> <i class="fa-regular fa-eye"></i></NavLink>
              <i class="fa-regular fa-heart" onClick={()=>{AddWishlist(x)}}></i>
            </div></li>
            <h2 className='name'>{x.name}</h2>
            <h3 className='cost'>${x.price} <span className='discount'>$35.00</span></h3>
             
         
          </ul>
        )}
        
    </div></div>
      : <h1 className='null'> Wishlistde mehsul yoxdur</h1>}


  </div>
  )
}

export default Wishlist