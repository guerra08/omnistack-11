import React from 'react' 
import {Feather} from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents(){


    const nav = useNavigation()

    function navigateToDetail(){
        nav.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList style={styles.incidentsList} 
                data={[1,2,3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cão machucado</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>120,00</Text>

                    <TouchableOpacity onPress={navigateToDetail} style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    )
}