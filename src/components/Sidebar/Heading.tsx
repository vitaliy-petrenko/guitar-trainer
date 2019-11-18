import React from 'react'
import { Typography } from '@material-ui/core'

const Heading: React.FC = ({ children }) => (
  <Typography variant='h6' gutterBottom>
    {children}
  </Typography>
)
export default Heading
