import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineFilter } from 'react-icons/ai'
import styles from '../Styles/Product.module.css'
const Product = () => {
  const [data, setData] = useState([])
  function Featching() {
    try {
      fetch(
        'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json',
      )
        .then((r) => r.json())
        .then((d) => {
          setData(d)
        })
    } catch (e) {
      console.log('Error in Fatching data', e)
    }
  }
  console.log(data)
  useEffect(() => {
    Featching()
  }, [])
  return (
    <div>
      {/* Searching */}
      <div className={styles.SearchBox_div}>
        <div>
          <input
            className={styles.Input_Search}
            type="text"
            placeholder="Search For Products..."
          />
        </div>
        <div className={styles.FiSearch_div}>
          <FiSearch fontSize={'19px'} />
        </div>
        <div className={styles.OutlineFilter_div}>
          <AiOutlineFilter className={styles.OutlineFilter_div1} fontSize={'19px'}/>
        </div>
      </div>

      {/* Crd */}

      <div className={styles.Parent_Container}>
        <div className="SideBar"></div>
        <div className={styles.Product_Crd}>
          {data.map(function (ele) {
            return (
              <>
                <div className={styles.Crd}>
                  <div className={styles.Crd_Img}>
                    <img src={ele.imageURL} alt="" />
                    <p className={styles.Product_Name}>{ele.name}</p>
                  </div>
                  <div className={styles.Crd_info_div}>
                    <div className={styles.Crd_Price}>Rs {ele.price}</div>
                    <div className={styles.Crd_button}>ADD TO CARD</div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
