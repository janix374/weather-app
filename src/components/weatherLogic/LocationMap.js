import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LocationMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {
				lat: 59.95,
				lng: 30.33,
			},
		};
	}

	componentDidMount() {
		this.setState({
			center: {
				lat: this.props.lat,
				lng: this.props.lng,
			},
		});
	}

	render() {
		console.log(this.props);
		return (
			<div style={{ height: '400px', width: '100%' }}>
				<GoogleMapReact
					// bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
					bootstrapURLKeys={{ key: 'AIzaSyCZSY4AW-l1ZkR828vnBpf3F3j9fhe7g6A' }}
					defaultCenter={this.state.center}
					defaultZoom={8}
				>
					<AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
				</GoogleMapReact>
			</div>
			// <div>ppp</div>
		);
	}
}

export default LocationMap;
