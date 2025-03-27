import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Box, Typography, Button, Container, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import HexagonBackground from '@/Components/HexagonBackground';
import NavBar from '@/Components/NavBar';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({}: PageProps) {

    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:960px)');


    return (
        <>
            <Head title="Welcome" />


                <GuestLayout>

                    <NavBar></NavBar>

                    <HexagonBackground isMobile={isMobile} isTablet={isTablet}>
                    </HexagonBackground>


                </GuestLayout>
            
        </>
    );
}
