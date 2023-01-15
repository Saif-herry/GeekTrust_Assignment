import React from 'react'
import styles from '../Styles/Navbar.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_parent}>
        <div className={styles.nav}>
          <div>TeeRex Store</div>
          <div className={styles.nav1}>
            <div><Link to="/">Products</Link></div>
            <Link to="/cart"><div className={styles.cart_logo}>
              <AiOutlineShoppingCart fontSize={'30px'} />
              <p className={styles.cart_length}>0</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
