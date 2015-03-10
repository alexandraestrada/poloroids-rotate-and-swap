$(window).load(function() {
        var images = ['http://lorempixel.com/170/170/fashion', 'http://lorempixel.com/170/170/city', 'http://lorempixel.com/170/170/travel', 'http://lorempixel.com/170/170/sports','http://lorempixel.com/170/170/cats', 'http://lorempixel.com/170/170/nature', 'http://lorempixel.com/170/170/people', 'http://lorempixel.com/170/170/transport', 'http://lorempixel.com/170/170/food', 'http://lorempixel.com/170/170/technics', 'http://lorempixel.com/170/170/business', 'http://lorempixel.com/170/170/cats'];

        var usedImages = []

        for(var i=0; i < 7; i++) {
            if(i < 7) {
                $('#pics1').append('<li>' + '<img src="' + images[i]+'"' + '/>' +'</li>');
                usedImages.push(images[i]);


            }
            // else {
            //     $('#pics2').append('<li>' + '<img src="' + images[i]+'"' + '/>' +'</li>');
            // }
            
        }
            console.log(usedImages)
            console.log(images)

                setInterval(function() {

                    var liTemp = -1;
                    // var imageTemp = -1
                    var listLength = $("#pics1 li").length;
                    var imagesLength = images.length;
                    var listItemRand = Math.floor(Math.random()*listLength) + 1;
                    // var imageRandom = Math.floor(Math.random()*imagesLength) + 1;

                      while (listItemRand == liTemp){
                            listItemRand = listItemRand
                            }; 
                    liTemp = listItemRand;
                    var listSelected = $("#pics1 li:nth-child("+  listItemRand +")")

                    var image = $(listSelected).find('img');  
                    image.fadeOut(7000
                    );
                   
            }, 2000);
                 
            // setInterval(function() {

            //         var liTemp = -1;
            //         var imageTemp = -1
            //         var listLength = $("#pics1 li").length;
            //         var imagesLength = images.length;
            //         var listItemRand = Math.floor(Math.random()*listLength) + 1;
            //         var imageRandom = Math.floor(Math.random()*imagesLength) + 1;

            //           while (listItemRand == liTemp){
            //                 listItemRand = listItemRand
            //                 }; 
            //         liTemp = listItemRand;
            //         var listSelected = $("#pics1 li:nth-child("+  listItemRand +")")

            //         // var image = $(listSelected).find('img');  
            //         // image.fadeOut(7000,function() { 
            //         //     imageUrl= image.attr('src')
            //         //     usedImages.push(imageUrl)
            //         //     image.fadeIn(1000);
            //         //     images.remove(imageUrl)
            //         //     $(this).attr('src', images[imageRandom]);
            //         // });
                   
            // }, 2000);
       
       
   })
