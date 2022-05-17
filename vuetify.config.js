import IconClose from '@/components/icons/IconClose'
import IconArrowNext from '@/components/icons/IconArrowNext'
import IconArrowPrev from '@/components/icons/IconArrowPrev'
import IconOnChecked from '@/components/icons/IconOnChecked'
import IconOffChecked from '@/components/icons/IconOffChecked'
import IconPen from '@/components/icons/IconPen'

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
        },
        checked: {
          component: IconOnChecked
        },
        check: {
          component: IconOffChecked
        },
        pen: {
          component: IconPen
        }
      },
    },
  }
