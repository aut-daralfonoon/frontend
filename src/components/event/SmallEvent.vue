<script setup>
// setting our props
defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div :id="'event' + id" class="event-row">
    <h4 style="display: inline-block;">
      {{ title }}
    </h4>
    <RouterLink :id="'event-view' + id" class="view-btn" :to="'/event/' + id">
      {{ "اطلاعات بیشتر" }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "SmallEvent",
  methods: {
    viewElement(event, value) {
      return (e) => {
        document.getElementById(event).style.opacity = value
      }
    }
  },
  mounted() {
    document.getElementById('event' + this.id).addEventListener('mouseover',
        this.viewElement('event-view' + this.id, 1)
    )
    document.getElementById('event' + this.id).addEventListener('mouseleave',
      this.viewElement('event-view' + this.id, 0)
    )
  }
}
</script>

<style scoped>
.event-row {
  width: 40%;
  /* other styles */
  border-radius: 5px;
  padding: 15px 10px;
  border: 1px solid black;
  text-decoration: none;
  outline: none;
  color: black;
  /* setting a transition */
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition:all 0.5s;
  -o-transition: all 0.5s;
}

.event-row:hover {
  width: 45%;
  background-color: #ada489;
  border-color: #ada489;
  color: #ffffff;
}

.view-btn {
  text-decoration: none;
  opacity: 0;
  color: inherit;
  float: left;
  transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -webkit-transition:opacity 0.5s;
  -o-transition: opacity 0.5s;
}
</style>