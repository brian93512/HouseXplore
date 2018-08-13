import React from 'react';
import PropTypes from 'prop-types';
import {
	MultiDropdownList,
	SingleDropdownRange,
	SingleDataList,
	RangeSlider,
	MultiList,
} from '@appbaseio/reactivesearch';

const SearchFilters = ({ currentTopics, setTopics, visible }) => (
	<div className={`my_flex my_column my_filters-container ${!visible ? 'hidden' : ''}`}>
		{/* <div className="child m10">
			<SingleDataList
				componentId="popularity"
				dataField="popularity.raw"
				placeholder="Select Popularity"
				title="Popularity"
				filterLabel="popularity"
				data = {
					[{ label: 'High', value: 'High' },
					 { label: 'Medium', value: 'Medium' },
					 { label: 'Low', value: 'Low' },
				]}
			/>
		</div>
		*/}

		{/*<div className="child m10">
			<SingleDropdownRange
				componentId="pushed"
				dataField="pushed"
				placeholder="Repo last active"
				title="Last Active"
				filterLabel="Last Active"
				data={[
					{ start: 'now-1M', end: 'now', label: 'Last 30 days' },
					{ start: 'now-6M', end: 'now', label: 'Last 6 months' },
					{ start: 'now-1y', end: 'now', label: 'Last year' },
				]}
			/>
		</div>
		
		<div className="child m10">
			<RangeSlider
				componentId="stars"
				title="Repo Stars"
				dataField="stars"
				range={{ start: 0, end: 300000 }}
				showHistogram={false}
				rangeLabels={{
					start: '0 Stars',
					end: '300K Stars',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div> */}
		<div className="child m10">
			<RangeSlider
				componentId="price"
				title="Price"
				dataField="DisplayPrice"
				range={{ start: 0, end: 89000 }}
				showHistogram={false}
				rangeLabels={{
					start: '0',
					end: '89K',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>

		<div className="child m10">
			<RangeSlider
				componentId="density"
				title="Density"
				dataField="Density"
				range={{ start: 0, end: 50050 }}
				showHistogram={false}
				rangeLabels={{
					start: '0 /sq. m',
					end: '50K /sq. m',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>
		<div className="child m10">
			<RangeSlider
				componentId="wealthy"
				title="Wealth"
				dataField="Wealthy"
				range={{ start: 6000, end: 120000 }}
				showHistogram={false}
				rangeLabels={{
					start: '6K $US',
					end: '120K $US',
				}}
				innerClass={{
					label: 'range-label',
				}}
			/>
		</div>
		<div className="child m10">
			<MultiList
              componentId="cityFilter"
              dataField="city"
              title="City"
              size={1000}
              showCheckbox={false}
              // className="authors"
              innerClass={{
                "list": "author-list"
              }}
              placeholder="Search by city"
              filterLabel="City"
            />
		</div>
		<div className="child m10">
			<MultiList
              componentId="zipcode"
              dataField="zipcode"
              title="Zipcode"
              size={1000}
              showCheckbox={false}
              innerClass={{
                "list": "author-list"
              }}
              placeholder="Search by zip code"
              filterLabel="Zipcode"
            />
		</div>
	</div>
);

SearchFilters.propTypes = {
	currentTopics: PropTypes.arrayOf(PropTypes.string),
	setTopics: PropTypes.func,
	visible: PropTypes.bool,
};

export default SearchFilters;