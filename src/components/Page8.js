/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationChange as rol
} from 'react-native-responsive-screen';

import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let screenheight = Dimensions.get("window").height;

import { HEART_IMAGE, HEART_ATACK_NO_OP_IMAGE, HEART_ATACK_OP_IMAGE } from '../..';
import { strings } from '../..';


class Page8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  navigate (selectedIndex) {
    const pages = ['Page 1','Page 7', '', 'Page 9','Page 11']
    const page = pages[selectedIndex]
    this.props.navigation.navigate(page)
    this.setState({selectedIndex})
  }
  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }
    render() {
      const buttons = [
        <Icon name="angle-double-left" style={{fontSize: 25}}/>,
        <Icon name="angle-left" style={{fontSize: 25}}/>,
        "8",
        <Icon name="angle-right" style={{fontSize: 25}}/>,
        <Icon name="angle-double-right" style={{fontSize: 25}}/>,
      ]
      const { selectedIndex } = this.state
        return (
            <SafeAreaView style={{flex: 1}}>
            <ScrollView
            maximumZoomScale={10.0}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
            <View style={styles.body}>
            <View style={[styles.titleContainer, styles.centerTitle]}>
                    <Text style={styles.sectionTitle}>{strings('page8.title')}</Text>
                </View>

              <View style={styles.cardContainer}>
                  <Image style={styles.image} source={ HEART_IMAGE } resizeMode="contain"/>
                  <Text style={[styles.cardText, styles.highlight, {textAlign: "center", flex: 1, flexWrap: 'wrap'}]}>
                  {strings('page8.subtitle1')}<Text style={styles.orangeText}>{strings('page8.subtitle2')}</Text> {strings('page8.subtitle3')}
                  </Text>
              </View>
              <View style={[styles.columnContainer]}>
                  <View style={[styles.whiteColumn, styles.whiteLeftColumn]}>
                    <Text style={[styles.sectionParagraph, styles.highlight]}>
                    {strings('page8.paragraph1')}
                    </Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>{strings('page8.paragraph2')}</Text>
                      {strings('page8.paragraph3')}
                    </Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>{strings('page8.paragraph4')}</Text>
                      {strings('page8.paragraph5')}
                    </Text>
                    <View
                    style={[styles.imageContainer]}>
                    <Image
                    onLayout={this.onLayout}
                    style={[styles.dotImage, {
                      width: this.state.width,
                      height: this.state.width * .37}]} source={ HEART_ATACK_NO_OP_IMAGE } resizeMode="contain"/>
                    </View>
                    <View style={[styles.container]}>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.blue]}></View>
                      </View>
                      <View style={styles.item}>
                      <Text style={styles.legendFont}>{strings('page8.paragraph6')}</Text>
                      </View>
                        <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.orange]}></View>
                        </View>
                        <View style={styles.item}>
                        <Text style={styles.legendFont}>
                        {strings('page8.paragraph7')}
                          </Text></View>
                    </View>
                  </View>
                  <View style={[styles.whiteColumn, styles.whiteRightColumn]}>
                      <Text style={[styles.sectionParagraph, styles.highlight]}>
                      {strings('page8.paragraph8')}
                      </Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>{strings('page8.paragraph9')}</Text>
                      {strings('page8.paragraph10')}
                    </Text>
                    <Text style={[styles.sectionParagraph]}>
                      <Text style={styles.highlight}>{strings('page8.paragraph11')}</Text>
                      {strings('page8.paragraph12')}
                    </Text>
                    <View style={styles.imageContainer}>
                    <Image 
                    onLayout={this.onLayout}
                    style={[styles.dotImage, {
                      width: this.state.width,
                      height: this.state.width * .37}]}
                      source={ HEART_ATACK_OP_IMAGE } resizeMode="contain"/>
                    </View>
                    <View style={[styles.container]}>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.blue]}></View>
                      </View>
                      <View style={styles.item}>
                      <Text style={styles.legendFont}>{strings('page8.paragraph13')}</Text>
                      </View>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.darkBlue]}></View>
                      </View>
                      <View style={styles.item}>
                      <Text style={styles.legendFont}>{strings('page8.paragraph14')}</Text>
                      </View>
                      <View style={styles.dotItem}>
                        <View style={[styles.circle, styles.orange]}></View>
                      </View>
                      <View style={styles.item}>
                      <Text style={styles.legendFont}>{strings('page8.paragraph15')}</Text>
                      </View>
                    </View>
                  </View>
              </View>
              <View
              onLayout={this.onLayout}
              style={[styles.smallCardContainer]}>
                <View
                onLayout={this.onLayout}
                style={[styles.smallCard, {width: this.state.width * .6}]}>
                    <Text style={[styles.smallCardText, styles.highlight]}>
                    {strings('page8.paragraph16')}
                    </Text>
                </View>
              </View>
              <View style={styles.sectionContainer}>
                  <Text style={styles.sectionNote}>
                  <Text style={styles.highlightUnderline}>{strings('page8.note1')}</Text>{strings('page8.note2')}
                  </Text>
              </View>
              <View style={styles.attributionWrapper}>
                <Text style={[styles.attribution, styles.highlight]}>Sources of Information</Text>
                <Text style={styles.attribution}>Garg et al. Routine Invasive Versus Selective Invasive Strategy in Elderly Patients Older Than 75 Years 
                    With Non-ST-Segment Elevation Acute Coronary Syndrome: A Systematic Review and Meta-Analysis. Mayo Clinical Proceedings. 2018; 436-444.
                </Text>
              </View>
              <View></View>
            </View>
            </ScrollView>
              <View style={styles.footer}>
                <Text style={styles.copyright}>Copyright 2020 New York University.</Text>
                <Text style={styles.copyright}>All Rights Reserved.</Text>
                <View style={styles.buttonGroup}>
              <ButtonGroup
            buttons={buttons}
            onLayout={this.onLayout} 
            disabled={[2]}
            onPress={this.navigate}
            selectedIndex={selectedIndex}
            containerStyle={{height: hp('8%'), width: this.state.width * .9}}/>
            </View>
                {/* <Text style={styles.pageNumber}>8</Text> */}
              </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#f6f6f6',
    // height: screenheight
  },
  sectionContainer: {
    margin: wp('3%')
  },
  titleContainer: {
    marginTop: hp('3%'),
    paddingHorizontal: wp('5%'),
  },
  sectionTitle: {
    fontSize: hp('3%'),
    fontWeight: '700',
    fontFamily: 'Avenir',
    textAlign: 'center'
  },
  whiteColumn: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: wp('.1%'),
    padding: wp('4%'),
    flex: 1,
},
whiteRightColumn: {
  marginLeft: hp('.5%'),
  marginRight: hp('1%')
},
whiteLeftColumn: {
  marginRight: hp('.5%'),
  marginLeft: hp('1%')
},
legendItem: {
  marginTop: 5
},
imageContainer: {
  margin: wp('2%'),
  alignItems: "center"
},
container: {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  // margin: wp('3%'),
  // margin: wp('3%'),
  // alignItems: 'flex-start' // if you want to fill rows left to right
},
dotItem: {
  width: '10%',
  marginTop: 5,
},
item: {
  width: '90%' // is 50% of container width
},
legendFont: {
  fontSize: hp('2%'),
},
cardContainer: {
  padding: 5,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: wp('2%'),
  backgroundColor: Colors.white,
  borderColor: Colors.gray,
  borderWidth: wp('.1%'),
  marginBottom: wp('4%')
},
smallCardContainer: {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  flex: 1,
  marginTop: wp('3%')
},
smallCard: {
  margin: wp('2%'),
  padding: wp('2%'),
  width: wp('80%'),
  backgroundColor: Colors.white,
  borderColor: Colors.gray,
  borderWidth: wp('.2%'),
},
columnContainer: {
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
},
image: {
  width: 50,
  height: 50,
  marginRight: 10,
  marginLeft: 10
},

