import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import ImageStorage from '../../services/images'

const BLUE = '#0A6CAA'
const YELLOW = '#EAB936'

class KDAPerGame extends Component {
  static defaultProps = {
    team: {
      players: [
        {
          name: '',
          defuseKit: false,
          weapons: '',
          health: 0,
          armor: '',
          money: 0,
          kill: 0,
          assist: 0,
          death: 0
        }
      ]
    }
  }

  render() {
    const playerList = this.props.team.players

    let bgHeader = 'rgba(10, 108, 170, 0.4)'
    let bgColor = 'rgba(41, 144, 216, 0.2)'

    if (this.props.color == '#0A6CAA') {
      bgHeader = 'rgba(10, 108, 170, 0.4)'
      bgColor = 'rgba(41, 144, 216, 0.2)'
    }
    else if (this.props.color == '#EAB936') {
      bgHeader = 'rgba(234, 185, 54, 0.4)'
      bgColor = 'rgba(240, 180, 18, 0.2)'
    }

    return (
      <View>
        <View style={[stylesKDA.rowLive, { backgroundColor: bgHeader }]}>
          <Image resizeMode='contain' style={[stylesKDA.teamLogo]} source={ImageStorage.getCsgoImages('CT_Win')} />
          <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, styles.font18, stylesKDA.teamName]}>{this.props.team.name}</Text>
          <View style={[stylesKDA.col, { flexBasis: '8%' }]}></View>
          <View style={[stylesKDA.col, { flexBasis: '10%' }]}><Image resizeMode='contain' style={stylesKDA.img} source={ImageStorage.getCsgoImages('BUY')} /></View>
          <View style={[stylesKDA.col, { flexBasis: '10%' }]}><Image resizeMode='contain' style={stylesKDA.img} source={ImageStorage.getCsgoImages('HEALTH')} /></View>
          <View style={[stylesKDA.col, { flexBasis: '8%' }]}><Image resizeMode='contain' style={stylesKDA.img} source={ImageStorage.getCsgoImages('KEVLAR')} /></View>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center', flexBasis: '12%' }]}>$</Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center' }]}>K</Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center' }]}>A</Text>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center' }]}>D</Text>
        </View>
        {playerList.map(({ name, defuseKit, weapons, health, armor, money, kill, assist, death, isDead }) => {
          if (isDead) {
            defuseKit = false
            health = 0
            weapons = ''
            armor = ''
          }
          let healthColor = 'rgba(50,152,0,0.75)'
          if (health <= 10) {
            healthColor = 'rgba(228,10,10,.75)'
          }
          else if (health < 50) {
            healthColor = 'rgba(197,175,0,.75)'
          }
          return (
            <View key={name} style={[stylesKDA.rowLive, isDead && stylesKDA.rowDead, { backgroundColor: bgColor }]}>
              <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.firstCol]}>{name}</Text>
              <View style={[stylesKDA.col, { flexBasis: '8%' }]}>{defuseKit && <Image resizeMode='contain' style={stylesKDA.img} source={ImageStorage.getCsgoImages('DEFUSED')} />}</View>
              <View style={[stylesKDA.col, { flexBasis: '10%' }]}>{weapons && weapons.trim() != '' && <Image resizeMode='contain' style={{ maxWidth: '98%', maxHeight: '98%' }} source={ImageStorage.getCsgoImages(weapons)} />}</View>
              <View style={[stylesKDA.col, { flexBasis: '10%', position: 'relative', borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.2)', height: 13 }]}>
                <View style={{ position: 'absolute', borderRadius: 3, backgroundColor: healthColor, width: `${health}%`, height: '100%', alignSelf: 'flex-start' }}></View>
                <Text numberOfLines={1} style={[stylesKDA.primeFont, { textAlign: 'center', width: '100%', position: 'absolute', lineHeight: 13 }]}>{health}</Text>
              </View>
              <View style={[stylesKDA.col, { flexBasis: '8%' }]}>{armor && armor.trim() != '' && <Image resizeMode='contain' style={stylesKDA.img} source={ImageStorage.getCsgoImages(armor)} />}</View>
              <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center', flexBasis: '12%' }]}>${money}</Text>
              <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center' }]}>{kill}</Text>
              <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center' }]}>{assist}</Text>
              <Text adjustsFontSizeToFit numberOfLines={1} style={[stylesKDA.primeFont, stylesKDA.col, { textAlign: 'center' }]}>{death}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}
const stylesKDA = StyleSheet.create({
  rowLive: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 31,
    marginBottom: 2,
    paddingLeft: 4
  },
  rowDead: {
    opacity: 0.25
  },
  primeFont: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Roboto_medium',
    alignSelf: 'center'
  },
  teamLogo: {
    flexBasis: '5%',
  },
  teamName: {
    flexBasis: '25%',
    alignItems: 'center',
    paddingLeft: 5
  },
  firstCol: {
    flexBasis: '30%',
    alignItems: 'center',
    paddingLeft: 5
  },
  col: {
    flexBasis: '7%',
    alignItems: 'center'
  },
  img: {
    width: 16,
    height: 16,
    maxWidth: '100%',
    maxHeight: '100%'
  }
})
export default class CSGOScoreBoard extends Component {
  render() {
    let leftTeam = {
      name: 'ORDER',
      players: [
        { name: 'aliStair', defuseKit: false, weapons: 'ak47', health: 73, armor: 'KEVLAR', money: 1400, kill: 23, assist: 6, death: 11 },
        { name: 'gfdgre', defuseKit: false, weapons: 'awp', health: 0, armor: 'KEVLAR', money: 750, kill: 10, assist: 3, death: 16, isDead: true },
        { name: 'aliShfgnb tair', defuseKit: false, weapons: 'cz75a', health: 10, armor: 'KEVLAR', money: 0, kill: 10, assist: 1, death: 14 },
        { name: 'vcxvcxv', defuseKit: true, weapons: 'deagle', health: 43, armor: 'KEVLAR_HELMET', money: 150, kill: 9, assist: 1, death: 13 },
        { name: 'bvcbcvb', defuseKit: false, weapons: 'famas', health: 100, armor: 'KEVLAR', money: 0, kill: 9, assist: 1, death: 14 }
      ]
    }

    let rightTeam = {
      name: 'Cloud9',
      players: [
        { name: 'liazz', defuseKit: false, weapons: 'm4a1_silencer', health: 100, armor: 'KEVLAR', money: 7450, kill: 18, assist: 4, death: 10 },
        { name: 'fefwdfs', defuseKit: false, weapons: 'mac10', health: 9, armor: 'KEVLAR_HELMET', money: 2950, kill: 18, assist: 2, death: 12 },
        { name: 'ewrefd', defuseKit: false, weapons: 'p250', health: 0, armor: 'KEVLAR', money: 5200, kill: 17, assist: 6, death: 16, isDead: true },
        { name: 'bvcbc', defuseKit: false, weapons: 'ump45', health: 75, armor: 'KEVLAR_HELMET', money: 6950, kill: 10, assist: 4, death: 10 },
        { name: 'rewrdf', defuseKit: false, weapons: 'glock', health: 100, armor: 'KEVLAR', money: 2550, kill: 5, assist: 2, death: 13 }
      ]
    }

    return (
      <View style={{ position: 'relative', flex: 1 }}>
        <Image style={styles.backgroundImage} source={ImageStorage.getCsgoImages('train')} />
        <View style={[styles.bgTransparent, { padding: 8 }]}>
          <View style={[styles.bgTransparent, styles.row, { height: 31, alignItems: 'center' }]}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.primeFont, { flex: 0.3, color: '#bcbcbc' }]}>R: 7 - cbble</Text>
            <View style={{ flex: 0.4, flexDirection: 'row' }}>
              <Text style={[styles.primeFont, styles.font22, { textAlign: 'right', flex: 0.4, color: BLUE }]}>4</Text>
              <Text style={[styles.primeFont, styles.font22, { textAlign: 'center', flex: 0.2, color: '#fff' }]}>:</Text>
              <Text style={[styles.primeFont, styles.font22, { textAlign: 'left', flex: 0.4, color: YELLOW }]}>4</Text>
            </View>
            <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.primeFont, { flex: 0.3, textAlign: 'right', color: '#fff' }]}>1:26</Text>
          </View>
          <KDAPerGame
            team={leftTeam}
            color={BLUE}
          />
          {/*Round history*/}
          <View>
            <View style={[styles.borderBot, { flexDirection: 'row', height: 20 }]}>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('CT_Win')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('CT_Win')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('CT_Win')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('ST')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30, styles.borderRight]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('BOMD_DEFUSED')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('BOMD_DEFUSED')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
            </View>
            <View style={[{ flexDirection: 'row', height: 20 }]}>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('T_Win')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('T_Win')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('T_Win')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30, styles.borderRight]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('BOMD_EXPLODED')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('BOMD_EXPLODED')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
              <View style={[styles.col30]}><Image resizeMode='contain' style={styles.scoreIcon} source={ImageStorage.getCsgoImages('EMPTY')} /></View>
            </View>
          </View>
          <KDAPerGame
            team={rightTeam}
            color={YELLOW}
          />
        </View>
      </View>

    )
  }
}




const styles = StyleSheet.create({
  primeFont: {
    fontSize: 12,
    fontFamily: 'Roboto_medium',
    alignSelf: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  bgTransparent: {
    backgroundColor: 'transparent'
  },
  separator: {
    backgroundColor: '#D7D7D7',
    height: 1
  },
  borderBot: {
    borderBottomColor: 'rgba(255,255,255,.1)',
    borderBottomWidth: 0.5
  },
  borderRight: {
    borderRightColor: 'rgba(255,255,255,.1)',
    borderRightWidth: 0.5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 0,
    margin: 0
  },
  text: {
    fontFamily: 'Roboto_medium',
    fontSize: 13,
    lineHeight: 26,
    textAlign: 'center'
  },
  scoreIcon: {
    margin: '1%',
    maxWidth: '98%',
    maxHeight: '98%',
    alignItems: 'center'
  },
  col: {
    flexBasis: '15%',
    justifyContent: 'space-around'
  },
  col30: {
    flexBasis: `${100 / 30}%`
  },
  font22: { fontSize: 22 },
  font18: { fontSize: 18 },
  font10: { fontSize: 10 },
  font8: { fontSize: 8 }
})
