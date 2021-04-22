import React from "react";
import SearchForm from "./SearchForm";
import "./App.css";
import youtube from "../api/youtube";
import VideosList from "./VideosList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
 state = { videos: [], selectedVideo: null };

 componentDidMount() {
  this.onSearchSubmit("رمضان");
 }

 onSearchSubmit = async (term) => {
  const response = await youtube.get("/search", {
   params: {
    q: term,
   },
  });

  this.setState({
   videos: response.data.items,
   selectedVideo: response.data.items[0],
  });
 };

 onVideoSelect = (video) => {
  this.setState({ selectedVideo: video });
 };

 render() {
  return (
   <div className='container'>
    <SearchForm onSearchSubmit={this.onSearchSubmit} />
    <div className='row'>
     <div className='col-md-7 col-12'>
      <VideoDetails selectedVideo={this.state.selectedVideo} />
     </div>
     <div className='col-md-5 col-12'>
      <VideosList
       selectedVideo={this.onVideoSelect}
       videos={this.state.videos}
      />
     </div>
    </div>
   </div>
  );
 }
}

export default App;
