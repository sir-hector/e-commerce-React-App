import { Divider, Typography, Button, CircularProgress } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import useStyles from './styles'

const Confirmation = ({order, error}) => {
  const classes = useStyles();
  if(error){
    return (
      <>
       <Typography variant="h5">Error: {error}</Typography>
       <br/>
       <Button component={Link} to='/' variant="outlined" type="button"> Back to home</Button>
      </>
    )
  }

  if(order.customer){
  return (
    <>
    <div>
      <Typography variant="h5">Thank you for your purchase, {order.customer.firstname}, {order.customer.lastname}</Typography>
      <Divider styles={{margin: '20px 0'}}/>
      <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
    </div>
    <br/>
    <Button component={Link} to='/' variant="outlined" type="button"> Back to home</Button>
    </>
  )}else {
    <div className={classes.spinner}>
      <CircularProgress/>
    </div>
  }
}

export default Confirmation