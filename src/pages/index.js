import React, { useState } from 'react';
import { query } from '../client';
import { useQuery } from '@apollo/client';

import Layout from '../components/Layout';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

import layoutStyles from '../components/Layout/layout.module.scss';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Layout>
      <SearchBar onSearch={(val) => setSearchInput(val)} />
      <div className={layoutStyles.cards}>
        {
          !searchInput
            ? data.countries.map(({ name, capital, flag }) => (
              <CountryCard name={name} capital={capital} flag={flag} />
            ))
            : data.countries.filter(country => country.name.toLowerCase().includes(searchInput)).map(({ name, capital, flag }) => (
              <CountryCard name={name} capital={capital} flag={flag} />
            ))
        }
      </div>
    </Layout>
  )
}

export default HomePage