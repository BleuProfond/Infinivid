import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './video/search_bar';
import VideoList from './video/video_list';
const API_KEY = 'AIzaSyDjrqWh_vwxuTxpZ62RrRDHtpytqr-LKno';

class VideoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'Conan'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  } 
}

export default VideoApp;