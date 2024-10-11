'use client'
import { GetAllProducts, GetAllProductsById } from '@/(Api)/ProductsApi'
import React, { useEffect, useState } from 'react';
import styles from '../(Styles)/products.module.css';
import Image from 'next/image';
import { Icon } from '@iconify/react';

function Products({ isFilterOpen }) {

    const [products, setProducts] = useState([])
    const [pro, setpro] = useState({})
    const [isModal, setIsModal] = useState(false);

    // const despatch = useDespatch
    const GetProducts = async () => {
        const data = await GetAllProducts()
        if (data || data.data) {
            setProducts(data.data)
        }
    }

    const ProductById = async (id) => {
        const data = await GetAllProductsById(id)
        if (data || data.data) {
            setpro(data.data)
            setIsModal(true);
        }
    }


    useEffect(() => {
        GetProducts()
    }, [])


    return (
        <div className={isFilterOpen ? styles.main : styles.mainCollapse}>
            <div className={styles.gridContainer}>
                {products?.map(({ id, price, title, image, description, category, rating }) => (
                    <div key={id} className={styles.card} onClick={() => ProductById(id)}>
                        <div className={styles.cardImg}>
                            <img
                                src={image}
                                alt='pro'
                            />
                        </div>

                        <div className={styles.infoContainer}>
                            <h4>{title}</h4>

                            <div className={styles.desc}>
                                <h6>{description}</h6>
                                <Icon icon='ph:heart-light' width="24" height="24" className={styles.heartIcon} />
                            </div>

                            <div className={styles.pricing}>
                                <h6>₹{price}</h6>
                                <span>{rating.rate}/5</span>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <span>{category}</span>
                        </div>
                    </div>
                ))}
            </div>

          

        </div>
    )
}

export default Products
