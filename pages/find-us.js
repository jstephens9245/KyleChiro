import Link from 'next/link';
import React from 'react';

// @components is an alias. see babelrc for module resolutions
import Header from '@components/Header';
import ImgSlider from '@components/Slider';
import HomePageBody from '@components/HomePageBody';
import Footer from '@components/Footer';
import MapContainer from '@components/MapContainer';

import { Map, Marker, InfoWindow } from 'google-maps-react';


// const GettingStartedGoogleMap = withScriptjs(withGoogleMap((props) => (
//   <GoogleMap
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//   />
// )));
//
// if (typeof window !== 'undefined') {
//   const mapFunction = function () {
//     Window.initMap = function () {
//       const uluru = { lat: -25.363, lng: 131.044 };
//       const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: uluru,
//       });
//       const marker = new google.maps.Marker({
//         position: uluru,
//         map,
//       });
//     };
//   };
// }

// export default class extends React.Component {
//   // static async getInitialProps({ req }) {
//   //   return req { mapFunction: "yay" }
//   // }
//
//   componentDidMount() {
//     if (typeof window !== 'undefined') {
//       // const mapFunction = function () {
//       const initMap = function () {
//         const uluru = { lat: -25.363, lng: 131.044 };
//         const map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru,
//         });
//         const marker = new google.maps.Marker({
//           position: uluru,
//           map,
//         });
//       };
//       // };
//     }
//   }
//   render() {
//     return (<div>
//       <div>
//         <Header />
//       </div>
//       <div id="map">
//         {/* {window.initMap()} */}
//         <script
//           async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLxdkRarK4D_h7NbmDInsvZpeY4lZra9g&callback=initMap"
//           type="text/javascript"
//         />;
//     </div>
//       <div>
//         <Footer />
//       </div>
//     </div>);
//   }
// }

export default class extends React.Component {
  // static async getInitialProps({ req }) {
  //   return req
  //     ? { userAgent: req.headers['user-agent'] }
  //     : { userAgent: navigator.userAgent };
  // }
  render() {
    return (
      <div>
        {
          typeof window !== 'undefined' ? (
            <div>
              {/* <Map google={this.props.google} zoom={14}>

                <Marker
                  onClick={this.onMarkerClick}
                  name={'Current location'}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
              </Map> */}
            </div>
          ) : ''
        }

      </div>
    );
  }
}

// export default () => (
//   <div>
//     <div>
//       <Header />
//     </div>
//     {/* <div id="map">
//       <GettingStartedGoogleMap
//         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLxdkRarK4D_h7NbmDInsvZpeY4lZra9g&callback=initMap"
//         loadingElement={<div />}
//         containerElement={<div style={{ height: '100%' }} />}
//         mapElement={<div style={{ height: '100%' }} />}
//       /> */}
//     <div id="map">
//       {
//         typeof window === 'undefined' ? '' : (
//         window.initMap = function () {
//           const uluru = { lat: -25.363, lng: 131.044 };
//           const map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 4,
//             center: uluru,
//           });
//           const marker = new google.maps.Marker({
//             position: uluru,
//             map,
//           });
//         })
//       }
//       <script
//         async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLxdkRarK4D_h7NbmDInsvZpeY4lZra9g&callback=initMap"
//         type="text/javascript"
//       />;
//     </div>
//     <div>
//       <Footer />
//     </div>
//   </div>


// let map;
//
// export default () => (
//   <div>
//     <div>
//       <Header />
//     </div>
//     {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfQxgWt-LSZcEmTEN8581Uq9SzZHnpuys" /> */}
//
//     <div id="map" />
//     {
//         function initMap() {
//           map = new google.maps.Map(document.getElementById('map'), {
//             center: { lat: 17, lng: 80 },
//             zoom: 5,
//           });
//           const marker = new google.maps.Marker({
//             position: { lat: 17, lng: 80 },
//             map,
//             title: 'Hello World!',
//           });
//         }
//       }
//     <script
//       async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLxdkRarK4D_h7NbmDInsvZpeY4lZra9g&callback=initMap"
//       type="text/javascript"
//     />;
//     <div>
//       <Footer />
//     </div>
//   </div>
// );


// export default () => (
//   <div>
//     <MapContainer />
//     <script
//       async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLxdkRarK4D_h7NbmDInsvZpeY4lZra9g&callback=initMap"
//       type="text/javascript"
//     />;
//   </div>
// );
