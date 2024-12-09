import React, { useEffect, useState } from 'react'
import ItemData from "../../util/All_product"
import { useParams } from 'react-router-dom'
import RCollection from '../Hero-right-collection/r-collection';
import NotFound from '../SearchItem/NotFound'

function SearchItem() {

    // styling =======
    const styles = {
        "display": "flex",
        "justifyContent": "spaceBetween",
        "flexWrap": "wrap",
        "alignItem": "center"

    }
    const styles1 = {
        "margin": "20px",
    }

    //  search Filter =====
    const { term } = useParams()
    const [filterData, setFilterData] = useState([]);


    useEffect(() => {
        const FilteredData = () => {
            const data = ItemData.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()));
            setFilterData(data)
        }
        FilteredData();

    }, [term])


    return (
        <div>
            <div style={styles}>
                {
                    filterData.length === 0 ?
                        <NotFound />
                        :

                        (filterData.map((val, i) => (
                            <div style={styles1} key={i} >
                                <RCollection id={val.id} name={val.name} image={val.image} sales_price={val.sales_price} old_price={val.old_price} />
                            </div>
                        )))


                }

            </div>
        </div >
    )
}

export default SearchItem