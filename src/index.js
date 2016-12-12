import 'normalize.css'
import './stylus/styles.styl'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery'
// This is the import settings in order to charge a jquery
// plugin into the bundle.
import 'imports-loader?$=jquery,jQuery=jquery,this=>window!slick-carousel/slick/slick.js'

(function () {
  // so we can use the plugin on this scope :)
  $('.js-multi-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  })
})()
