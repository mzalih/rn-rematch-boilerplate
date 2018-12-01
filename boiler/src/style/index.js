import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'   ,
    backgroundColor: "#eafcf9",
    margin: 0 ,height:'100%' 
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  transparent:{backgroundColor: "#00000000" },
   headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: "100%",
  },
   title: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 0,
    width: "100%",
  },
  circle100: {
    borderRadius:50,
    height:100,
    width: 100,
  },
  headerStyle: {
      backgroundColor: '#AAfcf9',
    },
})