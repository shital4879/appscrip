'use client'
import React, {useState} from 'react'
import styles from '../(Styles)/home.module.css'
import FilterNav from './FilterNav'
import Filter from './Filter'
import Products from './Products'
import Footer from './Footer'

function HomePage() {

  const [isFilter, setIsFilter] = useState(false);

  const toggleFilter = () => {
    setIsFilter((prevState) => !prevState);
  };
  console.log(isFilter)

  return (
    <div className={styles.main}>

      <FilterNav toggleFilter={toggleFilter} isFilter={isFilter}/>

      <div className={styles.filterProducts}>
        <div className={!isFilter ? styles.filter : styles.filterCollapse}>
          <Filter isFilter={isFilter} />
        </div>

        <Products />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
