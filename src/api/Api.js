import axios from "axios";

const BASE_URL = "http://dataservice.accuweather.com";
const apikey = "a3Dt8ePyWuFnBuwUUVGjLbHZGxcnBKrP";

export const SearchCity = async (searchText, setCities) => {
  axios
    .get(
      `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${searchText}`,
    )
    .then((response) => {
      setCities(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const SearchWeatherByCity = async (cityKey, setActiveCityWeather) => {
  axios
    .get(`${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${apikey}`)
    .then((response) => {
      setActiveCityWeather(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
};
