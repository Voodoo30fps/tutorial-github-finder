import React from 'react';
import { Fragment } from 'react/cjs/react.development';

import Users from '../users/Users';
import Search from '../users/Search';

export const Home = () => (
    <Fragment>
        <Search />
        <Users />
    </Fragment>
);

export default Home;
