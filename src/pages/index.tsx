import { graphql } from 'gatsby'
import React, { FC } from 'react'

import { IndexQuery } from '../../@types/graphql'

type IndexProps = {
  data: IndexQuery
}

const Index: FC<IndexProps> = ({ data }) => {
  return <div>Hello {data.site?.siteMetadata?.name ?? 'world'}!</div>
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        name
      }
    }
  }
`

export default Index
