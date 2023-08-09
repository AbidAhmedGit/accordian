import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/searchBox/searchBox.component';
import CardList from '../../components/cardList/cardList.component';
import './homePage.css';
import dashboards from '../../models/dashboards';
import { Tabs, Box, Tab } from '@mui/material';
import CustomTabPanel from '../../components/CustomPanel.component';
import FolderList from '../../components/FolderList/FolderList.component';
import ab_documents from '../../models/ab_documents';
import insight_documents from '../../models/insight_documents';


const HomePage = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('Products Insight');
  const [boards, setBoards] = useState(dashboards);
  const [filteredBoards, setFilteredBoards] = useState(boards);
  const [tabValue, setTabValue] = useState(0);

  var metricsFilter = (monster) => monster.metr ? monster.metr.toLocaleLowerCase().includes(searchField) : '';

  useEffect(() => {
    const newFilteredMonsters = boards.filter((monster) => {
      return monster.title.toLocaleLowerCase().includes(searchField) || monster.author.toLocaleLowerCase().includes(searchField) || monster.Tags.toLocaleLowerCase().includes(searchField) || metricsFilter(monster);
    });
    setFilteredBoards(newFilteredMonsters);
  }, [boards, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const handleTabChange = (event, newValue) => {
    console.log(newValue)
    setTabValue(newValue)
  }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Dashboards" />
          <Tab label="A/B test reports" />
          <Tab label="Insights and measurement studies" />

        </Tabs>
      </Box>
      <CustomTabPanel value={tabValue} index={0}>
        <br />
        <h2>Dashboards</h2>
        <div className='cl'>
          <SearchBox
            className="monsters-search-box"
            onChangeHandler={onSearchChange}
            placeholder="search dashboards by title, author, tags or metrics"
          />
          <br />
          <CardList boards={filteredBoards} />
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={tabValue} index={1}>
        <br />
        <h2>A/B test reports</h2>
        <div>
          <FolderList placeholder={"Search A/B test reports by title"} documents={ab_documents} />
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={tabValue} index={2}>
        <br />
        <h2>Insights and measurement studies</h2>
        <div>
          <FolderList placeholder={"Search Insights and measurement studies by title"} documents={insight_documents} />
        </div>
      </CustomTabPanel>


    </div>

  );
}

export default HomePage;