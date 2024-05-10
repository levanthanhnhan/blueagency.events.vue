<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const languages = [
  {
    name: "vi",
    nationality: "vn",
  },
  {
    name: "en",
    nationality: "gb",
  },
];

const selected = ref(languages[0]);
</script>

<template>
  <Listbox as="div" v-model="selected">
    <div class="relative w-[64px] btn-language">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
      >
        <span class="flex items-center">
          <flag
            :iso="selected.nationality"
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />
          <span class="ml-3 block truncate text-white uppercase">{{
            selected.name
          }}</span>
        </span>
        <!-- <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span> -->
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="language in languages"
            :key="language.name"
            :value="language"
            v-slot="{ active, selected }"
          >
            <li
              @click="switchLanguage(language.name)"
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3',
              ]"
            >
              <div class="flex items-center">
                <flag :iso="language.nationality" />
                <span
                  :class="[
                    selected ? 'font-bold' : 'font-normal',
                    'ml-3 block truncate uppercase',
                  ]"
                  >{{ language.name }}</span
                >
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

<script>
import ScrollReveal from "scrollreveal";
import trans from "@/i18n/translation";

export default {
  setup() {
    const { t, locale } = useI18n();

    const supportedLocales = trans.supportedLocales;

    return { t, locale, supportedLocales };
  },
  methods: {
    async switchLanguage(newLocale) {
      await trans.switchLanguage(newLocale);
    },
  },
  mounted() {
    // ScrollReveal().reveal(".btn-language", { delay: 200, origin: "right" });
  },
};
</script>
