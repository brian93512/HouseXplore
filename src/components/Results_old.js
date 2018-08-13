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
      <img src={(data.hotPhoto) ? data.hotPhoto : "http://crworks.com/partner/vphotos/NoPhoto.png"} alt="Avatar" />
      <div className="card_text_center">
        <div className="my_flex justify-center align-center my_result-card-header">
          <a className="link" href={(data.IsHotPads) ? data.hoturl : data.apturl} target="_blank" rel="noopener noreferrer">
            <div className="my_flex wrap">
              <div>{data.apt}</div>
              {/*<div>{data.city}</div>*/}
            </div>
          </a>
          
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
                  {(data.IsHotPads && data.IsApartmentsCom) ? "HotPads: " + data.hotrent_min + "\n" + "Apartment.com: " + data.aptrent: (data.IsHotPads) ? "HotPads: " + data.hotrent_min: "Apartment.com: " + data.aptrent}
                  <h6 className="description">Popularity</h6>
                  {(data.IsHotPads) ? data.popularity : "see link"}
                  <h6 className="description">Amenities</h6>
                  {(data.amenities) ? handleAmenities(data.amenities) : "see link"}
                  <h6 className="description">Sound Score</h6>
                  {(data.IsApartmentsCom) ? data.soundscore : "see link"}
                  <h6 className="description">Contacts</h6>
                  {(data.IsHotPads && data.IsApartmentsCom) ? "HotPads: " + data.hottele + "\n" + "Apartment.com: " + data.apttele : (data.IsHotPads) ? "HotPads: " + data.hottele : "Apartment.com: " + data.apttele}
                  <h6 className="description">Link</h6>
                  {(data.IsHotPads && data.IsApartmentsCom) ? createLink("HotPads", data.hoturl) 
                                                            : (data.IsHotPads) ? createLink("HotPads", data.hoturl) 
                                                                                : createLink("Apartment.com", data.apturl)}

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
                      <h6>Population</h6>
                      {data.Population}
                      <h6>Density (sq. miles)</h6>
                      {data.Density}
                      <h6>Total Wages (Annual)</h6>
                      {data.TotalWages}
                      <h6>Wealthy</h6>
                      {data.Wealthy}
                      <h6>House Of Units</h6>
                      {data.HouseOfUnits}

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
        </div>
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