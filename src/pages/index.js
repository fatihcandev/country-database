import React, { useState } from 'react';
import { query } from '../client';
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import RegionFilter from '../components/RegionFilter';
import layoutStyles from '../components/Layout/layout.module.scss';
import Loading from '../components/Loading';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const { loading, error, data } = useQuery(query);

  if (loading) return <Loading />
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
          !searchInput && !regionFilter && data.countries
            .map(({ name, population, region, capital, flag }) => (
              <CountryCard
                key={name}
                name={name}
                population={population}
                region={region}
                capital={capital}
                flag={flag} />
            ))
        }
        {
          searchInput && data.countries
            .filter(country => country.name.toLowerCase().includes(searchInput))
            .map(({ name, population, region, capital, flag }) => (
              <CountryCard
                key={name}
                name={name}
                population={population}
                region={region}
                capital={capital}
                flag={flag} />
            ))
        }
        {
          regionFilter && data.countries
            .filter(country => country.region === regionFilter)
            .map(({ name, population, region, capital, flag }) => (
              <CountryCard
                key={name}
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