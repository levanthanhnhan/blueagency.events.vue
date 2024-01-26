<script setup>
import { useI18n } from "vue-i18n";
import Breadcrumb from "../nav/Breadcrumb.vue";
import ServiceItem from "./components/ServiceItem.vue";

const { t } = useI18n();
const breadcrumbs = [t("service.header"), t("service.items.entertainment")];
</script>

<template>
  <ServiceItem :breadcrumbs="breadcrumbs"></ServiceItem>
</template>