cardText: {
  fontSize: hp('2.2%'),
  // fontWeight: '700',
  fontFamily: 'Avenir'
},
space: {
  margin: 5,
},
smallCardText: {
  fontSize: hp('2.2%'),
  fontWeight: "200",
  textAlign: "center",
  fontFamily: 'Avenir'
},
orangeText: {
  color: "#ed7d31"
},
centerText: {
  textAlign: 'center'
},
highlightUnderline: {
  fontWeight: '700',
  textDecorationLine: 'underline'
},
highlight: {
  fontWeight: '800',
},
centerText: {
  textAlign: 'center'
},
sectionParagraph: {
  fontSize: hp('2.2%'),
  fontWeight: '400',
  color: Colors.black,
  fontFamily: 'Avenir',
  alignItems: 'center',
  margin: wp('1.5%'),
  textAlign: 'center'
},
sectionNote: {
  fontSize: hp('1.5%'),
  fontFamily: 'Avenir',
  // margin: wp('1%'),
  textAlign: 'left'
},
dotText: {
  fontSize: wp('4%'),
  fontWeight: '400',
  color: Colors.black,
  fontFamily: 'Avenir',
  alignItems: 'center',
},
 circle: {
  width: wp('3%'),
  height: wp('3%'),
  borderRadius: wp('3%') / 2,
},
blue: {
  backgroundColor: "#7cb4d4",
},
orange: {
  backgroundColor: "#f68000",
},
darkBlue: {
  backgroundColor: "#456d84"
},
circleContainer: {
  margin: 2,
  marginTop: -4
},
sideBySide: {
  flex: 1
},

//  FOOTER 
  footer: {
    margin: hp('.5%')
  },
  pageNumber: {
    fontSize: hp('2%'),
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  copyright: {
    fontSize: hp('1.2%'),
    textAlign: 'right',
    fontFamily: 'Avenir',
  },
  attributionWrapper: {
    margin: wp('3%'),
  },
  attribution: {
    fontSize: hp('1.2%'),
    textAlign: 'left',
    fontFamily: 'Avenir',
  },
  buttonGroup: {
    alignItems: "center",
  }
});

export default Page8;
