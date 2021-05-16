import { Typography } from '@material-ui/core';
import React from 'react';

type Props = {
    address: string;
    city: string;
    zipCode: string;
}

export default function AdressDetails({address, city, zipCode}: Props) {
    return (
        <Typography>
            Addresse: {address}, {city}, {zipCode}
        </Typography>
    );
}