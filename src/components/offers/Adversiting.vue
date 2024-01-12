<template>
    <!--<div id="nanogallery2"></div>-->
    <section id="offer">
        <!-- Breadcrumb -->
        <div class="container" style="margin-top: 80px;">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="../">Home</a></li>
                    <li class="breadcrumb-item">Offers</li>
                    <li class="breadcrumb-item active" aria-current="page">Adversiting</li>
                </ol>
            </nav>
        </div>
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
                                        <div class="skeleton w-100 shadow-1-strong rounded" src=""></div>
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