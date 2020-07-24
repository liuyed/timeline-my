<template>
  <div id="app">
    <myTimeline>
      <myTimelineItem  v-for="n in 3" :key="n" small >
        <span slot="opposite">200-222-222</span>
           <div class="my-card elevation-2">
             <p class="my-card__title headline ">保真家</p>
             <p class="my-card__text">处理人：刘大大</p>
           </div>
      </myTimelineItem>
      <!-- <div class="my-timeline-item theme--light">
        <div class="my-timeline-item__body"><div class="elevation-2 my-card my-sheet theme--light"><div class="my-card__title headline">Lorem ipsum</div><div class="my-card__text">
          Lorem ipsum dolor sit amet,滴滴答答滴滴答答滴滴答答滴滴答答往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往往我 no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </div></div></div>
        <div class="my-timeline-item__divider">
          <div class="my-timeline-item__dot my-timeline-item__dot--small">
            <div class="my-timeline-item__inner-dot primary"></div>
          </div>
        </div>
        <div class="my-timeline-item__opposite">
          <span>Tus eu perfecto</span>
        </div>
      </div>
      <div class="my-timeline-item theme--light">
        <div class="my-timeline-item__body"><div class="elevation-2 my-card my-sheet theme--light"><div class="my-card__title headline">Lorem ipsum</div><div class="my-card__text">
          Lorem ipsum dolor sit amet, no nam滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答滴滴答答 oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </div></div></div>
        <div class="my-timeline-item__divider">
          <div class="my-timeline-item__dot my-timeline-item__dot--small">
            <div class="my-timeline-item__inner-dot primary"></div>
          </div>
        </div>
        <div class="my-timeline-item__opposite">
          <span>Tus eu perfecto</span>
        </div>
      </div> -->
    </myTimeline>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
*{
  margin: 0;
  padding: 0;
}


</style>
