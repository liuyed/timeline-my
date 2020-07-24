import myTimeline from './src/main'
import myTimelineItem from './src/item'

const components = [
  myTimeline,
  myTimelineItem
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

myTimeline.install = function(Vue) {
  Vue.component(myTimeline.name, myTimeline);
};
myTimelineItem.install = function(Vue) {
  Vue.component(myTimelineItem.name, myTimelineItem);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  myTimeline,
  myTimelineItem
};