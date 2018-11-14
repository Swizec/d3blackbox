import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        
          <html lang="en" />
          <title>D3 BLACKBOX</title>
                <meta name="description" content="Take any D3 example you find in the wild and wrap it in a React component. Great for quick experiments and meeting deadlines. 😛" />
                <meta itemprop="name" content="D3 BLACKBOX"></meta>
                <meta itemprop="description" content="Take any D3 example you find in the wild and wrap it in a React component. Great for quick experiments and meeting deadlines. 😛"/>
                <meta itemprop="image" content="https://dd3bb.netlify.com/static/ssimg-f32ddae4efdf69a44364799528bd91e4.png"/>

                
                <meta property="og:url" content="https://shawnhosea.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="D3 BLACKBOX"/>
                <meta property="og:description" content="Take any D3 example you find in the wild and wrap it in a React component. Great for quick experiments and meeting deadlines. 😛"/>
                <meta property="og:image" content="https://dd3bb.netlify.com/static/ssimg-f32ddae4efdf69a44364799528bd91e4.png"/>
            
                
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content="D3 BLACKBOX"/>
                <meta name="twitter:description" content="Take any D3 example you find in the wild and wrap it in a React component. Great for quick experiments and meeting deadlines. 😛"/>
                <meta name="twitter:image" content="https://dd3bb.netlify.com/static/ssimg-f32ddae4efdf69a44364799528bd91e4.png"/>
                
                {/* ... */}
        </Helmet>
        
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
