import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CommonInput } from './screens/Login';

function App(): React.JSX.Element {
  const [signup, setSignup] = useState(false)
  const [Confirm, setConfirm] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    console.log(signup);

  }, [signup])

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='#4ed3da'
      />

      <View style={styles.container}>

        <Text style={styles.title}>{!signup ? 'Login Screen' : 'Signup Screen'}</Text>

        <CommonInput
          text={'Email'}
          value={email}
          onChange={(text) => setEmail(text)}
          color='orange'
        />

        <CommonInput
          text={'Password'}
          value={password}
          onChange={(text) => setPassword(text)}
          color='white'
        />

        {signup ?
          <CommonInput
            text={'Confirm Password'}
            value={Confirm}
            onChange={(text) => setConfirm(text)}
            color='green'
          /> :
          null}

        <TouchableOpacity>
          <Text style={[styles.signup, { marginTop: 10, marginBottom: 20 }]}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { opacity: email == '' || password == '' ? 0.5 : 1 }]} disabled={email === '' || password === ''}>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>
            {!signup ? 'LOGIN' : 'SIGNUP'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setSignup(!signup)
        }}>
          <Text style={[styles.signup, { fontSize: 18 }]}>{signup ? 'Login' : 'Signup'}</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={email === '' && password === '' && Confirm === ''} onPress={() => {
          setEmail("")
          setPassword("")
          setConfirm('')
        }}>
          <Text style={[styles.signup, { fontSize: 18, opacity: email === '' && password === '' && Confirm === '' ? 0.5 : 1 }]}>clear</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, width:'80%', position: 'absolute', bottom: 100, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, top: 70, width: '90%', marginLeft: 10 }} numberOfLines={ showMore ? null : 2}>
            I wholeheartedly agree that [Website Name] is a comprehensive platform, offering an array of well-curated content, insightful articles, and user-friendly features that cater to the diverse needs and interests of its audience, effectively fostering an engaging and enriching online experience
          </Text>
          <TouchableOpacity style={{ width: 20, top: 80, height: 20, borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}
          onPress={()=>{setShowMore(!showMore)}}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#4ed3da',
    justifyContent: 'center'
  },
  title: {
    color: '#fb5a5a',
    fontSize: 45,
    fontWeight: '900',
    marginBottom: 40
  },
  input: {
    backgroundColor: '#3ab4ba',
    height: 50,
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center',
    marginVertical: 10
  },
  button: {
    backgroundColor: '#fb5a5a',
    height: 50,
    width: '80%',
    borderRadius: 50,
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center'
  },
  signup: {
    color: 'white',
    fontWeight: '600',
  }


});

export default App;
