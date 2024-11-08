import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Card({ name, lastName, numberPhone }) {
    return (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {lastName}
                </Typography>
                <Typography variant="body2">
                    {numberPhone}                                       
                </Typography>
            </CardContent>
        </React.Fragment>
    );
}