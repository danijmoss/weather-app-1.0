//Get the user's position
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

      var lat = position.coords.latitude;
      var long = position.coords.longitude;

      //Dark Sky API key (unfortunately can't hide the api key)
      var apiKey = "82a8a7e5933363742600b2de987aece4";

      //Dark Sky URL 
      var weatherURL = "https://api.darksky.net/forecast/";

      //Cross-Origin URL to allow use on Chrome
      var corsURL = "https://cors-anywhere.herokuapp.com/";

      //Full Weather Forecast URL
      var fullURL = corsURL + weatherURL + apiKey + "/" + lat + "," + long + "?daily";
      //console.log(fullURL);

      //jQuery JSON call to pull in temperature and icon information
      $.getJSON(fullURL, function(json) {
          //console.log(json);

          //Today's weekday name
          var today = moment().format("ddd");
          $('#today').html(today);

          //Today's weekday number
          var todayNum = moment().format("D");
          $('#todayNum').html(todayNum);

          // ----------------------------------------------------//

          //Tomorrow weekday name
          var tomorrow = moment().add(1, "day").format("ddd");
          //console.log(tomorrow);
          $('#tomorrow').html(tomorrow);

          //Tomorrow weekday number
          var tomorrowNum = moment().add(1, "day").format("D");
          //console.log(tomorrowNum);
          $('#tomorrowNum').html(tomorrowNum);

          // ----------------------------------------------------//

          //Third weekday name
          var thirdDay = moment().add(2, "day").format("ddd");
          //console.log(tomorrow);
          $('#thirdDay').html(thirdDay);

          // Third weekday number
          var thirdDayNum = moment().add(2, "day").format("D");
          // console.log(tomorrowNum);
          $('#thirdDayNum').html(thirdDayNum);

          // ----------------------------------------------------//

          // Fourth weekday name
          var fourthDay = moment().add(3, "day").format("ddd");
          //console.log(tomorrow);
          $('#fourthDay').html(fourthDay);

          // Fourth weekday number
          var fourthDayNum = moment().add(3, "day").format("D");
          //console.log(tomorrowNum);
          $('#fourthDayNum').html(fourthDayNum);

          // ----------------------------------------------------//

          //Fifth weekday name
          var fifthDay = moment().add(4, "day").format("ddd");
          //console.log(tomorrow);
          $('#fifthDay').html(fifthDay);

          //Fifth weekday number
          var fifthDayNum = moment().add(4, "day").format("D");
          //console.log(tomorrowNum);
          $('#fifthDayNum').html(fifthDayNum);

          //----------------------------------------------------//

          //Sixth weekday name
          var sixthDay = moment().add(5, "day").format("ddd");
          //console.log(tomorrow);
          $('#sixthDay').html(sixthDay);

          //Sixth weekday number
          var sixthDayNum = moment().add(5, "day").format("D");
          //console.log(tomorrowNum);
          $('#sixthDayNum').html(sixthDayNum);

          //----------------------------------------------------//

          //Loop to retrieve daily weather data from the array
          for (i = 0; i < json.daily.data.length; i++) {

            var temp = Math.round(json.daily.data[i].apparentTemperatureMax);
            //console.log(temp);
            $('#temp' + i).html(temp + "&deg;F");
            var icon = json.daily.data[i].icon;
            //console.log(icon);
            $('#icon' + i).html("<i class='wi wi-forecast-io-" + icon + "'></i>");
          }

          // Weekly summary
          //  var weekSummary = json.daily.data[0].summary;
          // $('#weekSummary').html(weekSummary);

          // Display the Current temp in Fahrenheit
          var temp = Math.round(json.daily.data[0].apparentTemperatureMax);
          $('#temp').html(temp + "&deg;F");

          //Setting default temp conversion starting state
          var tempState = 0;
          //console.log(tempState);

          $("#convertTemp").click(function() {
            if (tempState === 0) {
              //Convert temperature to Celsius
              var Ctemp = Math.round((temp - 32) / 1.8);

              //Display new temp on screen
              $('#temp').html(Ctemp + "&deg;C");

              //Set new temp state
              tempState = 1;
              //console.log(tempState);
            } else {
              //Display temperature in Fahrenheit
              $('#temp').html(temp + "&deg;F");

              //Reset temp state
              tempState = 0;
              //console.log(tempState); 
            }
          });

          //Display the Current temp's icon
          var icon = json.daily.data[0].icon;
          $("#icon").html("<i class='wi wi-forecast-io-" + icon + "'></i>");

          //----------------------------------------------------------------------//

          //Second weekday temp
          var temp02 = json.daily.data[1].apparentTemperatureMax;
          $('#temp02').html(temp02 + "&deg;F");
          //Second weekday icon
          var icon02 = json.daily.data[1].icon;
          $("#icon02").html("<i class='wi wi-forecast-io-" + icon02 + "'></i>");

          //----------------------------------------------------------------------//

          //Third weekday temp
          var temp03 = json.daily.data[2].apparentTemperatureMax;
          $('#temp03').html(temp03 + "&deg;F");
          //Third weekday icon
          var icon03 = json.daily.data[2].icon;
          $("#icon03").html("<i class='wi wi-forecast-io-" + icon03 + "'></i>");

          //----------------------------------------------------------------------//

          //Fourth weekday temp
          var temp04 = json.daily.data[3].apparentTemperatureMax;
          $('#temp04').html(temp04 + "&deg;F");
          //Fourth weekday icon
          var icon04 = json.daily.data[3].icon;
          $("#icon04").html("<i class='wi wi-forecast-io-" + icon04 + "'></i>");

          //----------------------------------------------------------------------//

          //Fifth weekday temp
          var temp05 = json.daily.data[4].apparentTemperatureMax;
          $('#temp05').html(temp05 + "&deg;F");
          //Fifth weekday icon
          var icon05 = json.daily.data[4].icon;
          $("#icon05").html("<i class='wi wi-forecast-io-" + icon05 + "'></i>");

          //----------------------------------------------------------------------//

          //Sixth weekday temp
          var temp06 = json.daily.data[5].apparentTemperatureMax;
          $('#temp06').html(temp06 + "&deg;F");
          //Sixth weekday icon
          var icon06 = json.daily.data[5].icon;
          $("#icon06").html("<i class='wi wi-forecast-io-" + icon06 + "'></i>");

          //----------------------------------------------------------------------//

          //Click event to convert the temperature from Farenheit to Celcius
          //Temp in Farenheit
          // var temp;
          //console.log(temp);

          //Setting default temp conversion starting state
          // var tempState = 0;
          //console.log(tempState);

          // $("#convertTemp").click(function() {
          //   if (tempState === 0) {
          //     //Convert temperature to Celsius
          //     var Ctemp = (temp - 32) / 1.8;
          //     console.log(Ctemp);

          //Show temp conversion with °C
          // $("#temp").html(Ctemp).append(" °C");

          //Change temp state to 1
          //   tempState = 1;
          // } else {
          //Leave the temperature in Farenheit
          // var temp;
          //Show temp conversion with °F
          // $("#temp").html(Ftemp).append(" °F");

          //Switch temp state back to starting state
          //   tempState = 0;
          // }

          // });
        // }

      });

    //Variables to get user's location using Google Maps API 
    //Make sure to read Google Maps API Policies
    //https://developers.google.com/maps/documentation/geocoding/policies
    //Key
    var otherAPIKey = "AIzaSyBb4Ihnyr3I4WNRsiGMEdZBU1oJSi75IJM";
    //console.log(otherAPIKey);

    //Google Maps URL
    var googleURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    //console.log(googleURL);

    //Full URL to query address using coordinates
    var addressURL = googleURL + lat + "," + long + "&key=" + otherAPIKey;
    //console.log(addressURL);

    //Holds location of user
    var location;

    //jQuery JSON call to pull in address information
    //Using "for" loop to go through object array
    $.getJSON(addressURL, function(json) {
      for (i = 0; i < json.results.length; i++) {
        location = json.results[1].formatted_address;
        //console.log(location);

        //Display User's location
        $('.location').html(location);
      }
    });

    //Display the current month using Moment.js
    var month = moment().format('M'); $('#monthNum').html(month);

    //Display the year using Moment.js
    var year = moment().format('YYYY'); $('#year').html(year);

    //Display current time using Moment.js
    var dateTimeString = moment().format("LT"); $(".time").html(dateTimeString);

  });
}