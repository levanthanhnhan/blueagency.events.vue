<template>
  <section id="contact" class="bg-white pb-8 text-gray-900">
    <div class="container mx-auto flex flex-wrap pt-4 pb-10">
      <h2
        class="w-full my-2 sm:text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase contact"
      >
        {{ $t("contact.header") }}
      </h2>
      <div class="w-full">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <p
        class="py-4 text-xl max-w-3xl mx-auto text-gray-500 text-center contact-description"
      >
        {{ $t("contact.description") }}
      </p>
      <div class="w-11/12 mx-auto">
        <form @submit.prevent="submitFeedback">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="contact-form-col-left mt-2">
                <input
                  v-model="feedback.name"
                  :placeholder="$t('contact.form.name')"
                  required
                  type="text"
                  name="txtMailName"
                  id="txtMailName"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div class="contact-form-col-left mt-2">
                <input
                  v-model="feedback.email"
                  :placeholder="$t('contact.form.email')"
                  required
                  type="text"
                  name="txtMailFrom"
                  id="txtMailFrom"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div class="contact-form-col-left mt-2">
                <input
                  v-model="feedback.subject"
                  :placeholder="$t('contact.form.subject')"
                  type="text"
                  name="txtMailSubject"
                  id="txtMailSubject"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-3">
              <div class="contact-form-col-right mt-2">
                <textarea
                  v-model="feedback.message"
                  id="txtMailBody"
                  name="txtMailBody"
                  cols="40"
                  rows="3"
                  aria-invalid="false"
                  :placeholder="$t('contact.form.message')"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div class="contact-form-col-right mt-2">
                <input
                  :value="$t('contact.form.submit')"
                  type="submit"
                  class="block w-full rounded-md border-0 px-2 py-2 bg-primary transition-all hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-white"
                />
              </div>
            </div>
          </div>
        </form>
        <!-- Alert Error -->
        <div
          v-if="isError"
          class="flex items-center p-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="sr-only">Info</span>
          <div class="text-[15px]">
            <span class="font-medium">Sorry!</span> Error submiting form. Please
            try again later!
          </div>
        </div>
        <!-- Alert Success -->
        <div
          v-if="isSuccess"
          class="flex items-center p-4 mt-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="sr-only">Info</span>
          <div class="text-[15px]">
            <span class="font-medium">Thank you!</span> Your feedback has been
            submitted successfully!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import contactService from "../../services/contact.service";
import ScrollReveal from "scrollreveal";
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      isError: false,
      isSuccess: false,
      feedback: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
    };
  },
  methods: {
    submitFeedback() {
      contactService
        .sendFeedback(this.feedback)
        .then((result) => {
          if (result == "0") {
            this.sendMailSuccess();
          } else {
            this.sendMailFailed();
          }
        })
        .catch((error) => {
          console.log(error);
          this.sendMailFailed();
        });
    },
    setDefaultFeedback() {
      this.feedback = {
        name: null,
        email: null,
        subject: null,
        message: null,
      };
    },
    sendMailSuccess() {
      this.isSuccess = true;
      this.isError = false;
      this.setDefaultFeedback();
    },
    sendMailFailed() {
      this.isSuccess = false;
      this.isError = true;
      this.setDefaultFeedback();
    },
  },
  mounted() {
    this.isSuccess = false;
    this.isError = false;

    ScrollReveal().reveal(".contact", { origin: "top" });
    ScrollReveal().reveal(".contact-description", { origin: "bottom" });
    ScrollReveal().reveal(".contact-form-col-left", {
      origin: "left",
      interval: 200,
    });
    ScrollReveal().reveal(".contact-form-col-right", {
      origin: "right",
      interval: 200,
    });
  },
};
</script>
