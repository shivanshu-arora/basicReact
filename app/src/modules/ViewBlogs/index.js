import React from 'react';

const ViewBlogs = () => (
    <div>ViewBlogs Module</div>
);

export default {
    routeProps: {
        path: '/view',
        component: ViewBlogs
    },
    name: 'ViewBlogs',
}

