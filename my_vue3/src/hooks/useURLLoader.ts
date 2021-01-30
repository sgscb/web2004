import { ref } from 'vue'
// import axios from 'axios'

function useURLLoader(url: string) {
  const result = ref(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
}