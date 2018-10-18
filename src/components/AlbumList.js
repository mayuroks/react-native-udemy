import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
        // .then(response => console.log(response));
        console.log('componentWillMount');
    }

    // Method to render albums from state
    renderAlbums() {
        return this.state.albums.map(album => 
            // <Text key={album.title}>{album.title}</Text>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {/* <Text>Album List Wow!!</Text> */}
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
