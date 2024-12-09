import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './footer.css'

function footer() {
  return (
    <section className='container footer'>
      <hr />
      <div className="img-footer">
        <img src="https://www.zarla.com/images/zarla-crockery-craze-1x1-2400x2400-20230110-qkk8pj9bj44kkpdjr7b8.png?crop=1:1,smart&width=250&dpr=2" alt="" width={90} />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Catalog</li>
          <li>Shop</li>
          <li>Products</li>
        </ul>
      </div>
      <div className="logo-icons">
        <div className="logo">
          <InstagramIcon />
        </div>
        <div className="logo">
          <WhatsAppIcon />
        </div>
        <div className="logo">
        <PinterestIcon />
        </div>
      </div>

<section className='container'>
<div className="bottom-footer">
        <p>copyright @ 2024 - All Right Reserved</p>
      </div>
</section>

    </section>

  
  )
}

export default footer