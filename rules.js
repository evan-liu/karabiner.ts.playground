import {
  // rule and layers
  rule,
  layer,
  simlayer,
  hyperLayer,
  modifierLayer,
  duoLayer,
  // from / map()
  map,
  mapConsumerKey,
  mapPointingButton,
  mapSimultaneous,
  mapDoubleTap,
  // to
  toKey,
  toConsumerKey,
  toPointingButton,
  toHyper,
  to$,
  toApp,
  toPaste,
  // conditions
  ifApp,
  ifDevice,
  ifVar,
  // utils
  withCondition,
  withMapper,
} from 'karabiner.ts'

export const rules = [
  // rule(), layer(), simlayer(), hyperLayer(), duoLayer()
  rule('Playground').manipulators([
    // map(), { [key]: toKey() }
    map('⇪').to('⎋'),
  ]),
]