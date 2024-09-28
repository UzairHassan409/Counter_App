
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/FontAwesome';



const App = () => {
  const [counter, setcounter] = useState(0)
  const [startUp,setStartUp]=useState(true)


  const increment=()=>{
    setcounter(counter+1)
  }

  const decrement=()=>{
     counter==0?
    setcounter(0):setcounter(counter-1)
  }

  const clear=()=>{
    setcounter(0)
  }
  return (
    <View style={styles.mainContainer}>

      <Text style={{fontStyle:'italic',fontSize:40,marginTop:90}}> Counter </Text>

      {
        startUp==true? 
        <View style={{marginTop:280}}>

           <TouchableOpacity style={styles.startUpBtn} onPress={()=>setStartUp(false)}>
            <Text style={{fontSize:35,color:'white'}}>  Start  </Text>
          </TouchableOpacity>

        </View>

        :<CounterScreen data={counter} increment={increment} decrement={decrement} clear={clear} />

      }
      
    </View>
  )
}

export default App;

const CounterScreen=({data,increment,decrement,clear})=>{
  return(
    <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{data}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.minusBtn} onPress={()=>decrement()}>
            <AntDesign name='minus' size={30} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.plusBtn} onPress={()=>increment()}>
            <AntDesign name='plus' size={30} color={"white"} />
          </TouchableOpacity>

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.clearBtn} onPress={()=>clear()}>
            <Text style={{ fontSize: 20, color: 'white' }}>Clear</Text>
          </TouchableOpacity>
        </View>

      </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a9a9a9'
  },
  startUpBtn:{
    backgroundColor:'#1e90ff',
    width:125,
    height:65,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  counterContainer: {
    backgroundColor: '#d3d3d3',
    width: 300,
    height: 260,
    marginTop: 190,
    padding: 20,
    borderRadius:25

  },
  counterText: {
    fontSize: 60,
    textAlign:'center',
    fontWeight:'bold'
  },
  minusBtn: {
    backgroundColor: '#1e90ff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
    marginRight:30
  },
  plusBtn: {
    backgroundColor: '#1e90ff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
    marginLeft:30
  },
  clearBtn: {
    backgroundColor: '#1e90ff',
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
    marginTop:20
  },
  
})