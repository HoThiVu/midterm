
import React from 'react';
import Admin from './component/Admin';
import F from './component/F';

const routes = [
    {
        path:"/",
        name:"TRANG CHU",
        component:<F></F>
    },
    {
        path:"/Admin",
        name:"TRANG ADMIN",
        component:  <Admin></Admin>
    }
];
export default routes;