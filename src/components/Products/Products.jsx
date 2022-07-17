import React from "react";
import {Grid} from '@material-ui/core'
import Product from "./Product/Product";

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes',pice: '12', image: 'https://external-preview.redd.it/wC7CPcumwob-3zujGiAYBnDUMKvIb1sxDPlSy_5OT6g.jpg?auto=webp&s=dc533b1cdb973c2d646acc64a63ae949c6496741'},
    { id: 2, name: 'Shoes', description: 'Running Shoes',pice: '12', image: ''},
    { id: 3, name: 'Shoes', description: 'Running Shoes',pice: '12', image: ''},
]

const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {
                products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md ={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    </main>
    )
}

export default Products;