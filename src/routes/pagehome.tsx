import { createFileRoute } from '@tanstack/react-router';
import React from 'react'
import { Nuevo } from '../components/PageHome';

export const Route = createFileRoute('/pagehome')({
    component: PageHome,
})

function PageHome() {
    return (
        <>
            <h1>soy la pagina home</h1>
            <Nuevo />
        </>
    )
}