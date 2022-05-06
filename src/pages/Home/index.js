import React from 'react'
import SearchBar from '../../features/SearchBar'
import FilterPanel from '../../features/FilterPanel'
import List from '../../features/List'

const Home = () => {
	return (
		<div>
			<SearchBar />
			<FilterPanel />
			<List />
		</div>

	)
}

export default Home