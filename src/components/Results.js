import React from 'react';
import Popup from "reactjs-popup";
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
const onResultStats = (results, time) => (
  <div className="my_flex justify-end">
    {results} results found in {time}ms
  </div>
);

function handleAmenities(amen) {
  // console.log(amen);
  amen = amen.replace(/;/g, ",");
  // amen = amen.replace(" ","\n")
  return amen;
}

function createLink(website, url) {

  return <a className="my_link" href={url} target="_blank" rel="noopener noreferrer">{website}</a>
}

const onData = (data) => (
  // <div className="result-item" key={data.fullname}>
    // {data.owner}/{data.name}
  // </div>
  
    <div className="my_result-item" key={data.street}>
      <div className="tag">{(data.IsHotPads) ? data.hotrent_min : data.aptrent}</div>
      <img src={(data.hotPhoto) ? data.hotPhoto : "http://crworks.com/partner/vphotos/NoPhoto.png"} 
        onError={(e) => {e.target.src="http://crworks.com/partner/vphotos/NoPhoto.png"}} alt="Avatar" />
      <div className="my_flex justify-center align-center my_result-card-header">
      {/*<div className = "show">*/}
        <div className="my_flex wrap">
          <a className="link" href={(data.IsHotPads) ? data.hoturl : data.apturl} target="_blank" rel="noopener noreferrer">
            {data.apt}
              {/*<div>{data.city}</div>*/}
          </a>
        </div>
        <Popup trigger={<button className="btn btn-outline-success"> See House </button>} modal>
        
          {close => (
            <div className="my_modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header">{data.apt}</div>
              <div className="content">
                <h6>{data.street + " " + data.city + ", " + data.state + ", " + data.zipcode}</h6>
                {" "}
                <h6 className="description">Rent</h6> 
                {(data.IsHotPads && data.IsApartmentsCom) ? [<div>HotPads: {data.hotrent_min}</div>,<div>Apartments.com: {data.aptrent}</div>]: (data.IsHotPads) ? "HotPads: " + data.hotrent_min: "Apartments.com: " + data.aptrent}
                <h6 className="description">Popularity</h6>
                {(data.IsHotPads) ? data.popularity : "see link"}
                <h6 className="description">Amenities</h6>
                {(data.amenities) ? handleAmenities(data.amenities) : "see link"}
                <h6 className="description">Sound Score</h6>
                {(data.IsApartmentsCom) ? data.soundscore : "see link"}
                <h6 className="description">Contacts</h6>
                {(data.IsHotPads && data.IsApartmentsCom) ? [<div>HotPads: {data.hottele}</div>,<div>Apartments.com: {data.apttele}</div>] : (data.IsHotPads) ? "HotPads: " + data.hottele : "Apartments.com: " + data.apttele}
                <h6 className="description">Link</h6>
                {(data.IsHotPads && data.IsApartmentsCom) ? [<div>{createLink("HotPads", data.hoturl)}</div>, <div>{createLink("Apartments.com", data.apturl)}</div>] 
                                                          : (data.IsHotPads) ? createLink("HotPads", data.hoturl) 
                                                                              : createLink("Apartments.com", data.apturl)}

                {/*<a className="link" href={data.hoturl} target="_blank" rel="noopener noreferrer"><div>HotPads</div></a>
                <a className="link" href={data.apturl} target="_blank" rel="noopener noreferrer"><div>Apartments.com</div></a>
                */}
              </div>
              <div className="actions">
                <Popup
                  trigger={<button className="btn btn-info"> Geometric Info </button>}
                  position="top center"
                  closeOnDocumentClick
                >
                  <span>
                    <h6 className="description">Population</h6>
                    {(data.Population) ? data.Population : "NaN"}
                    <h6 className="description">Density (sq. miles)</h6>
                    {(data.Density) ? data.Density : "NaN"}
                    <h6 className="description">Total Wages (Annual)</h6>
                    {(data.TotalWages) ? data.TotalWages : "NaN"}
                    <h6 className="description">Wealth</h6>
                    {(data.Wealthy) ? data.Wealthy : "NaN"}
                    <h6 className="description">House Of Units</h6>
                    {(data.HouseOfUnits) ? data.HouseOfUnits : "NaN"}

                  </span>
                </Popup>
                {/*<button
                  className="button"
                  onClick={() => {
                    console.log('modal closed ')
                    close()
                  }}
                >
                  close
                </button>*/}
            </div>
            </div>
          )}
        </Popup>
      {/*</div>*/}
      </div>
      
      {/* <a href={data._url}>{data._street} / {data._city}</a>
      <img src="https://photonet.hotpads.com/search/listingPhoto/RentCafe/188138/0002_462392812_medium.jpg" className="img-thumbnail" alt="Cinque Terre" />
      */}
    </div>
  
);
const Results = () => (
  <div className="my_result-list">
    <SelectedFilters className="my_m1" />
    <ReactiveList
      componentId="results"
      dataField="zipcode"
      onData={onData}
      onResultStats={onResultStats}
      react={{
        // and: ['language', 'topics', 'pushed', 'created', 'stars', 'forks', 'repo'],
        and: ['repo','density','wealthy','cityFilter','zipcode','price'],
        
      }}
      pagination
      innerClass={{
        list: 'my_result-list-container',
        pagination: 'my_result-list-pagination',
        resultsInfo: 'my_result-list-info',
        poweredBy: 'powered-by',
      }}
      size={6}
    />
  </div>
);
export default Results;