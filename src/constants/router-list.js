import ViewNote from '@views/ViewNote.vue'
import ViewStats from '@views/ViewStats.vue'

const routerList = [
  {
    path: '/',
    name: 'notes',
    component: ViewNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  }
]

export default routerList
