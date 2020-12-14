import React from 'react'
import { render } from '@testing-library/react'
import {Provider} from 'react-redux'
import Add from './Add'
import store from '../../state/store'

describe('Add page', () => {
  it('renders page elements', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    )
  
    expect(getByText('Add A Bill')).toBeInTheDocument()
    expect(getByText('Enter your details')).toBeInTheDocument()
    expect(getByText('Keep track of your household spending by adding your bills')).toBeInTheDocument()
  })
})
