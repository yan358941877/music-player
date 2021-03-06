;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fast-forward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M439.157333 840.842667a42.666667 42.666667 0 0 1 0-60.341334L707.658667 512 439.157333 243.509333a42.666667 42.666667 0 0 1 60.341334-60.341333l298.666666 298.666667a42.688 42.688 0 0 1 0 60.352l-298.666666 298.666666C491.168 849.162667 480.245333 853.333333 469.333333 853.333333s-21.845333-4.170667-30.176-12.490666zM213.333333 853.333333a42.570667 42.570667 0 0 0 30.165334-12.490666l298.666666-298.666667a42.688 42.688 0 0 0 0-60.352l-298.666666-298.666667a42.666667 42.666667 0 0 0-60.341334 60.341334L451.658667 512 183.168 780.501333A42.666667 42.666667 0 0 0 213.333333 853.333333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M934.378667 154.272c-99.978667-99.978667-262.058667-99.978667-362.005334 0L512 214.613333l-60.352-60.32c-99.978667-99.978667-262.058667-99.978667-362.016 0-99.978667 99.968-99.978667 262.048 0 362.026667l60.330667 60.298667L512 938.666667l362.037333-362.037334 60.330667-60.298666c99.989333-99.989333 99.989333-262.08 0.010667-362.058667zM753.354667 576.650667L512 818.005333 270.645333 576.650667 149.984 455.989333c-66.645333-66.645333-66.645333-174.709333 0-241.376 66.666667-66.645333 174.709333-66.645333 241.354667 0L512 335.296 632.682667 214.613333c66.645333-66.645333 174.709333-66.645333 241.354666 0 66.645333 66.666667 66.645333 174.709333 0 241.376L753.354667 576.650667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pause" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M341.333333 128c-70.688 0-128 57.312-128 128v512c0 70.688 57.312 128 128 128s128-57.312 128-128V256c0-70.688-57.312-128-128-128z m42.666667 640a42.666667 42.666667 0 0 1-85.333333 0V256a42.666667 42.666667 0 0 1 85.333333 0v512z m298.666667-640c-70.688 0-128 57.312-128 128v512c0 70.688 57.312 128 128 128s128-57.312 128-128V256c0-70.688-57.312-128-128-128z m42.666666 640a42.666667 42.666667 0 0 1-85.333333 0V256a42.666667 42.666667 0 0 1 85.333333 0v512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-play" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256 278.72L644.810667 512 256 745.28V278.72M170.666667 128v768l640-384-640-384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-rewind" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 853.333333a42.56 42.56 0 0 1-30.176-12.501333l-298.666667-298.666667a42.666667 42.666667 0 0 1 0-60.330666l298.666667-298.666667a42.666667 42.666667 0 0 1 60.341333 60.341333L273.674667 512l268.490666 268.501333A42.666667 42.666667 0 0 1 512 853.333333z m286.165333-12.501333a42.666667 42.666667 0 0 0 0-60.330667L529.674667 512l268.490666-268.490667a42.677333 42.677333 0 0 0-60.330666-60.341333l-298.666667 298.666667a42.666667 42.666667 0 0 0 0 60.330666l298.666667 298.666667C746.165333 849.162667 757.088 853.333333 768 853.333333s21.834667-4.170667 30.165333-12.501333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-skip-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.498667 183.168a42.666667 42.666667 0 0 1 0 60.330667L487.008 512l268.490667 268.501333a42.666667 42.666667 0 0 1-59.274667 61.376c-0.362667-0.330667-0.704-0.682667-1.056-1.045333l-298.666667-298.666667a42.666667 42.666667 0 0 1 0-60.330666l298.666667-298.666667C703.498667 174.837333 714.421333 170.666667 725.333333 170.666667s21.834667 4.170667 30.165334 12.501333zM256 170.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v597.333334a42.666667 42.666667 0 0 0 85.333334 0V213.333333a42.666667 42.666667 0 0 0-42.666667-42.666666z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-skip-forward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M225.834667 840.832a42.666667 42.666667 0 0 1 0-60.330667L494.325333 512 225.834667 243.498667a42.666667 42.666667 0 1 1 59.285333-61.376c0.362667 0.341333 0.704 0.693333 1.056 1.045333l298.666667 298.666667a42.666667 42.666667 0 0 1 0 60.330666l-298.666667 298.666667C277.834667 849.162667 266.912 853.333333 256 853.333333s-21.834667-4.170667-30.165333-12.501333zM725.333333 853.333333a42.666667 42.666667 0 0 0 42.666667-42.666666V213.333333a42.666667 42.666667 0 0 0-85.333333 0v597.333334a42.666667 42.666667 0 0 0 42.666666 42.666666z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-volume" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 341.333333C57.28 341.333333 0 400.394667 0 471.114667V554.666667c0 70.72 57.28 128 128 128h85.333333l213.333334 213.333333V128L213.333333 341.333333h-85.333333z m213.322667-8.992L341.333333 330.666667v359.338666L248.661333 597.333333H128c-23.530667 0-42.666667-19.136-42.666667-42.666666v-83.552C85.333333 447.018667 104.874667 426.666667 128 426.666667h120.661333l92.661334-94.325334z m409.12 441.034667a42.634667 42.634667 0 0 1-36.586667-64.554667 381.674667 381.674667 0 0 0 54.133333-196.714666 381.674667 381.674667 0 0 0-54.133333-196.714667 42.645333 42.645333 0 0 1 14.709333-58.485333l0.021334-0.010667a42.645333 42.645333 0 0 1 58.506666 14.72A467.36 467.36 0 0 1 853.333333 512.096a467.381333 467.381333 0 0 1-66.229333 240.512 42.645333 42.645333 0 0 1-36.661333 20.768z m127.690666 117.066667a42.666667 42.666667 0 0 1-35.242666-66.688C905.557333 731.690667 938.666667 623.925333 938.666667 512.096c0-111.829333-33.109333-219.594667-95.776-311.658667a42.677333 42.677333 0 0 1 70.570666-48.010666C985.770667 258.698667 1024 383.072 1024 512.096c0 129.034667-38.229333 253.408-110.538667 359.68a42.752 42.752 0 0 1-35.328 18.666667zM620.096 653.877333a42.666667 42.666667 0 0 1-39.328-59.2A211.914667 211.914667 0 0 0 597.333333 512.096c0-28.821333-5.621333-56.746667-16.746666-83.018667a42.666667 42.666667 0 1 1 78.592-33.258666A296.778667 296.778667 0 0 1 682.666667 512.085333c0 40.074667-7.808 78.965333-23.232 115.637334a42.645333 42.645333 0 0 1-39.338667 26.154666z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)