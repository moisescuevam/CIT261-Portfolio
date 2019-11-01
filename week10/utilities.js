
      export function getJSON() {
        return fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
          .then(function(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            } else {
            
              return response.json();
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      export const getLocation = function(options) {
        return new Promise(function(resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      };