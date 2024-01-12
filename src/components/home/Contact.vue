<template>
    <section id="contact" class="section-wrap">
        <div class="container">
            <div class="row">
                <div class="col-md-12 align-center section-head">
                    <h2 class="section-title">CONTACT US</h2>
                    <div class="title-separetor"></div>
                    <p class="section-description">We are always welcoming talents to join our departments. If you are interested in joining us, please send us an email</p>
                </div>
            </div>
            <div class="row">
                <form id="formMail" action="">
                    <div class="clearfix">
                        <div class="col-md-6">
                            <input id="txtMailName" type="text" name="txtMailName" class="form-control" placeholder="Name (required)" required />
                            <input id="txtMailFrom" type="email" name="txtMailFrom" class="form-control" placeholder="Email (required)" required />
                            <input id="txtMailSubject" type="text" name="txtMailSubject" class="form-control" placeholder="Subject" />
                        </div>
                        <div class="col-md-6">
                            <textarea id="txtMailBody" name="txtMailBody" cols="40" rows="10" class="form-control" aria-invalid="false" placeholder="Message"></textarea>
                            <input class="btn btn-default btn-block" type="submit" />
                        </div>
                    </div>
                    <div style="padding: 0 15px;" id="resultSendMail"></div>
                </form>
            </div>
        </div>
    </section>
</template>