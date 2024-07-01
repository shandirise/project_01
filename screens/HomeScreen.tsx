  import React, {useState} from 'react';
  import {Alert, StyleSheet, Text, View, Image, ScrollView, Button, Pressable} from 'react-native';
  import Snackbar from 'react-native-snackbar';
  import Modal from 'react-native-modal';

  let snackbar;

  export default function HomeScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    return(
      
      <ScrollView style={container}>
        <View>
          <Text style={Sub}>Pemanasan 1 menit</Text>
          <View style={card.penjelasan}>
            <View style={{padding:10}}>
              <Image style={gambar.Ukuran} source={require('../stretch.jpg')}></Image>
            </View>
            <View style={{padding:10}}>
              <Text style={keterangan}>Mulailah latihan Anda dengan meregangkan dan memanjangkan otot Anda</Text>
            </View>
          </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Pemanasan sebelum berolahraga bagaikan mobil yang dipanaskan sebelum melaju. Tubuh yang dihangatkan dengan gerakan ringan meningkatkan aliran darah ke otot, sehingga otot lebih lentur dan siap untuk bergerak. Hal ini membantu mencegah cedera, meningkatkan performa, fleksibilitas, fokus mental, dan mempercepat pemulihan otot. Luangkan 5-10 menit untuk pemanasan yang sesuai dengan jenis olahraga, lakukan bertahap, dengarkan tubuh, dan konsultasikan dengan dokter jika memiliki kondisi medis tertentu. Pemanasan adalah kunci untuk berolahraga dengan aman dan efektif.</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Keluar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Manfaat</Text>
        </Pressable>
      </View>

        <Button  title='Mulai Latihan' onPress={() => {
    snackbar = Snackbar.show({
      text: 'Latihan dimulai',
      duration: Snackbar.LENGTH_INDEFINITE,
    });
    setTimeout(() => {
      Snackbar.dismiss();
    }, 10000);
    navigation.navigate("Pemanasan")
  }} />
        </View>
          <View>
          <Text style={Sub}>Plank: 3 Set 30 Detik</Text>
          <View style={card.penjelasan}>
            <View style={{padding:10}}>
              <Image style={gambar.Ukuran} source={require('../plank.jpg')}></Image>
            </View>
            <View style={{padding:10}}>
              <Text style={keterangan}>Posisi seperti push-up dengan beban tubuh di lengan bawah, siku, dan jari kaki. Lengan harus berada tepat di bawah bahu dengan seluruh tubuh dalam garis lurus dan punggung benar-benar rata.</Text>
            </View>
          </View>
          <Text style={styles.textStyle}>Manfaat</Text>
          <Button  title='Mulai Latihan' onPress={() => {
    snackbar = Snackbar.show({
      text: 'Latihan dimulai',
      duration: Snackbar.LENGTH_INDEFINITE,
    });
    setTimeout(() => {
      Snackbar.dismiss();
    }, 10000);
    navigation.navigate("Plank")
  }} />
  
        </View>
            <View>
          <Text style={Sub}>Push-up: 3 set 12 repetisi</Text>
          <View style={card.penjelasan}>
            <View style={{padding:10}}>
              <Image style={gambar.Ukuran} source={require('../PushUp.jpg')}></Image>
            </View>
            <View style={{padding:10}}>
              <Text style={keterangan}>Berbaring di lantai menghadap ke bawah dan letakkan tangan Anda dengan jarak sekitar 36 inci sambil mengangkat tubuh Anda sejauh lengan. Turunkan ke bawah hingga dada Anda hampir menyentuh lantai saat Anda menarik napas. Buang napas dan tekan tubuh bagian atas kembali ke posisi awal,</Text>
            </View>
          </View>
          <Text style={styles.textStyle}>Manfaat</Text>
          <Button  title='Mulai Latihan' onPress={() => {
    snackbar = Snackbar.show({
      text: 'Latihan dimulai',
      duration: Snackbar.LENGTH_INDEFINITE,
    });
    setTimeout(() => {
      Snackbar.dismiss();
    }, 10000);
    navigation.navigate("PushUp")
  }} />
        </View>
            <View>
          <Text style={Sub}>Variasi Sit-up: 3 set 15 repetisi</Text>
          <View style={card.penjelasan}>
            <View style={{padding:10}}>
              <Image style={gambar.Ukuran} source={require('../SitUp.jpg')}></Image>
            </View>
            <View style={{padding:10}}>
              <Text style={keterangan}>Untuk sit-up 'asli', lutut ditekuk dan telapak kaki diletakkan rata di lantai. Letakkan tangan Anda di belakang kepala. Kencangkan otot perut Anda secara lembut dengan menarik pusar ke tulang belakang. Jaga tumit tetap di lantai dan jari-jari kaki rata dengan lantai, angkat kepala secara perlahan dan lembut terlebih dahulu, diikuti dengan tulang belikat. Tarik ke atas dari lantai mencapai sudut 90 derajat. Tahan posisi itu sebentar. Lakukan variasi sit-up dengan menyentuh lutut yang berlawanan dengan tangan terentang.</Text>
            </View>
          </View>
          <Text style={styles.textStyle}>Manfaat</Text>
        <Button  title='Mulai Latihan' onPress={() => {
    snackbar = Snackbar.show({
      text: 'Latihan dimulai',
      duration: Snackbar.LENGTH_INDEFINITE,
    });
    setTimeout(() => {
      Snackbar.dismiss();
    }, 10000);
    navigation.navigate("SitUp")
  }} />
        </View>
            <View>
          <Text style={Sub}>Squat: 3 set 12 repetisi</Text>
          <View style={card.penjelasan}>
            <View style={{padding:10}}>
              <Image style={gambar.Ukuran} source={require('../Squat.jpg')}></Image>
            </View>
            <View style={{padding:10}}>
              <Text style={keterangan}>Berdirilah dengan kaki dibuka selebar bahu. Anda bisa meletakkan tangan Anda di belakang kepala. Ini akan menjadi posisi awal Anda. Mulailah gerakan dengan melenturkan lutut dan pinggul, duduk bersandar dengan pinggul. Lanjutkan hingga kedalaman penuh, jika Anda mampu. Balikkan gerakan dengan cepat hingga Anda kembali ke posisi awal. Saat Anda berjongkok, angkat kepala dan dada Anda dan dorong lutut Anda keluar.</Text>
            </View>
          </View>
          <Text style={styles.textStyle}>Manfaat</Text>
          <Button  title='Mulai Latihan' onPress={() => {
    snackbar = Snackbar.show({
      text: 'Latihan dimulai',
      duration: Snackbar.LENGTH_INDEFINITE,
    });
    setTimeout(() => {
      Snackbar.dismiss();
    }, 10000);
    navigation.navigate("Squat")
  }} />

  <Button  title='Progress' onPress={() => {
    navigation.navigate("Progres")
  }} />
        </View>
      </ScrollView>
    )
    
  };

  const page = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      overflow:'scroll',
    },
    text: {
      color: '#999',
    },
    penjelasan:{
      fontSize:14,
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',

    }
  });
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  const card = StyleSheet.create({
    penjelasan: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between',
      maxWidth: '70%',
    },
  });
  const head = StyleSheet.create({
    Judul: {
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: 40,
    },
    SubJudul:{
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: 30,
    }
  });

  const lists = StyleSheet.create({
    listContainer: {
      flex: 1,
      backgroundColor: '#000048',
    },
  });

  const gambar = StyleSheet.create({
    Ukuran: {
      width: 100,
      height: 150,
    },
    
  });

  const keterangan = StyleSheet.compose(page.text, page.penjelasan);
  const container = StyleSheet.compose(page.container, lists.listContainer);
  const text = StyleSheet.compose(page.text , head.Judul);
  const Sub = StyleSheet.compose(page.text, head.SubJudul);
