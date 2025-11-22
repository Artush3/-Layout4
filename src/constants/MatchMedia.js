import pxToRem from '@/utils/pxToRem'

const MatchMedia = {
  tablet: window.matchMedia(`(width > ${pxToRem(992)}rem)`),
}

export default MatchMedia
