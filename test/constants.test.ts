import { INIT_CODE_HASH } from '../src/constants'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON
const COMPUTED_INIT_CODE_HASH = '0xbc919ae6f6f95dca1e223fc957286afa1da81529418e9f187db8a0b2d2e963bc'

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
