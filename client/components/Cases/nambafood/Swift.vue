<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top m-48_bottom media-m-48_top media-m-12_bottom">
        Swift admin panel — intelligent delivery control
      </h2>
    </section>
    <section class="container_middle">
      <Swiper
        :components="adminPanel"
        :safari-top-bar="true"
        :box-shadow="true"
        slider-description=""
        safari-top-bar-image="swiper-frame"
        safari-top-bar-alt="Namba Food: Food and Grocery Delivery Service Website Header."
        :width="1026"
        :height="525"
      />
    </section>
    <section class="container_regular">
      <TextParagraph class="m-56_top media-m-24_top">
        The Swift microservice-based admin panel receives order information from the control panel and helps the
        operators to overview and manage the delivery processes. It displays orders by statuses as diagrams.
      </TextParagraph>
      <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
        The Swift admin panel helps operators to stay in touch with a courier if there is an issue on the way.
      </TextQuoteBox>
      <ColoredCards
        :cards-data="swiftCards"
        grid-type="two-two"
        class="m-72_bottom media-m-48_bottom"
      />
      <h3 class="case_title_h3 m-12_bottom">
        Intelligent auto-assignment system for courier management
      </h3>
      <TextParagraph class="m-8_bottom">
        The intelligent auto-assignment of orders allows operators to assign couriers to orders, taking into
        consideration the following factors:
      </TextParagraph>
      <List class="m-78_bottom media-m-48_bottom">
        <ListItemDot>Location of a courier, a cafe/restaurant and the end-user address.</ListItemDot>
        <ListItemDot>
          Courier's number of orders delivered during the current shift and in the last three hours.
        </ListItemDot>
        <ListItemDot>
          End-user location in relation to couriers, who are already carrying the order, and in relation to the next
          order’s pick-up point with the current order.
        </ListItemDot>
      </List>
      <h3 class="case_title_h3 m-12_bottom">
        Auto-assignment system under the hood
      </h3>
      <TextParagraph class="m-8_bottom">
        Three open-source solutions work together as a cohesive and smart system to perform auto-assignment of orders.
        This allows you to select the most suitable courier for each order, which reduces delivery time.
      </TextParagraph>
      <List class="m-78_bottom media-m-48_bottom">
        <ListItemDot>Ariadna parses open-source map data and inserts them into ElasticSearch.</ListItemDot>
        <ListItemDot>ElasticSearch stores couriers’ current locations.</ListItemDot>
        <ListItemDot>OSMR is a routing engine for the shortest paths and road networks.</ListItemDot>
      </List>
      <h3 class="case_title_h3 m-12_bottom">
        Geocoder Ariadna on ElasticSearch with OpenStreetMap
      </h3>
      <TextParagraph class="m-48_bottom">
        <a
          href="https://github.com/maddevsio/ariadna"
          class="case_link"
          target="_blank"
        >Ariadna is an open-source</a>
        geocoder based on ElasticSearch with OpenStreetMap, in-house developed. The tool searches for coordinates by
        synonyms and names of places, looking for crossroads and addresses in a certain radius, and knows how to reverse
        geocoding and automatically update with new data from drivers.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <div
        v-if="loaded"
        :class="{ 'case_box-shadow': !isIphone }"
        class="case_map-video-wrapper"
      >
        <img
          v-if="isIphone"
          :src="$getMediaFromS3('/images/Cases/nambafood/jpg/map-blank.jpg')"
          class="case_ios-map-video-image case_box-shadow"
          data-testid="test-case_ios-map-video-image"
          alt="Video preview"
        >
        <video
          v-else
          id="map-video"
          v-lazy-load
          class="case_map-video"
          width="100%"
          height="100%"
          :loop="true"
          :muted="true"
          :autoplay="true"
        >
          <source
            :data-src="$getMediaFromS3('/videos/map.c41e893.mp4')"
            type="video/mp4"
          >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </section>
</template>

<script>
import Swiper from '@/components/Cases/shared/Swiper'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import { adminPanel, swiftCards } from '@/data/caseNambafood'
import ColoredCards from '@/components/Cases/shared/ColoredCards'

export default {
  name: 'Swift',

  components: {
    Swiper,
    TextParagraph,
    TextQuoteBox,
    List,
    ListItemDot,
    ColoredCards,
  },

  props: {
    isIphone: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      swiftCards,
      adminPanel,
      loaded: false,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.loaded = true
    })
  },
}
</script>
