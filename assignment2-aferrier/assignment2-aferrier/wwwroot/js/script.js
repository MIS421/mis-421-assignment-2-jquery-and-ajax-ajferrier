var len;
var results = '';


function imFeelingLucky() {
    var params = {
        "q": $().val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f077d446926840b1adb20ee163db13d4");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog({ height: 500, width: 800 });
        })
        .fail(function () {
            alert("error");
        });
}

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
    };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "f077d446926840b1adb20ee163db13d4");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog({height: 500, width: 800});
    })
    .fail(function () {
      alert("error");
    });
}

function callimFeelingLucky() {
    imFeelingLucky();
}

function callSearch() {
    apiSearch();
}

function getTime() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function changeBackground() {
    document.body.style.backgroundImage = "url(https://media.istockphoto.com/photos/central-processor-unit-icon-floating-in-space-picture-id1333772625?b=1&k=20&m=1333772625&s=170667a&w=0&h=oGfJDijTP_pxKEHNLXTuj6pafWyevUTl9sq_FH8a0tU=)";
}

function testModal() {
    $("#time").dialog({
        autoOpen: false,
        modal: true
    });
    $("#showtime").click(function () {
        $("#time").dialog("open");
    });
}




