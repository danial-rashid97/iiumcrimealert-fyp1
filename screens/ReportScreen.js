import React, { Component } from 'react';
import {StyleSheet,Text, View,TouchableOpacity,Image,Alert,ScrollView,FlatList,Button
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class ReportScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Man Steals RM287 in Electric Toothbrushes ",time:"2020-08-01 12:15 pm",
         image:"https://parklandtalk.com/wp-content/uploads/2018/12/Police-Lights-Parkland-Talk.jpg", 
         description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula..."},
        {id:2, title: "IGP says over 50,000 pending commercial crime cases solved so far", time:"2020-08-12 12:00 pm", 
        image:"https://media.malaymail.com/uploads/articles/2020/2020-01/20200106FL8.jpg", 
        description:"KUALA LUMPUR, Aug 7 — Police have successfully solved 50,853 out 73,425 commercial crime cases which have been pending since the last 20 years, said Inspector-General of Police Tan Sri Abdul Hamid Bador."} ,
        {id:3, title: "Sg Buloh protection racket: 4 MBSA enforcement officers remanded", time:"2020-08-05 12:21 pm",
         image:"https://assets.nst.com.my/images/articles/28fakemacc_field_image_listing_featured.var_1530167010.jpg", 
         description:"Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula..."}, 
        {id:4, title: "Crime rate nosedived during MCO; motorcycle theft most rampant", time:"2020-08-12 12:00 pm", 
        image:"https://media.malaymail.com/uploads/articles/2020/2020-07/mazlan_lazim_08072020.jpg", 
        description:"KUALA LUMPUR, Aug 12 — A video widely shared on social media today of a shooting in Sentul here involved the arrest of suspected drug dealer who attempted to flee capture, city police said tonight."}, 
        {id:5, title: "Most crime cases reported by outsiders, not residents",time:"2020-06-12 12:11 pm", 
        image:"https://media.malaymail.com/uploads/articles/2019/2019-08/20190824SN_2.jpeg", 
        description:"KUALA LUMPUR, July 18 — About 55 per cent of criminal cases in Brickfields are not reported by local residents but by those who work there or transit through KL Sentral"}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.spacing}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.report}>
                <Image style={styles.reportImage} source={{uri:item.image}}/>
                <View style={styles.reportHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.timeContainer}>
                      <MaterialCommunityIcons name="calendar" size={24} color="red" />
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.reportFooter}>
                  <View style={styles.commentContainer}>
                    <View style={styles.commentSection}>
                      <TouchableOpacity style={styles.commentButton}>
                        <MaterialCommunityIcons name="eye" size={24} color="#ff6347" />
                        <Text style={styles.commentLabel}>50</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.commentSection}>
                      <TouchableOpacity style={styles.commentButton}>
                      <MaterialCommunityIcons name="comment" size={24} color="#ff6347" />
                        <Text style={styles.commentLabel}>4</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  spacing: {
    marginTop: 10,
  },
  report:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  reportHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reportContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  reportFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  reportImage:{
    flex: 1,
    height: 100,
    width: null,
  },
  title:{
    fontSize:18,
    flex:1,
    fontWeight: 'bold'
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginLeft: 5,
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },

  commentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  commentSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  commentlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  commentButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   