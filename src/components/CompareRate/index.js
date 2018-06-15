import React, { Component } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Text } from 'native-base'
import PropTypes from 'prop-types'
import StatHeader from '../StatHeader'

const GREEN = '#388E3C'
const RED = '#F53939'
class PercentRate extends Component {
  static propTypes = {
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    leftStyle: PropTypes.array,
    rightStyle: PropTypes.array
  }

  render() {
    return (
      <View style={styles.container}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.percent} >
          {this.props.leftText}
        </Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressTransparentLeft}>
            <View style={this.props.leftStyle} />
          </View>
          <View style={styles.progressTransparentRight}>
            <View style={this.props.rightStyle} />
          </View>
        </View>
        <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.percent, styles.txtRight]} >
          {this.props.rightText}
        </Text>
      </View>
    )
  }
}

class HundredPercentRate extends Component {
  static propTypes = {
    name: PropTypes.string,
    time: PropTypes.string,
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    leftSecondText: PropTypes.string,
    rightSecondText: PropTypes.string,
    leftTotalText: PropTypes.string,
    rightTotalText: PropTypes.string,
    leftStyle: PropTypes.array,
    rightStyle: PropTypes.array
  }

  render() {
    let customFont
    if (this.props.time && Platform.OS === 'android') {
      customFont = { fontSize: 12 }
    }

    if (this.props.leftSecondText != 0 && this.props.rightSecondText != 0) {
      return (
        <View style={styles.container}>
          <View style={[styles.col3, styles.rowContainer]}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont, { color: GREEN }]} >{this.props.leftText}/</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont, { color: RED }]} >{this.props.leftSecondText}</Text>
            {this.props.leftTotalText != 0 &&
              <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont]}>/{this.props.leftTotalText}</Text>
            }
          </View>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.title, styles.col3, customFont]}>{this.props.name}</Text>
          <View style={[styles.col3, styles.rowContainer, styles.contentRight]} >
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont, { color: GREEN }]} >{this.props.rightText}/</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont, { color: RED }]} >{this.props.rightSecondText}</Text>
            {this.props.rightTotalText != 0 &&
              <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont]}>/{this.props.rightTotalText}</Text>
            }
          </View>
        </View >
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={[styles.col3, styles.score, customFont]}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont, { color: GREEN }]} >{this.props.leftText}</Text>
            {this.props.leftTotalText != 0 &&
              <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont]}>/{this.props.leftTotalText}</Text>
            }
          </Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.title, styles.col3, customFont]}>{this.props.name}</Text>
          <Text style={[styles.col3, styles.score, styles.txtRight]} >
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, styles.txtRight, customFont, { color: RED }]} >{this.props.rightText}</Text>
            {this.props.rightTotalText != 0 &&
              <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.score, customFont]}>/{this.props.rightTotalText}</Text>
            }
          </Text>
        </View>
      )
    }
  }
}

export default class CompareRate extends Component {
  static propTypes = {
    title: PropTypes.string,
    attributes: PropTypes.array.isRequired,
    leftColor: PropTypes.string,
    rightColor: PropTypes.string
  }

  static defaultProps = {
    leftColor: '#388E3C',
    rightColor: '#F53939'
  }

  _secondToMinutes(seconds) {
    seconds = Math.round(seconds)
    const minute = Math.floor(seconds / 60)
    const leftMinutes = seconds % 60
    return `${minute}:${leftMinutes}`
  }

  render() {
    return (
      <View>
        {this.props.title && <StatHeader title={this.props.title} />}
        {
          this.props.attributes.map(({ isPercent, name, left, leftSecond, leftTotal, right, rightSecond, rightTotal, time }, index) => {
            let leftText = isPercent ? `${left}%` : parseFloat(left).toFixed(2).toString().replace('.00', '')
            let rightText = isPercent ? `${right}%` : parseFloat(right).toFixed(2).toString().replace('.00', '')

            let leftSecondText = parseFloat(leftSecond).toFixed(2).toString().replace('.00', '')
            let rightSecondText = parseFloat(rightSecond).toFixed(2).toString().replace('.00', '')

            let leftTotalText = parseFloat(leftTotal).toFixed(2).toString().replace('.00', '')
            let rightTotalText = parseFloat(rightTotal).toFixed(2).toString().replace('.00', '')

            if (time) {
              leftText = this._secondToMinutes(left)
              rightText = this._secondToMinutes(right)
            }
            if (!isPercent) {
              left = (left / (left + right)) * 100
              right = 100 - left
            }

            const leftStyle = [{ width: `${left}%` }]
            const rightStyle = [{ width: `${right}%` }]

            leftText = leftText === 'NaN' || leftText === 'NaN:NaN' ? '0' : leftText
            rightText = rightText === 'NaN' || rightText === 'NaN:NaN' ? '0' : rightText

            leftSecondText = leftSecondText === 'NaN' || leftSecondText === 'NaN:NaN' ? '0' : leftSecondText
            rightSecondText = rightSecondText === 'NaN' || rightSecondText === 'NaN:NaN' ? '0' : rightSecondText

            leftTotalText = leftTotalText === 'NaN' || leftTotalText === 'NaN:NaN' ? '0' : leftTotalText
            rightTotalText = rightTotalText === 'NaN' || rightTotalText === 'NaN:NaN' ? '0' : rightTotalText

            return (
              <View style={{ backgroundColor: '#FFFFFF' }} key={name} >
                {index > 0 && <View style={styles.separator} />}
                {!!isPercent &&
                  <PercentRate
                    leftStyle={leftStyle}
                    rightStyle={rightStyle}
                    leftText={leftText}
                    rightText={rightText}
                  />
                }
                {!isPercent &&
                  <HundredPercentRate
                    name={name}
                    time={time}
                    leftStyle={leftStyle}
                    rightStyle={rightStyle}
                    leftText={leftText}
                    rightText={rightText}
                    leftSecondText={leftSecondText}
                    rightSecondText={rightSecondText}
                    leftTotalText={leftTotalText}
                    rightTotalText={rightTotalText}
                  />
                }
              </View>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 0,
    paddingRight: 0
  },
  col3: { flexBasis: `${100 / 3}%` },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: '#4D4D4D',
    fontSize: 14,
    fontFamily: 'Roboto_medium',
    textAlign: 'center'
  },
  score: {
    color: '#4D4D4D',
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Roboto_medium',
    textAlign: 'left',
    textAlignVertical: 'center'
  },
  name: {
    paddingTop: 6,
    paddingBottom: 0,
    color: '#4D4D4D',
    fontSize: 14,
    fontFamily: 'Roboto_medium',
    width: '100%',
    textAlign: 'center'
  },
  separator: {
    backgroundColor: '#E8E7E7',
    height: 1,
    marginLeft: 8,
    marginRight: 8
  },
  percent: {
    width: 80,
    textAlign: 'left',
    textAlignVertical: 'center',
    color: '#959595',
    fontWeight: 'bold'
  },
  progressContainer: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#959595',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  progressTransparentLeft: {
    flex: 0.5,
    alignItems: 'flex-end'
  },
  progressTransparentRight: {
    flex: 0.5
  },
  progress: {
    height: 8
  },
  txtRight: {
    textAlign: 'right'
  },
  contentRight: {
    justifyContent: 'flex-end'
  }
})
