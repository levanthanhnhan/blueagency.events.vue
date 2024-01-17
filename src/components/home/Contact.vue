<template>
  <section id="contact" class="bg-white pb-8 text-gray-900">
    <div class="container mx-auto flex flex-wrap pt-4 pb-10">
      <h2
        class="w-full my-2 sm:text-xl md:text-2xl lg:text-4xl font-medium text-center text-gray-800 uppercase"
      >
        Contact us
      </h2>
      <div class="w-full">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <p class="py-4 text-xl max-w-3xl mx-auto text-gray-500 text-center">
        We are always welcoming talents to join our departments. If you are
        interested in joining us, please send us an email
      </p>
      <div class="w-11/12 mx-auto">
        <form  @submit.prevent="submitFeedback">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <input
                  placeholder="Name (required)"
                  required
                  type="text"
                  name="txtMailName"
                  id="txtMailName"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div class="mt-2">
                <input
                  placeholder="Email (required)"
                  required
                  type="text"
                  name="txtMailFrom"
                  id="txtMailFrom"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div class="mt-2">
                <input
                  placeholder="Subject"
                  type="text"
                  name="txtMailSubject"
                  id="txtMailSubject"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-3">
              <div class="mt-2">
                <textarea
                  id="txtMailBody"
                  name="txtMailBody"
                  cols="40"
                  rows="3"
                  aria-invalid="false"
                  placeholder="Message"
                  class="block w-full rounded-md border-0 px-2 py-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div class="mt-2">
                <input
                  type="submit"
                  class="block w-full rounded-md border-0 px-2 py-2 bg-primary hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-white"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    methods: {
        submitFeedback() {
            alert('Submit')
        }
    },
    mounted() {

    }
}
</script>
