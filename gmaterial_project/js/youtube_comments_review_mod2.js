javascript:(function()
    {
        $(function()
        {

            function miniSidebarPlayer()
            {
                var parentPlayerContainer = ('#player .player-api');
                var sidebarWidth = $('#watch7-sidebar').css('width');
                var clearSpace = ($(window).width() - ($('#watch7-content').width() + $('#watch7-content').offset().left))-10;

                // Lets get started with changing the value of the parentPlayerContainer position to fixed. This will allow for
                // scrolling the pages content while keeping the video you are watching within view
                parentPlayerContainer.css('position', 'fixed');

                parentPlayerContainer.css('width', (clearSpace-10));

                var newPlayerWidth = parentPlayerContainer.css('width');

                parentPlayerContainer.css('height', (parseInt(newPlayerWidth)/16*9));
                parentPlayerContainer.css('margin-left', 0);

                var sidebarDistanceLeft = $('#watch7-sidebar').offset().left;
                parentPlayerContainer.css('left', sidebarDistanceLeft+'px');
                parentPlayerContainer.css('top', '50px');



                // $('.html5-video-player .video-stream').css('left', '0 !important');
                // $('.html5-video-player .video-stream').css('width', '100% !important');
                // $('.html5-video-player .video-stream').css('height', '100% !important');

                // The <video> element had some left values that pushed the player away from the left side
                // of the parent player container. This fixes that issue
                var videoElement = $('video');
                videoElement.css('left', '0');

                // In order to ensure the player stays correctly within the parent player, it needs to seek
                // the maximum width of that parent container. The height will be dealt with further down
                videoElement.css('width', '100%');
                videoElement.css('height', 'auto');

                // Measure the <video> element to see what the height is and set the height of the parent player
                // element to match. Some pixels are added to the height value change to account for some anomolies
                var heightVideo = videoElement.css('height');
                parentPlayerContainer.css('height', (parseInt(heightVideo)+5)+'px');

                // Start dealing with the player controller bar as it is now set to a pixel width and we need it
                // to be set to the max width of the parent container. Simple enough, its set to 100%
                $('.ytp-chrome-bottom').css('width', '100%');
                $('.ytp-chrome-bottom').css('left', '0');

                // The preset resize element is removed from the controller in order to protect the stability
                // of the mini sidebar view mode. During testing if this button is pressed, it mangles the DOM
                // as well as any changes we made to it
                $('.ytp-right-controls .ytp-size-button').css('display', 'none');

                // remove the unnecessary elements from the older position. I chose to not "remove" the element
                // and instead just hide it from the DOM just in case we want to return to the original state
                // witout a manual reload of the page
                $('#theater-background').css('display', 'none');
                $('#content #placeholder-player').css('display', 'none');

                // Now we need to move the suggested video list in the sidebar down to acccount
                // for the height of both the video player as well as the top header menu elements
                // To do this we first measure the current top value for the sidebar yt element.
                // for some reason its already "pulled up" using a negative value and is not clear
                // at the moment how that is calculated and applied.
                var currentSidebarTopValue = parseInt($('#watch7-sidebar').css('top'));

                // This is the calculated value needed to account for the player plus 50px for the header
                // as well as 20px for 10px top and bottom margin for layout purposes (edit: set to 90 now for testing)
                var amountNeededForPlayer = parseInt(parentPlayerContainer.css('height')+90);

                // checking for a negative "pull-up" value
                if(currentSidebarTopValue < 0)
                {
                    // flipping the negative to positive value for total distance needed from top of the viewport
                    // there is a problem with this approach. To be revisited
                    var finalTop = -currentSidebarTopValue + amountNeededForPlayer;
                }
                else
                {
                    // no need to flip the value from negative to positive so we will drop the operator
                    var finalTop = currentSidebarTopValue + amountNeededForPlayer;
                }

                // check to see if the sidebar is already in a valid position to allow for visibility of the
                // sidebar under the player
                if(amountNeededForPlayer > currentSidebarTopValue)
                {
                    $('#watch7-sidebar').css('top', (finalTop+20)+'px');
                }
            }

            function fixViewingExperience()
            {
                console.log('fixing view for comments optimization');
                miniSidebarPlayer();

            }

            fixViewingExperience();
            $(window).resize(fixViewingExperience);


        })
    }
)
()/**
 * Created by jconoley on 11/21/2016.
 */
