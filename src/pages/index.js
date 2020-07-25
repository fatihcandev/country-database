import React, { useState } from 'react';
import { query } from '../client';
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import RegionFilter from '../components/RegionFilter';
import layoutStyles from '../components/Layout/layout.module.scss';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Layout>
      <Title />
      <div className={layoutStyles.filterSection}>
        <SearchBar onSearch={(input) => setSearchInput(input)} />
        <RegionFilter onRegionSelect={(filter) => setRegionFilter(filter)} />
      </div>
      <div className={layoutStyles.cards}>
        {
          searchInput
            ? data.countries
              .filter(country => country.name.toLowerCase().includes(searchInput))
              .map(({ name, population, region, capital, flag }) => (
                <CountryCard
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flag} />
              ))
            : regionFilter
              ? data.countries
                .filter(country => country.region === regionFilter)
                .map(({ name, population, region, capital, flag }) => (
                  <CountryCard
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    flag={flag} />
                ))
              : data.countries.map(({ name, population, region, capital, flag }) => (
                <CountryCard
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                  flag={flag} />
              ))
        }

      </div>
    </Layout>
  )
}

export default HomePage