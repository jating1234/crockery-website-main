
import ImgData from '../../util/Slider-Data'
import './slider.css'

function Slider() {
  
    const sliderPlus = () => {
        const bCollection = document.querySelector(".b-collection")
        const imgSec = document.querySelector(".img-sec")
        let width = imgSec.clientWidth
        bCollection.scrollLeft = bCollection.scrollLeft + width;
    }

    const sliderMinus = () => {
        const bCollection = document.querySelector(".b-collection")
        const imgSec = document.querySelector(".img-sec")
        let width = imgSec.clientWidth
        bCollection.scrollLeft = bCollection.scrollLeft - width;

    }


    return (
        <div className="h-section1 paddings">

            <div className="b-section">
                <h1 className='primaryText'>Crockery Set</h1>
                <p className='secondaryText'>Make way for a delightful dining experience with our premium and modern dinnerware, tableware and crockery sets.</p>
            </div>

            <div className="b-collection">
                {
                    ImgData.map((img, i) => (
                        <div className="img-sec" key={i}>
                            <img src={img.image_link} alt="logo" width={200} />
                            <p style={{fontSize:"0.7rem"}}>{img.name}</p>
                        </div>
                    ))
                }

            </div>

            <div className='btn'>
                <button className='btnNext' onClick={sliderPlus}><p>&gt;</p></button>
                <button className='btnPrev' onClick={sliderMinus}><p>&lt;</p></button>
            </div>

        </div>


    )
}

export default Slider