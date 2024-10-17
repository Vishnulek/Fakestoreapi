import React, { useState } from 'react'
import Navbar from './Navbar'

const Products = () => {
    const [productData, changeProductData] = useState(
        [
            {
                "name": "Laptop", "imageURL": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT16_N6i6LXOijoZTdBoJ0Hu2Am1cIJrdYY_85QND4vErOlizqt0DNn2rJJOur8l61v7eEQzEsC1kujglYOfSaaqy31MmktJY5rg0uOw7EkMMzxDau_2so&usqp=CAE", "price": 9870, "rating": 3.9, "description": "Your perfect pack for everyday use and walks in the forest", "category": "Laptop"
            },
            {
                "name": "Mens Casual Premium Slim Fit T-Shirts", "imageURL": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX3jcVvYrDovcR-ovM_XIgP4-wuP-udj2xDZ4h3dmM_qK4XSkZkRxE66rpE_oWTMitl2nPUZ7UQXu59Y7ZvxDFV5xfk8aMHOUP2EXfZfM&usqp=CAE", "price": 9870, "rating": 4.1, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing", "category": "Men's clothing"
            },
            {
                "name": "Mens Cotton Jacket", "imageURL": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnAZWofpHRXFQyKoMc9QrX7JHJz6_PaABpAjiOHS2Sz8kqx_h1t8gqHZiv2WuBvwt1C-OjBnHKehP7YPzbWMkQKoa0ehvYLTisOHPsYVRp&usqp=CAE", "price": 5330, "rating": 5.9, "description": "jackets for Spring/Autumn/Winter, suitable for many occasions", "category": "Men's clothing"
            },
            {
                "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "imageURL": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRXwQzVyKNgHba3tYOYxtYV7h1Fr3ykr1eo7kDQuXzFswQtvrxtRNRwAx03UD3npM4Gcv8bAjayTJ1d-VSjr9383CcialQIHQk6V3AlACqUhfJGtAiTifrYx0&usqp=CAE", "price": 695, "rating": 4.6, "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl", "category": "Men's clothing"
            },
            {
                "name": "Solid Gold Petite Micropave", "imageURL": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpgJscszyxyfvQrgr7FchZvo-fCK-DtLHWnM5WNouexIri_w1_8uJswaNMQe5EL58jL_pXKW5-V98ClXdCJecaQmshvGcQuYQ4gsyyD1a_P8rld7wnY7TdVxY&usqp=CAE", "price": 168, "rating": 3.9, "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States", "category": "jewelery"
            },
            {
                "name": "White Gold Plated princesses", "imageURL": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREk1y629Qk0RWYeZGd-WPlBoWbKuHq8Hc7kpRylBkOzVf8pg2jQ02PD2YZcbmOgzt7seEsC4nkXrNiVnwXs9NjOxDERrSdhxB5kT8QMR0&usqp=CAE", "price": 9999, "rating": 9.9, "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her", "category": "jewelery"
            },
            {
                "name": "Pierced Owl Rose Gold Plated Stainless Steel double", "imageURL": "https://m.media-amazon.com/images/I/41G5WqMiewL._AC_.jpg", "price": 1096, "rating": 1.9, "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless", "category": "jewelery"
            },
            {
                "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ", "imageURL": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQCjsuG71wWz9hnyVeClrb5M40qyws98pCxvSoGBVSA78BDp9vtV4UM0-sdB63imyHR2dY16fxb4MehDMtG9_k_R4rRGkNSk4tUbGYAubs2prbTLr2_Lum_dw&usqp=CAE", "price": 64, "rating": 3.3, "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating ", "category": "electronics"
            },
            {
                "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 gb/s", "imageURL": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStJnI_YoAH_qzitNS2YM5urIBJM8y2oqLBqf0I5OBiY13YmKna1mFUwEGi0F-eIxwaiMVXX0t1Iq78i9X1EO8Q8yojVRsFfNtOmg_7xM1bkiDhfrjze15F&usqp=CAE", "price": 109, "rating": 2.9, "description": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStJnI_YoAH_qzitNS2YM5urIBJM8y2oqLBqf0I5OBiY13YmKna1mFUwEGi0F-eIxwaiMVXX0t1Iq78i9X1EO8Q8yojVRsFfNtOmg_7xM1bkiDhfrjze15F&usqp=CAEtests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)", "category": "electronics"
            },
            {
                "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "imageURL": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgYgT4kjUaUyzlSOHAm7cyImxrwJFL68bIDB_2CjyhV0LtPuHF_o9cv7siBGteJ9904HtvVxVlxj0s7xkxBs3ZV2jO87QfITaW5mY2Ukj9_74_RxLvC5qc&usqp=CAE", "price": 109, "rating": 4.8, "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability", "category": "electronics"
            }
            
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                            {productData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src={value.imageURL} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.description}</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{value.price}</li>
                                                <li class="list-group-item">{value.rating}</li>
                                                <li class="list-group-item">{value.category}</li>
                                            </ul>

                                        </div>




                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
