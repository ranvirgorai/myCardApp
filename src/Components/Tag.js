import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import theme from '../Utils/Theme';

export default function Tag(props) {

    function getTagTypeStyle(type) {

        let cardTypeStyle = {
            backgroundColor: theme.danger,
        }

        if (type === 'primery') {
            cardTypeStyle = {
                backgroundColor: theme.primery,
            }
        } else if (type === 'info') {
            cardTypeStyle = {
                backgroundColor: theme.info,
            }

        } else if (type === 'danger') {
            cardTypeStyle = {
                backgroundColor: theme.danger,
            }
        }

        return cardTypeStyle
    }


    return <View style={[styles.tagMainWrapper, getTagTypeStyle(props.type)]}><Text style={styles.textStyle}>{props.label}</Text></View>

}

const styles = StyleSheet.create({
    tagMainWrapper: {
        backgroundColor: theme.danger,
        borderRadius: 4,
        paddingHorizontal:4,
        paddingVertical:2,
        marginRight:5,
        marginTop:5
    },
    textStyle: {
        color: "#ffffff"
    }

})