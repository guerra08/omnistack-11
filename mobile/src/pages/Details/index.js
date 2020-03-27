import React from 'react'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Details(){

    const nav = useNavigation()
    const msg = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cachorro machucado" com o valor de 120,00'

    function navigateBack(){
        nav.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro machcado',
            recipients: ['g.g.bruno.00@gmail.com'],
            body: msg
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=54991124596&text=${msg}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                
                <TouchableOpacity onPress={    navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041"></Feather>
                </TouchableOpacity>
            </View> 

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cão machucado</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>120,00</Text>
            </View>

            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}