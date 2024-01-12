<template>
  <footer class="main-footer footer-distributed">
      <div class="footer-left">
          <img src="../../../src/assets/images/logo.png" alt="" class="sponsor-img" style="max-width: 170px !important; padding-left: 0px;" />
          <p class="footer-company-name">BLUE AGENCY EVENT AND COMMUNICATION COMPANY LIMITED</p>
      </div>
      <div class="footer-center">
          <p class="footer-company-about" style="font-size: x-large; color: #ffffff !important;">
              Contact
          </p>
          <div style="margin-top: 12px;">
              <div>
                  <i class="fa fa-map-marker"></i>
                  <p>3rd Floor, 29 Ha Noi, Phu Nhuan, Hue</p>
              </div>
              <div>
                  <i class="fa fa-phone"></i>
                  <p>+84 935663397</p>
              </div>
              <div>
                  <i class="fa fa-envelope"></i>
                  <p><a href="mailto:group@blueagency.events" style="color: #ffffff;">group@blueagency.events</a></p>
              </div>
          </div>
      </div>
      <div class="footer-right">
          <p class="footer-company-about" style="font-size: x-large; margin-top: 6px; color: #ffffff !important;">
              Follow
          </p>
          <div class="footer-icons">
              <a href="https://www.facebook.com/blueagency.events"><i class="fa fa-facebook"></i></a>
              <a href="https://www.youtube.com/channel/UC9WCE6tNMI30a5mMITqFuzA/"><i class="fa fa-youtube"></i></a>
          </div>
      </div>
      <div class="footer-lower" style="padding-bottom: 0px;">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 align-center" style="color: #ffffff;">
                      <div class="copyright-wrap">Copyright © 2021, <a style="color: #ffffff;" href="https://www.facebook.com/blueagency.events/">Blue Agency Events</a> . All Right Reserved</div>
                  </div>
              </div>
          </div>
      </div>
      <div id="fb-root"></div>
      <div class="fb-customerchat" attribution="setup_tool" page_id="560849977295975"></div>

      <!-- Scroll To Top -->
      <button class="btn-toggle-round scroll-top js-scroll-top" type="button" title="Scroll to top">
          <svg class="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="cuurentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="11" x2="12" y2="5" />
            <line x1="6" y1="11" x2="12" y2="5" />
          </svg>
        </button>
  </footer>
</template>

<style>
  .scroll-top {
    --ghost-accent-color: #f59e1d;
    position: fixed;
    z-index: 50;
    padding: 0;
    right: 30px;
    bottom: 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    height: 40px;
    width: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.4s ease;
    border: none;
    box-shadow: inset 0 0 0 2px #ccc;
    color: #ccc;
    background-color: #fff;
  }

  .scroll-top.is-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .scroll-top .icon-tabler-arrow-up {
    position: absolute;
    stroke-width: 2px;
    stroke: #333;
  }

  .scroll-top svg path {
    fill: none;
  }

  .scroll-top svg.progress-circle path {
    stroke: #333;
    stroke-width: 4;
    transition: all 0.4s ease;
  }

  .scroll-top:hover {
    color: var(--ghost-accent-color);
  }

  .scroll-top:hover .progress-circle path,
  .scroll-top:hover .icon-tabler-arrow-up {
    stroke: var(--ghost-accent-color);
  }

  .content {
    max-width: 640px;
    margin: 0 auto;
  }
</style>

<script>
  const scrollTopBtn = document.querySelector('.js-scroll-top');

  if (scrollTopBtn) {
    scrollTopBtn.onclick = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    const progressPath = document.querySelector('.scroll-top path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    const updateProgress = function() {
      const scroll = window.scrollY || window.scrollTopBtn || document.documentElement.scrollTopBtn;

      const docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

      const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      const height = docHeight - windowHeight;
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    const offset = 100;

    window.addEventListener('scroll', function(event) {
      updateProgress();

      //Scroll back to top
      const scrollPos = window.scrollY || window.scrollTopBtn || document.getElementsByTagName('html')[0].scrollTopBtn;
      scrollPos > offset ? scrollTopBtn.classList.add('is-active') : scrollTopBtn.classList.remove('is-active');

    }, false);
  }
</script>
