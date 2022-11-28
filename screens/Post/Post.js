import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import DateTimePicker from '../../components/DateTimePicker';
import Text from '../../components/common/Text'
import Box from '../../components/common/Box'
import BasicButton from '../../components/common/BasicButton'
import Moment from 'moment';
import TextInput1 from '../../components/common/TextInput'
import GoogleButton from '../../components/GoogleButton'
import API from '../../Utilities/api';
import {
  GoogleSignin,
  statusCodes
} from '@react-native-google-signin/google-signin';
export default function Post({navigation, route}) {

  const [textInputValue, settextInputValue] = useState('12345566456')

  const [openDateTimePicker, setopenDateTimePicker] = useState(false)
  const [modeDateTimePicker, setmodeDateTimePicker] = useState('date')
  const [date, setdate] = useState(new Date(new Date().getTime() + (24 * 60 * 60 * 1000)))

  useEffect( () => {

    var logs ={
      email: 'customer@crescentek.com',
      password: '12345678',
    }

loginApi(logs)

  }, [])

  const loginApi = async (logs) => 
  {
var response = await API.post('login', logs);
console.log('response: ',response )
  }

const onChangeDateTimePicker = (date) =>
{
  Moment.locale('en');
  console.log('Selected date is: ', String(Moment(date).format('DD-MM-yyyy')))
  setopenDateTimePicker(false)

}
  
const openDateTimePicker1 = (mode, hideOrShow) =>
{
  setopenDateTimePicker(hideOrShow)
  setmodeDateTimePicker(mode)
  
}
const signInWithGoogle = async () => {
  try {
    
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('userInfooooo test', userInfo);
    
  } catch (error) 
  {
    console.log('error: ', error.code, )

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
  return (
    <Box backgroundColor='white' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant={"heading"} style={{ marginVertical: 7, marginHorizontal: 10 }}>
                Test
            </Text>

            <TextInput1 value={textInputValue} onChangeText={(Text)=>settextInputValue(Text)} multiline={false} style={{ marginVertical: 7, marginHorizontal: 20}} />
              
            <BasicButton onPress={()=> openDateTimePicker1('date', true)} style={{ marginVertical: 7, marginHorizontal: 10}}>Button</BasicButton>

            <GoogleButton onPress={()=> signInWithGoogle()} style={{ marginVertical: 7, marginHorizontal: 10}}>Button</GoogleButton>

            {/* <BasicButton onPress={()=> signIngoo()} style={{ marginVertical: 7, marginHorizontal: 10}}>Google Signin</BasicButton> */}

            

            <DateTimePicker
             mode={modeDateTimePicker}
             maxDate={new Date("2040-12-31")}
             minDate={new Date("1989-12-31")}
             value={date}
             minuteInterval={15}
             dateTimePickerVisible={openDateTimePicker}
             onDateChange={val => setdate(val)}
             onBackdropPress={() => setopenDateTimePicker(false)}
             onPressDone={vallll => onChangeDateTimePicker(vallll)}
           />

    </Box>
  )
}