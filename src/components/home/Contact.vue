<template>
  <section id="contact" class="bg-white pt-16 text-gray-900">
    <div class="container w-full mx-auto">
      <h2
        class="w-full py-2 text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase about"
      >
        {{ $t("contact.header") }}
      </h2>
      <div class="w-full">
        <div class="h-1 mx-auto gradient w-64 opacity-25 rounded-t"></div>
      </div>
      <p
        class="py-6 text-xl max-w-3xl mx-auto text-gray-500 text-center leading-tight contact-description"
      >
        {{ $t("contact.description") }}
      </p>
      <div class="px-4">
        <form @submit.prevent="submitFeedback">
          <div class="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="contact-form-col-left mt-2">
                <input
                  v-model="feedback.name"
                  :placeholder="$t('contact.form.name')"
                  required
                  type="text"
                  name="name"
                  class="block w-full mx-auto rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div class="contact-form-col-left mt-2">
                <input
                  v-model="feedback.email"
                  :placeholder="$t('contact.form.email')"
                  required
                  type="text"
                  name="email"
                  class="block w-full mx-auto rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div class="contact-form-col-left mt-2">
                <input
                  v-model="feedback.subject"
                  :placeholder="$t('contact.form.subject')"
                  type="text"
                  name="subject"
                  class="block w-full mx-auto rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-3">
              <div class="contact-form-col-right mt-2">
                <textarea
                  v-model="feedback.message"
                  name="message"
                  cols="40"
                  rows="3"
                  aria-invalid="false"
                  :placeholder="$t('contact.form.message')"
                  class="block w-full mx-auto rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div class="contact-form-col-right mt-2">
                <button
                  id="btnSubmit"
                  :disabled="sending"
                  type="submit"
                  class="py-2 px-2 w-full flex justify-center items-center rounded-md border-0 bg-primary transition-all hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-white"
                >
                  <svg
                    v-if="sending"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"
                    ></path>
                  </svg>
                  {{
                    sending
                      ? $t("contact.form.submitting")
                      : $t("contact.form.submit")
                  }}
                </button>
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
            <span class="font-medium">{{
              $t("contact.messageError.header")
            }}</span>
            {{ $t("contact.messageError.title") }}
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
            <span class="font-medium">{{
              $t("contact.messageSuccess.header")
            }}</span>
            {{ $t("contact.messageSuccess.title") }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import feedbackService from "../../services/feedback.service";
import ScrollReveal from "scrollreveal";

export default {
  data() {
    return {
      sending: false,
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
      this.sending = true;
      feedbackService
        .sendFeedback(this.feedback)
        .then((result) => {
          this.sending = false;
          if (result.data == "0") {
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
      origin: "left",
      interval: 200,
    });
  },
};
</script>
