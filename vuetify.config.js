import IconClose from '@/components/icons/IconClose'
import IconArrowNext from '@/components/icons/IconArrowNext'
import IconArrowPrev from '@/components/icons/IconArrowPrev'

export default {
    // подмена mdi-иконок на собственные компоненты
    icons: {
      values: {
        clear: {
            component: IconClose
        },
        prev: {
            component: IconArrowPrev
        },
        next: {
            component: IconArrowNext
        }
      },
    },
  }
