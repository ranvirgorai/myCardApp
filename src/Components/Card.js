import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import theme from '../Utils/Theme';
import Tag from './Tag';
export default function Card({ stats, ...props }) {

    function getCardTypeStyle(type) {

        let cardTypeStyle = {
            borderRightColor: theme.background,
        }

        if (type === 'primery') {
            cardTypeStyle = {
                borderRightColor: theme.primery,
            }
        } else if (type === 'info') {
            cardTypeStyle = {
                borderRightColor: theme.info,
            }

        } else if (type === 'danger') {
            cardTypeStyle = {
                borderRightColor: theme.danger,
            }
        }

        return cardTypeStyle
    }


    return <View style={[cardMainWrapper, getCardTypeStyle(props.cardType)]}>
        <View style={styles.imageNameWrapper}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <View style={styles.nameWrapper}>
                <Text>{props.name}</Text>
                <View style={styles.autherNameWrapper}>
                    <Text>by {props.autherName}</Text>
                    <Image source={{ uri: props.icon}} />             {/*//can use icon */}
                </View>
            </View>
        </View>
        <View style={styles.tagWrapper}>
            {props.tags?.map((item, index) => {
                return <Tag type={item.type} label={item.label} key={item.label} />
            })}
        </View>
        <View style={styles.statsWrapper}>
            {props.stats.map(item=>Stats(item))}
      
        </View>
        <View style={styles.statsWrapper}>
            {Stats(props.amount)}
            <Text style={styles.button}>Watch</Text>
            <Text style={styles.button}>Unfollow</Text>
        </View>
    </View>

}

function Stats(statsData) {
    return <View style={styles.stats}>
        <Text>{statsData.label}</Text>
        <View style={styles.statsValueWrapper}>
            {statsData.level !== 0 ? statsData.level === 1 ? <Text style={styles.onUp}>^</Text> : <Text style={[styles.onUp, { transform: { rotate: 90 } }]}>^</Text> : null}
            <Text style={statsData.level !== 0 ? statsData.level === 1 ? styles.onUp : styles.onDown : {}}> {statsData.value}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    cardMainWrapper: {
        backgroundColor: theme.background,
        borderRadius: 4,
        flex: 1,
        borderRightColor: theme.background,
        borderRightWidth: 2
    },
    image: {
        width: 100,
        height: 100,
    },
    imageNameWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    nameWrapper: {
        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    autherNameWrapper: {
        flexDirection: 'row'
    },
    tagWrapper: {
        flexDirection: 'row'
    },
    statsWrapper: {
        flexDirection: 'row'
    },
    stats: {
        flexDirection: 'column'
    },
    statsValueWrapper: {
        flexDirection: 'column'
    },
    onUp: {
        color: theme.primery,

    },
    onDown: {
        color: theme.secondry
    },
    button:{
        color:theme.primery
    }
})