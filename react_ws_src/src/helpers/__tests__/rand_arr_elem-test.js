jest.unmock('../rand_arr_elem')
import rand_arr_elem from '../rand_arr_elem'
import rand_to_fro from '../rand_to_fro'

jest.mock('../rand_to_fro', () => jest.fn())

describe('rand_arr_elem', () => {
  const mockRandToFro = (value) => {
    rand_to_fro.mockImplementation(() => value)
  }

  it('should return a random element from a multi element array', () => {
    const arr = ['x', 'y', 'z']

    mockRandToFro(1)
    expect(rand_arr_elem(arr)).toBe('x')

    mockRandToFro(2)
    expect(rand_arr_elem(arr)).toBe('y')

    mockRandToFro(0)
    expect(rand_arr_elem(arr)).toBe('z')
  })
})
