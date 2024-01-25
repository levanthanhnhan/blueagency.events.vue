<template>
  <!--<div id="nanogallery2"></div>-->
  <section id="offer">
    <div class="container">
      <div class="row">
        <!-- ### Adversiting gallery ### -->
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12 align-center">
                <h3 class="section-title">Adversiting</h3>
                <hr />
              </div>
            </div>
            <div class="row">
              <!-- skeleton loading -->
              <div class="grid-gallery" id="skeleton-gallery">
                <template id="skeleton-template">
                  <div class="skeleton-body">
                    <div
                      class="skeleton w-100 shadow-1-strong rounded"
                      src=""
                    ></div>
                  </div>
                </template>
              </div>
              <!-- gallery -->
              <div class="pswp-gallery grid-gallery" id="gallery"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
