import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './footer'
import { Nav, NavStatic } from './nav'

const Main = styled.main`
    padding-top: ${props => props.padding_top || '7rem'};
    background: var(--color-white);
    height: ${props => (props.is_static ? '92vh' : '100%')};
`

const Layout = ({ children, is_static, padding_top, nav_type }) => (
    <>
        {is_static ? <NavStatic /> : <Nav nav_type={nav_type} />}
        <Main padding_top={padding_top} is_static={is_static}>
            {children}
        </Main>
        {!is_static && <Footer />}
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    is_static: PropTypes.bool,
    padding_top: PropTypes.string,
}

export default Layout
