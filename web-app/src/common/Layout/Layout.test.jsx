import React from 'react'
import { render } from '@testing-library/react'
import Layout from './Layout';

it('renders title text', () => {
  const { getByText } = render(<Layout title="Foo bar" />)

  expect(getByText('Foo bar')).toBeInTheDocument()
});

it('renders content provided as children', () => {
  const { getByText } = render(
    <Layout title="Foo bar"><div>Test content</div></Layout>
  )

  expect(getByText('Test content')).toBeInTheDocument()
});
