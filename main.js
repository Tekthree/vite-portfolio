import './style.css'

// -------------- hamburger menu button ------------------- //

$('.hamburger').on('click', function() {
  $('.hamburger').toggleClass('is-active');
  $('.popout-menu').toggleClass('menu-open');
  $('.popout-nav').toggleClass('popout-inactive');
  $('body').toggleClass('overhidden');
});





// -------------- API call to backend ------------------- //
async function getBlock(){
  await axios.get('https://backend-for-notion.herokuapp.com/block-children')
    .then(res =>{
      console.log('success', res.data.results)

      let herotext = res.data.results[3].paragraph.text[0].plain_text;
      $('.mw').text(herotext);

    })
    .catch(err => console.error(error))
}

getBlock()



// -------------- cause repaint for viewport width ------------------- //
causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});

