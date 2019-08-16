import axios from 'axios'

export function getGeoInfo() {
    axios.get('https://ipapi.co/json/')
    .then((response) => {
        if (localStorage.getItem('language') === null) {
            if( (response.data.country === 'FR') || (response.data.country === 'BJ') || (response.data.country === 'BF') || (response.data.country === 'CG') || (response.data.country === 'CD') || (response.data.country === 'CI') || (response.data.country === 'GA') || (response.data.country === 'ML') || (response.data.country === 'MC') || (response.data.country === 'NE') || (response.data.country === 'NG') || (response.data.country === 'SN') || (response.data.country === 'TG') || (response.data.region === 'Quebec') ) {
                localStorage.setItem('language', "FR")
            }
            else {
                localStorage.setItem('language', "US")
            }
        }
    })
    .catch((error) => {
        console.log(error)
        if (localStorage.getItem('language') === null) {
            localStorage.setItem('language', "US")
        }
    })
}
