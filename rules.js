import {
  rule,
  layer,
  simlayer,
  duoLayer,
  map,
  mapSimultaneous,
  mapDoubleTap,
  toKey,
  complexModifications,
} from 'karabiner.ts'

export const rules = [
  // rule(), layer(), simlayer(), hyperLayer(), duoLayer()
  rule('Playground').manipulators([
    // map(), { [key]: toKey() }
    map('⇪').to('⎋'),
  ]),
]