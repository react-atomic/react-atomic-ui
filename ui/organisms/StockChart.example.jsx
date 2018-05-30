import React, {PureComponent} from 'react';
import {
    FullScreenExample as FullScreen
} from "organism-react-code";
import {
    StockChartCompute
} from 'organism-react-stockcharts';
import {
    ajaxDispatch
} from 'organism-react-ajax';


class StockChartExample extends PureComponent
{
    state = {
        data: null
    };

    componentDidMount()
    {
        ajaxDispatch({
            type: 'ajaxGet',
            params: {
                url: '//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json',
                callback: (json) => {
                    this.setState({data: {trades: json}});
                }
            }
        });
    }

    render()
    {
        const {data} = this.state;
        if (!data) {
            return null;
        }
        return (
            <FullScreen
                id="full-page-stock-chart"
                button="open full screen"
            >
                <StockChartCompute
                    data={data}
                    tradeRowsLocator={d => d.trades}
                    tradeHighLocator={d => d.h}
                    tradeLowLocator={d => d.l}
                    tradeOpenLocator={d => d.o}
                    tradeCloseLocator={d => d.c}
                    tradeVolumeLocator={d => d.v}
                    tradeDateLocator={d => d.t}
                />
            </FullScreen>
        );
    }
}

export default StockChartExample;
