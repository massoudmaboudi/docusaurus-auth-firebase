import React from 'react';
import { AuthCheck } from '../components/Auth';

export default function Root({ children }) {
    return <AuthCheck children={children} />;
}
