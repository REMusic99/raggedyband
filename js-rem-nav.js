  document.write("<div class='fixed'>");
      document.write("<div class='navbar' style='display:flex; justify-content:center'>");
        // LOGO -->
        document.write("<div class='logo'></div>");

       // NAVIGATION MENU -->
        document.write("<ul class='white'>");

          // USING CHECKBOX HACK -->
            document.write("<input type='checkbox' id='checkbox_toggle' />");
            document.write("<label for='checkbox_toggle' class='hamburger'>Menu</label>");

          //NAVIGATION MENUS -->
            document.write("<div class='menu'>");


                document.write("<li><a href='index.html' class='white'>HOME</a></li>");
                document.write("<li><a href='schedule.html' class='white'>SCHEDULE</a></li>");

                document.write("<li><a href='about.html' class='white'>ABOUT</a>");

                document.write("<li><a href='contact.html' class='white'>CONTACT</a></li>");
                document.write("<li><a href='music.html' class='white'>MUSIC</a></li>");
                document.write("<li><a href='store.html' class='white'>MERCH</a></li>");

                

            document.write("</div>");/*end menu div*/
        document.write("</ul>");
    document.write("</navbar> </div>");
document.write("</div>");

    document.write("<br class='br'>");
    document.write(" <div style='text-align:center'>");
    //document.write("<a href='index.html'><img src='pageheader-RaggedyEdge.png'></a></div>");
   

        /*document.write("<a href='index.html'><img srcset='images/pagehead-RaggedyEdge-600.png 600w, images/pageheader-RaggedyEdge.png 975w' sizes='(max-width: 1090px) 600px, 975px, src='images/pageheader-RaggedyEdge.png' alt='Raggedy Edge Logo' /></a></div>");*/
        
        document.write("<picture> <source media='(min-width: 1000px)' srcset='images/pageheader-RaggedyEdge.png'>");
        document.write("<source media='(min-width: 500px)' srcset='images/pageheader-RaggedyEdge.png'>");
        document.write("<img src='images/pagehead-RaggedyEdge-600.png' style='width:auto;'></picture>");
          /*document.write("<img src='images/header-guitmando.png' style='width:auto;'></picture>");*/
        
        
        
        

        