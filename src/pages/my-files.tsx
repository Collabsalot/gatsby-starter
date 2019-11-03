import React, { FC } from 'react'
import { graphql } from 'gatsby'

import { MyFilesQuery } from '../../@types/graphql'

export const query = graphql`
  query MyFiles {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

type MyFilesProps = {
  data: MyFilesQuery
}

const MyFiles: FC<MyFilesProps> = ({ data }) => {
  const { edges } = data.allFile
  return (
    <div>
      <h1>My Site's Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {edges.map(({ node: post }) => (
            <tr key={post.relativePath as string}>
              <td>{post.relativePath}</td>
              <td>{post.prettySize}</td>
              <td>{post.extension}</td>
              <td>{post.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyFiles
