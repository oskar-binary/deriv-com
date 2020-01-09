import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Button } from 'components/form'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { deriv_app_url } from 'common/utility'
import device from 'themes/device.js'
import Facebook from 'images/svg/facebook-blue.svg'
import Google from 'images/svg/google.svg'
import Test from 'images/common/test_bg.png'
import Chevron from 'images/svg/carousel-chevron.svg'

const ChevronRight = styled(Chevron)`
    transform: rotate(180deg);

    g {
        g {
            fill: var(--color-grey-8);
        }
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 33.3rem;
    width: 100%;
`

const SignupFormWrapper = styled.div`
    margin-top: 2.9rem;
    margin-left: 10.8rem;
    width: 50%;
    position: relative;

    @media ${device.tablet} {
        padding-left: 5rem;
    }
`

const BackgroundWrapper = styled(Flex)`
    width: 50%;
    background-image: url(${Test});
    clip-path: polygon(26% 0, 100% 0%, 100% 99%, 0% 100%);
`

const InputWrapper = styled.div`
    width: 40%;
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 3.5rem;
`
const EmailButton = styled(Button)`
    margin-left: 2rem;
    height: 4rem;
`
const SocialWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 2.6rem;
`
const SocialButton = styled(Button)`
    background-color: var(--color-white);
    border: solid 1px var(--color-grey-7);
    width: 6.4rem;
    height: 4rem;
    margin-right: 1.2rem;
`

const StyledHeader = styled(Header)`
    width: ${props => props.width || '48.6rem'};

    @media ${device.tablet} {
        width: auto;
    }
`
const StyledText = styled(Text)`
    width: auto;
    margin-right: 4rem;

    @media ${device.tablet} {
        width: auto;
    }
`
const ImageWrapper = styled.div`
    position: absolute;
    width: 41.1rem;
    left: 40%;
    z-index: 2;
    top: 3rem;
`
const redirectToDerivApp = e => {
    e.preventDefault()
    window.open(deriv_app_url, '_blank')
}

const LinkFlex = styled(Flex)`
    margin-left: 16.5rem;

    &:hover {
        cursor: pointer;
    }
`

// TODO add <form />
const SignupPublic = ({
    email_error_msg,
    email,
    clearEmail,
    handleInputChange,
    handleValidation,
    autofocus,
    handleSocialSignup,
    is_submitting,
}) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image img_name="deriv-platform-banner.png" width="100%" />
            </ImageWrapper>
            <SignupFormWrapper>
                <StyledHeader font_size="2.8rem">
                    {localize('Join over 1 million traders worldwide')}
                </StyledHeader>
                <br />
                <StyledHeader as="h4" weight="500">
                    {localize('Get your free account now.')}
                </StyledHeader>
                <InputGroup>
                    <InputWrapper>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            error={email_error_msg}
                            value={email}
                            background="white"
                            tabletBackground="green-1"
                            inputColor="var(grey-5)"
                            labelFocusColor="grey-7"
                            label={localize('Email')}
                            placeholder={'example@mail.com'}
                            handleError={clearEmail}
                            onChange={handleInputChange}
                            onBlur={handleValidation}
                            autoFocus={autofocus}
                            autoComplete="off"
                            required
                            border="1px solid var(--color-grey-7)"
                            focusBorder="var(--color-grey-7)"
                        />
                    </InputWrapper>
                    <EmailButton type="submit" secondary disabled={is_submitting}>
                        {localize('Sign up')}
                    </EmailButton>
                </InputGroup>
                <SocialWrapper>
                    <StyledText>{localize('or sign up with')}</StyledText>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="facebook"
                        id="facebook"
                        type="button"
                        social
                    >
                        <span>
                            <Facebook />
                        </span>
                    </SocialButton>
                    <SocialButton
                        onClick={handleSocialSignup}
                        provider="google"
                        id="google"
                        type="button"
                        social
                    >
                        <span>
                            <Google />
                        </span>
                    </SocialButton>
                </SocialWrapper>
            </SignupFormWrapper>
            <BackgroundWrapper direction="column" ai="center" bg={Test}>
                <LinkFlex ai="center" onClick={redirectToDerivApp}>
                    <StyledHeader font_size="2.8rem" width="28.2rem" align="center" color="grey-8">
                        {localize('Get a taste of the Deriv experience')}
                    </StyledHeader>
                    <ChevronRight />
                </LinkFlex>
            </BackgroundWrapper>
        </Wrapper>
    )
}

SignupPublic.propTypes = {
    autofocus: PropTypes.bool,
    clearEmail: PropTypes.bool,
    email: PropTypes.string,
    email_error_msg: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleLogin: PropTypes.func,
    handleSocialSignup: PropTypes.func,
    handleValidation: PropTypes.func,
    is_submitting: PropTypes.bool,
}

export default SignupPublic
