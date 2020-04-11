import { useMediaQuery } from 'react-responsive'

interface Screen {
  minWidth: number | undefined
  maxWidth: number | undefined
}

const small: Screen = {
  minWidth: undefined,
  maxWidth: 767,
}

const medium: Screen = {
  minWidth: 768,
  maxWidth: 991,
}

const large: Screen = {
  minWidth: 992,
  maxWidth: undefined,
}

export const isSmallScreen = useMediaQuery({ ...small, type: 'screen' })
export const isMediumScreen = useMediaQuery({ ...medium, type: 'screen' })
export const isLargeScreen = useMediaQuery({ ...large, type: 'screen' })
export const isPortrait = useMediaQuery({ orientation: 'portrait' })