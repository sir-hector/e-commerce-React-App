import React from 'react'
import { Container, Topography, Button, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping cart, 
        <Link to ="/" className={classes.link}>start adding some!</Link>
        </Typography>
    );

    if(!cart.line_items) return 'Loading...'

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondardy">Empty Card</Button>
                        <Button className={classes.checkout} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>
            </div>
        </>
    )

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.tittle} variant="h3" gutterBottom>Your shopping cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;
