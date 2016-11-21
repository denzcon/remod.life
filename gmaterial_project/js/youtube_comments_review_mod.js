javascript:(function()
	{
		$(function()
			{

				function fixViewingExperience()
				{
					console.log('fixing view for comments optimization');
					$('#player .player-api').css('position', 'fixed');
					var sidebarWidth = $('#watch7-sidebar').css('width');
					var clearSpace = ($(window).width() - ($('#watch7-content').width() + $('#watch7-content').offset().left))-10;

					$('#player .player-api').css('width', (clearSpace-10));
					// $('#player .player-api').css('width', sidebarWidth);
					// $('#player .player-api').css('width', '20%');
					var widthjc = $('#player .player-api').css('width');
					$('#player .player-api').css('height', (parseInt(widthjc)/16*9));
					$('#player .player-api').css('margin-left', 0);
					var sidebarDistance = $('#watch7-sidebar').offset().left;
					// var sidebarDistance = $(window).width()-($('#watch7-sidebar').offset().left + $("#watch7-sidebar").outerWidth());
					// var sidebarDistance = $(window).width()-$('#watch7-sidebar').offset().left;
					$('#player .player-api').css('left', sidebarDistance+'px');
					$('#player .player-api').css('top', '50px');
					// $('#player .player-api').attr('draggable', 'true');
					// $('#player .player-api').attr('ondragstart', 'jQuery.fn.dragstart_handler(event);');
					$('.ytp-chrome-bottom').css('width', '100%');
					$('.ytp-chrome-bottom').css('left', '0');

					$('.ytp-right-controls .ytp-size-button').css('display', 'none');
					$('.html5-video-player .video-stream').css('left', '0 !important');
					$('.html5-video-player .video-stream').css('width', '100% !important');
					$('.html5-video-player .video-stream').css('height', '100% !important');
					// -----------------------------------
					$('video').css('left', '0');
					$('video').css('width', '100%');
					$('video').css('height', 'auto');
					var heightVideo = $('video').css('height');
					$('#player .player-api').css('height', (parseInt(heightVideo)+5)+'px');


					$('#theater-background').css('display', 'none');
					$('#content #placeholder-player').css('display', 'none');
					// $('#watch7-sidebar').css('top', 0);
					var newTop = parseInt($('#watch7-sidebar').css('top'));
					var blocked = parseInt($('#player .player-api').css('height')+90);
					if(newTop < 0)
					{
						var finalTop = -newTop + blocked;						
					}
					else
					{
						var finalTop = newTop + blocked;												
					}
					console.log(newTop);
					console.log($('#player .player-api').css('height'));
					console.log(blocked);
					console.log(finalTop);
					console.log(finalTop+20);
					if(blocked > newTop)
					{
						$('#watch7-sidebar').css('top', (finalTop+20)+'px');
						
					}


				}
				fixViewingExperience();
				$(window).resize(fixViewingExperience);

			
			})
	}
		)
()