import type { ObjectDirective } from 'vue'

const AutoFocus: ObjectDirective = {
  mounted (el, binding) {
    const shouldFocus = binding.value()
    if (shouldFocus) {
      el.focus()
    }
  }
}

export default AutoFocus
