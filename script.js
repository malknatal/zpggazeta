// JScript source code

function  changeUrlImage() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        // alert(document.getElementsByTagName("img")[i].src);
        var domainname = "http://www.zpg29.ru/";

        var image_fn = image.src;
        // alert(image_fn);
        image.style.display = "none";
       
        
        var len = image_fn.length;
        var startposition = image_fn.indexOf("assets");
        // var endposition = image_fn.indexOf(">");
        var image_filename = image_fn.substring(startposition, len);
        // alert(image_filename);
        //_  var article_number = article.substr(startposition, endposition);
        var image_url = domainname + image_filename;
        images[i] = image_url;
        // alert(image_url);
        document.getElementsByTagName("img")[i].src = "\""+ image_url + "\"";
       // alert(document.getElementsByTagName("img")[i].src);
    }
}

// загружаем содержимое страницы
function pageLoad(url) {
            $.support.cors = true;          // настраиваем параметры
            $.mobile.allowCrossDomainPages = true;
           
            var data = $.ajax({
                url: url,
                type: "GET",
                dataType: "html",
                async: false,
                crossDomain: true,
                cache:false
                }).responseText;
          
           
            document.getElementById("welcomeMsg").innerHTML = data;
            document.getElementById("gazeta").innerHTML = "";
           
            var content = document.getElementById("statia").innerHTML;
                        //   var test = $.support.cors;
                        //    var test_one = $.mobile.allowCrossDomainPages;
                        // document.getElementById("welcomeMsg").innerHTML += test;
                        //  $.support.cors = true;
            
            document.getElementById("page").innerHTML = document.getElementById("statia").innerHTML;

            var articles = document.getElementsByClassName("right_link_h");
            var articles_header = document.getElementsByClassName("right_link_h");

            changeUrlImage();

            
            document.getElementById("articles").innerHTML = "<ul data-role='listview' data-inset='false' data-filter='false'>";

            for (var i = 0; i < articles.length; i++) {
       
                        //  var article = articles[i].innerHTML;
                var article = articles[i];
                        // var href = "index.php";
                var domainname = "http://www.zpg29.ru/";
                        // var len = article.length;
                        //  var startposition = article.indexOf(href);
                        // var endposition = article.indexOf(">");
                        // var article_number = article.substring(position, len);
                        //_  var article_number = article.substr(startposition, endposition);
                var article_number = article.href.substr(10);
                var adres = domainname + article_number;
                        //   alert(adres);

                document.getElementById("articles").innerHTML += "<li>";
                document.getElementById("articles").innerHTML += "<a href='#' class='statya' onclick='pageLoad(\"" + adres + "\")'>" + articles_header[i].innerHTML + "</a></li>";
                        // document.getElementById("articles").innerHTML += articles_header[i].innerHTML;
                        // document.getElementById("articles").innerHTML += "</a></li>";
               
            }

            document.getElementById("articles").innerHTML += "</ul>";
        
        return false;

    }

  function pageLoad_1(url) {
        $.support.cors = true;          // настраиваем параметры
        $.mobile.allowCrossDomainPages = true;

        var data = $.ajax({
            url: url,
            type: "GET",
            dataType: "html",
            async: false,
            crossDomain: true,
            cache: false
        }).responseText;


        document.getElementById("welcomeMsg1").innerHTML = data;
        document.getElementById("gazeta").innerHTML = "";

        var content = document.getElementById("statia").innerHTML;
        //   var test = $.support.cors;
        //    var test_one = $.mobile.allowCrossDomainPages;
        // document.getElementById("welcomeMsg").innerHTML += test;
        //  $.support.cors = true;

        document.getElementById("page1").innerHTML = document.getElementById("statia").innerHTML;

        var articles = document.getElementsByClassName("right_link_h");
        var articles_header = document.getElementsByClassName("right_link_h");

        changeUrlImage();


        document.getElementById("articles").innerHTML = "<ul data-role='listview' data-inset='false' data-filter='false'>";

        for (var i = 0; i < articles.length; i++) {

            //  var article = articles[i].innerHTML;
            var article = articles[i];
            // var href = "index.php";
            var domainname = "http://www.zpg29.ru/";
            // var len = article.length;
            //  var startposition = article.indexOf(href);
            // var endposition = article.indexOf(">");
            // var article_number = article.substring(position, len);
            //_  var article_number = article.substr(startposition, endposition);
            var article_number = article.href.substr(10);
            var adres = domainname + article_number;
            //   alert(adres);

            document.getElementById("articles1").innerHTML += "<li>";
            document.getElementById("articles1").innerHTML += "<a href='#' class='statya' onclick='pageLoad_1(\"" + adres + "\")'>" + articles_header[i].innerHTML + "</a></li>";
            // document.getElementById("articles").innerHTML += articles_header[i].innerHTML;
            // document.getElementById("articles").innerHTML += "</a></li>";

        }

        document.getElementById("articles1").innerHTML += "</ul>";
        window.scrollTo(0,0);
        return false;

    }


    