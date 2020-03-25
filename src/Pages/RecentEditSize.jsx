import React, { Component } from 'react'
import GraphPage from './GraphPage'
import PieChart from '../Components/PieChart'
import { getRecentLargestEdits } from '../Backend/APIWrapper'

export const RecentEditSizeSettings = {
  getData: getRecentLargestEdits,
  refreshTime: 2000,
  refreshMethod: getRecentLargestEdits,
  value: item => {
    Math.abs(item.newlen - item.oldlen)
  },
  colorBy: 'type',
  colors: 'pastel1',
  onClick: function(click) {
    window.open('https://www.wikidata.org/wiki/' + click.id, '_blank')
  },
  tooltip: function(click) {
    return this.tooltip(click, 'https://www.wikidata.org/wiki/')
  },
}

class RecentEditSize extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: this.props.history,
      paused: false,
    }
  }

  handlePause = event => {
    let paused = this.state.paused
    this.setState({ paused: !paused })
  }

  render() {
    return (
      <GraphPage
        handlePause={this.handlePause}
        paused={this.state.paused}
        explanation={
          <div>
            {'The largest of the last 500 edits.' +
              ' Hover over a section to get a preview of the page, or click to open the page in a new tab.'}
            <p>
              <img className="legend" src={require('../legend.svg')} />
            </p>
          </div>
        }
        graph={
          <PieChart
            fullGraph={true}
            settings={RecentEditSizeSettings}
            paused={this.state.paused}
          />
        }
        name={'Largest Recent Edits'}
      />
    )
  }
}
export default RecentEditSize