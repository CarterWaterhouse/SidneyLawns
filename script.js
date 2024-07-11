function init() {
    $(".content").css("padding-top", $(".header").innerHeight());
    if (location.href.includes("Consultation.html")) {
        // alert("Its working");
        //loadCalendar();
        // loadNumbersAPI();
        // loadCalendarBypass();
        loadCalendarTest();
    }
}

function loadCalendarTest() {
    

    $.get(rawURL, function(data){ 
        $("#raw").html(data);
    });
}

function loadNumbersAPI() {
    let baseURL = "http://numbersapi.com/"
    let number = $("#numInput").val();
    let type = "trivia";
    if ($("#type").val() != "trivia") {
        type = $("#type").val();
    }
    let endURL = baseURL + number + "/" + type;
    $.get("http://numbersapi.com/")
}

function loadChuckAPI() {
    $.get("https://api.chucknorris.io/jokes/random", function(data) {
        console.log(data);
        $(".Calendar").html($(".Calendar").html() + JSON.stringify(data));
        $("#chuck").attr("src", data.icon_url);
        console.log(data.value);
        $("#chuckTXT").html(data.value);
        
    });
}
 
function loadCalendar() {
    
    let authRaw = "https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=" + clientID + "&scope=ZohoCalendar.event.ALL";// "&redirect_uri=154.5.206.84";
    console.log(authRaw);
    $.get(authRaw, function(data) {
        console.log(data);
        console.log(data.auth_code);
        let tmpAuthCode = "1000.97fe7c929ce5f05f34c335ebe3c5d0fa.31b544977530207aea7357c50a82ded1";
        let accessRaw = "https://accounts.zoho.com/oauth/v2/token?code=" + tmpAuthCode + "&grant_type=authorization_code&client_id=" + clientID + "&client_secret=" + clientSecret + "&scope=ZohoCalendar.event.ALL"; //+ "&redirect_uri=154.5.206.84";
        $.get(accessRaw, function(data) {
            
            $.ajax({
                url: rawURL,
                method: 'GET',
                Header:(Authorization=tmpAuthCode),//data.access_token,
                success: function(data) {
                    $(".Calendar").html(JSON.stringify(data));
                    console.log(JSON.stringify(data));
                },
                error: function(xhr, status, error) {
                    // Handle errors here
                    console.error(status, error);
                }
            });
        });
   });
    
    
}
function loadCalendarBypass() {
    let tmpAuthCode = "1000.2293e07eef59e136ecac1ab298caa209.3245659c06eb08ec4db7225aba249a44";
    let rawURL = 'https://calendar.zoho.com/api/v1/calendars/7262585a5ecc4380b2cbb7b97ec1cc61/events';

    
    let grant_type = "client_credentials";
    let scope = "ZohoCalendar.event.ALL";
    let soid = "ZohoCalendar.1";
    
    let accessURL = "https://accounts.zoho.com/oauth/v2/token?client_id="+ clientID + "&client_secret=" + clientSecret + "&grant_type=client_credentials&scope=" + scope + "&soid=" +soid;
    
    $.get(accessURL, function(data) {
        tmpAuthCode = data.access_token;
        $.ajax({
            url: rawURL,
            method: 'GET',
            Header:(Authorization=tmpAuthCode),//data.access_token,
            success: function(data) {
                $(".Calendar").html(JSON.stringify(data));
                console.log(data);
            },
            error: function(xhr, status, error) {
                // Handle errors here
                console.error(status, error);
            }
        });
    });
    

    
}




function Contactbtn() {
    location.href = 'contact.html';
}
function pauseVideo() {
    if (document.body.scrollTop > 20) {
        
    }
}
function setToMiddle() {
    return (window.screen.width-document.getElementById("myVideo").width)/2;
}
let num = 1;
function nextGallery() {
    if (num == 1) {
        document.getElementById("gallery").setAttribute("src", "gallery/2.jpg");
        num++;
    } else if (num == 2) {
        document.getElementById("gallery").setAttribute("src", "gallery/3.jpg");
        num++;
    } else if (num == 3) {
        document.getElementById("gallery").setAttribute("src", "gallery/4.jpg");
        num++;
    } else if (num == 4) {
        document.getElementById("gallery").setAttribute("src", "gallery/5.jpg");
        num++;
    } else if (num == 5) {
        document.getElementById("gallery").setAttribute("src", "gallery/6.jpg");
        num++;
    } else if (num == 6) {
        document.getElementById("gallery").setAttribute("src", "gallery/1.jpg");
        num = 1;
    }
}
