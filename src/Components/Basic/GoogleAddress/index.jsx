import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { apiKey } from "../../../Utils/Constant";

const GoogleAddress = ({ value, onChange, name, type }) => {
  const [query, setQuery] = useState(value);
  const handleSelect = (data, details) => {
    setQuery(details.formatted_address);
    onChange({ target: { name, value: details.formatted_address } });
  };

  return (
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder="Enter the location"
      GooglePlacesDetailsQuery={{ fields: "formatted_address,geometry" }}
      onPress={handleSelect}
      query={{
        key: apiKey,
        language: "en",
        types: type ? `(cities)` : null,
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
      textInputProps={{
        value: query,
        onChangeText: (text) => {
          if (text != "") {
            setQuery(text);
            onChange({ target: { name, value: text } });
          } else {
            if (query.length == 1) {
              setQuery(text);
              onChange({ target: { name, value: text } });
            }
          }
        },
      }}
      styles={{
        container: {
          width: "100%",
          alignSelf: "center",
          marginVertical: 10,
        },
      }}
    />
  );
};

export default GoogleAddress;
