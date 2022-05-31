
import React from 'react';
import Admin from './component/Admin';
import News from './component/News';

const routes = [
    {
        path:"/",
        name:"NEWs",
        component:<News></News>
    },
    {
        path:"/Admin",
        name:"TRANG ADMIN",
        component:  <Admin></Admin>
    }
];
export default routes;