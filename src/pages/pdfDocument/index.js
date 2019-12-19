import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import api from '../../services/api'


export default function pdfDocument({ history }) {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
      textAlign: 'center'

    },
    field: {
      padding: 25,
    },
    field2: {
      padding: 25
    }
  });

  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    var certidao = {
      "certidao":
      {
        "name": localStorage.getItem('name'),
        "id": localStorage.getItem('matricula'),
        "municipioNasc": localStorage.getItem('municipioNasc'),
        "ufNasc": localStorage.getItem('ufNasc'),
        "sexo": localStorage.getItem('sexo'),
        "filiacao": localStorage.getItem('filiacao')
      }
    }

    const response = await api.post('/certificate', certidao);
    await sleep(900);
    console.log('asdasd', response);
    console.log(response.data.success);
    
   // if (response.data.success == true) {
      history.push('/Start');
    //}



  }

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>

        <View style={styles.section}>
          <View style={styles.field}>
            <Text style={{ fontSize: 40 }}> Certidão de Nascimento </Text>
          </View>

          <View style={styles.field2}>
            <Text style={{ fontSize: 30 }}> {localStorage.getItem('name')}</Text>
          </View>

          <View style={styles.field2}>
            <Text>Matricula: {localStorage.getItem('matricula')}</Text>
          </View>

          <View style={styles.field2}>
            <Text>Município: {localStorage.getItem('municipioNasc')}</Text>
          </View>

          <View style={styles.field2}>
            <Text>Uf: {localStorage.getItem('ufNasc')}</Text>
          </View>

          <View style={styles.field2}>
            <Text>Sexo: {localStorage.getItem('sexo')}</Text>
          </View>

          <View style={styles.field2}>
            <Text>Filiação: {localStorage.getItem('filiacao')}</Text>
          </View>

        </View>
      </Page>
    </Document>
  );

  return (
    <form onSubmit={handleSubmit}>
      <PDFViewer style={{ height: "100vh", width: "40vw" }}>
        <MyDocument />
      </PDFViewer>
      <button className="btn" type="submit">Cadastrar</button>
    </form>

  );
};