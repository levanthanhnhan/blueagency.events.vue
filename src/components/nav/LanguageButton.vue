<!-- <template>
  <div
    class="relative inline-block text-left text-gray-800"
  >
    <div>
      <span class="rounded-md shadow-sm">
        <button
          type="button"
          class="inline-flex items-center justify-between w-full rounded-md border border-gray-300 h-10 px-4 py-4 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150 btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span>AAA</span>
          <img
            src="https://s.svgbox.net/hero-solid.svg?ic=chevron-down&fill=grey-800"
            class="-mr-1 ml-2 h-5 w-5"
          />
        </button>
      </span>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg text-sm overflow-hidden border z-20"
      >
        <div
          class="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div>
            <div class="bg-gray-100 p-4 flex items-center">
              <div class="w-full">
                <img
                  class="h-8 w-8 rounded-full mb-2"
                  src="https://fayazz.co/fayaz.jpg"
                  alt="avatar"
                />
                <p class="font-semibold text-base">Fayaz Ahmed</p>
                <button
                  class="flex items-center justify-between w-full focus:outline-none"
                >
                  <p class="text-gray-600">fayaz@email.com</p>
                  <img
                    src="https://s.svgbox.net/hero-solid.svg?ic=cog&fill=grey-700"
                    class="h-4 w-4"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <nuxt-link to="/" class="p-4 flex items-center space-x-2">
              <img
                src="https://s.svgbox.net/hero-outline.svg?ic=currency-rupee"
                class="h-6 w-6"
              />
              <span> Transaction History </span>
            </nuxt-link>
            <nuxt-link to="/" class="p-4 flex items-center space-x-2">
              <img
                src="https://s.svgbox.net/hero-outline.svg?ic=heart"
                class="h-6 w-6"
              />
              <span> Favourites </span>
            </nuxt-link>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <nuxt-link
              to="/"
              class="p-4 flex items-center space-x-2"
            >
              <img
                src="https://s.svgbox.net/hero-outline.svg?ic=logout"
                class="h-6 w-6"
              />
              <span> Logout </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template> -->
<template>
    <Listbox as="div" v-model="selected">
      <div class="relative w-[94px]">
        <ListboxButton class="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
          <span class="flex items-center">
            <flag :iso="selected.nationality" class="h-5 w-5 flex-shrink-0 rounded-full"/>
            <span class="ml-3 block truncate text-white">{{ selected.name }}</span>
          </span>
          <!-- <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span> -->
        </ListboxButton>
  
        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <div class="flex items-center">
                    <flag :iso="person.nationality" />
                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ person.name }}</span>
                </div>
  
                <!-- <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span> -->
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
  
  const people = [
    {
        name: "VI",
        nationality: "vn"
    },
    {
        name: "EN",
        nationality: "gb"
    },
  ]
  
  const selected = ref(people[0])
  </script>