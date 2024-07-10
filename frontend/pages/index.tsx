import { NextPage } from 'next';
import React from 'react';
import { Filter } from '../components/Filter';
import { ApartmentList } from '../components/ApartmentList';

const HomePage: NextPage = () => (
  <>
    <Filter />
    <ApartmentList />
  </>
);

export default HomePage;
