import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"

function Modal() {
    const [modal, setModal] = useState(true)
    const [image, setImage] = useState([])

    let { id } = useParams();
    useEffect(() => {
        fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/"+ id)
        .then((res)=>res.json())
        .then((data)=>setImage(data))
      }, [])
     
    
      function handleModal() {
        setModal(!modal)
      }
    function closeModal(){
setModal(!modal)
    }
  return (
    <>
   
    
<div className='modal'><div className='openModal'>
    <div className='closeModal' onClick={closeModal}>X</div>

   <div className='image'><img src="https://cdn.media.amplience.net/s/scvl/119059_248749_SET/1?fmt=auto&$webPdpProduct$" /></div>
    <div className='detail'>
        <div className='category'>Lightweight Jacket</div>
        <div className='price'>$58.79</div>
        <p className='about'>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
        <div className='size'>Size:</div>
        <div className='color'>Color:</div>
        <div className='basket'>
            <div className='count'><button>-</button><span></span>0<button>+</button></div>
            <button className='addCart'>Add to Cart</button>
        </div>
    </div>
       
</div>
</div>
       
    </>
  )
}

export default Modal