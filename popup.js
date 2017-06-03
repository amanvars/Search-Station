document.addEventListener('DOMContentLoaded', function() {
  
  var link = document.getElementById('search');
  var url = "";
    
  link.addEventListener('click', function() {

    var opt = document.getElementById("search_categories");  //this is used to get which dropdown is selected 
    var opt_sel= opt.options[opt.selectedIndex].text;
    var query = document.getElementById("query");

    if(opt_sel == "Flipkart"){
          url = "https://www.flipkart.com/search?q="+query.value; 
          var win = window.open(url, '_blank');   // to open respective website. "_blank" is used to open in new tab
          win.focus();  
         }

 else if(opt_sel == "Myntra"){
      url = "http://www.myntra.com/"+query.value+"/?userQuery=true"; 
      var win = window.open(url, '_blank');
      win.focus(); 
     }

    else if(opt_sel == "Amazon"){
          url = "http://www.amazon.in/s/ref=nb_sb_noss?url=search-alias=aps&field-keywords="+query.value; 
          var win = window.open(url, '_blank');
          win.focus(); 
         }

    else if(opt_sel == "Snapdeal"){
        url = "https://www.snapdeal.com/search?keyword="+query.value; 
        var win = window.open(url, '_blank');
        win.focus(); 
       }

     else if(opt_sel == "Jabong"){
          url = "http://www.jabong.com/all-products/?tt="+query.value; 
          var win = window.open(url, '_blank');
          win.focus(); 
         }

    else if(opt_sel == "Paytm"){
      url = "https://paytm.com/shop/search?q="+query.value; 
      var win = window.open(url, '_blank');
      win.focus(); 
     }

     else if(opt_sel == "TataCliq"){
      url = "https://www.tatacliq.com/search/?searchCategory=all&text="+query.value; 
      var win = window.open(url, '_blank');
      win.focus(); 
     }

      else if(opt_sel == "HomeShop18"){
      url = "http://www.homeshop18.com/"+query.value+"/search:"+query.value; 
      var win = window.open(url, '_blank');
      win.focus(); 
     }

      else if(opt_sel == "Pepperfry"){
      url = "https://www.pepperfry.com/site_product/search?q="+query.value; 
      var win = window.open(url, '_blank');
      win.focus(); 
     }

      else if(opt_sel == "Shopclues"){
      url = "http://search.shopclues.com/?q="+query.value; 
      var win = window.open(url, '_blank');
      win.focus(); 
     }

      });
    
});
