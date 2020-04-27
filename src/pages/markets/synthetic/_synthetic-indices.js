import React from 'react'
import PropTypes from 'prop-types'
import OtherMarkets from '../_other-markets.js'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import Multipliers from './_multipliers.js'
import SimpleSteps from 'common/_simple-steps'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import ExclusiveTradeType from 'images/svg/exclusive-trade-types.svg'
import MarketandRisk from 'images/svg/market-and-risk.svg'
import SevenTrading from 'images/svg/seven-trading.svg'

const StockIndices = ({ simple_step_content }) => {
    simple_step_content[1].text =
        'Open a real account, make a deposit, and start trading Synthetic Indices and other markets.'
    return (
        <div>
            <WhyTrade
                header={<Localize translate_text="Why trade Synthetic Indices on Deriv" />}
                text={
                    <Localize translate_text="Our exclusive Synthetic Indices are engineered to simulate real-world market movements, unaffected by real-world events and disruptions. Unlike financial markets, Synthetic Indices are available 24/7, have constantly volatility, fixed generation intervals, and are free of market and liquidity risks." />
                }
            >
                <div
                    text={
                        <Localize translate_text="High leverage, tight spreads, and 24/7 trading" />
                    }
                    icon={<SevenTrading />}
                ></div>
                <div
                    text={
                        <Localize translate_text="Free from real-world market and liquidity risks" />
                    }
                    icon={<MarketandRisk />}
                ></div>
                <div
                    text={<Localize translate_text="Responsive, easy-to-use platforms" />}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div
                    text={<Localize translate_text="Exclusive access to innovative trade types" />}
                    icon={<ExclusiveTradeType />}
                ></div>
                <div
                    text={<Localize translate_text="Smart and friendly support, 7 days a week" />}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            <AvailableTrades
                Margin={Margin}
                DigitalOptions={DigitalOptions}
                Multipliers={Multipliers}
                name="Synthetic Indices"
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading Synthetic Indices on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="Synthetic_Indices" />
        </div>
    )
}
StockIndices.propTypes = {
    simple_step_content: PropTypes.array,
}
export default StockIndices
