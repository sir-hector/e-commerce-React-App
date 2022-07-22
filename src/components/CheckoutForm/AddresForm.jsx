import React, {useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import CustomTextField from './CustomTextField'
import {commerce} from '../../lib/commerce'

const AddresForm = () => {
    const [shippingCountries, setShippingCountires] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const fetchShippingCountires = async () => {

    }

    const methods = useForm();
    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <CustomTextField required= {true} name='firstName' label='First Name'/>
                        <CustomTextField required= {true} name='lastName' label='Last name'/>
                        <CustomTextField required= {true} name='address1' label='Address'/>
                        <CustomTextField required= {true} name='email' label='Email'/>
                        <CustomTextField required= {true} name='City' label='City'/>
                        <CustomTextField required= {true} name='zip' label='ZIP / Postal Code'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value='' fullWidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select me 
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value='' fullWidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select me 
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value='' fullWidth onChange=''>
                                <MenuItem key='' value=''>
                                    Select me 
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddresForm