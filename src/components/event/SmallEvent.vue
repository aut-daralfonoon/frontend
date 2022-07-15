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
    <h4 style="display: inline-flex; align-items: center;">
      <svg v-if="id % 2 === 0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
      </svg>
      <span style="margin-right: 10px;">
         {{ title }}
      </span>
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

  /* setting a transition */
  transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -webkit-transition:opacity 0.5s;
  -o-transition: opacity 0.5s;
}

@media screen and (max-width: 800px) {
  .event-row {
    width: 80%;
  }

  .event-row:hover {
    width: 80%;
  }

  .view-btn {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>